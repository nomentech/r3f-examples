import { createContext, forwardRef, Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics, useBox, useHingeConstraint, useLockConstraint, usePlane } from '@react-three/cannon'

const normalizeSize = ([px = 0, py = 0, pz = 0]) => ([ox = 1, oy = 1, oz = 1]) => [px * ox, py * oy, pz * oz]
const GROUP_GROUND = 2 ** 0
const GROUP_BODY = 2 ** 1
const context = createContext(null)

const Plane = ({ args, ...props }: any) => {
  const [ref]: any[] = usePlane(() => ({ type: 'Static', collisionFilterGroup: GROUP_GROUND, ...props }))
  return (
    <group ref={ref}>
      <mesh>
        <planeGeometry args={args} />
        <meshBasicMaterial color="#ffb385" />
      </mesh>
      <mesh receiveShadow>
        <planeGeometry args={args} />
        <shadowMaterial color="lightsalmon" />
      </mesh>
    </group>
  )
}

const ConstraintPart = forwardRef(
  ({ config = {}, enableMotor, motorSpeed, color, children, name, pivot = [0, 0, 0], parentPivot = [0, 0, 0], ...props }: any, ref: any) => {
    const parent: any = useContext(context)
    const normParentPivot = parent ? normalizeSize(parent[1].args) : () => undefined
    const normPivot = props.args ? normalizeSize(props.args) : () => undefined

    const [bodyRef] = useBox(
      () => ({ collisionFilterGroup: GROUP_BODY, collisionFilterMask: GROUP_GROUND, linearDamping: 0.4, mass: 1, ...props }),
      ref,
    )

    const [, , hingeApi]: any[] = useHingeConstraint(bodyRef, parent ? parent[0] : null, {
      collideConnected: false,
      axisA: [0, 0, 1],
      axisB: [0, 0, 1],
      pivotA: normPivot(pivot),
      pivotB: normParentPivot(parentPivot),
      ...config,
    })

    useEffect(() => void hingeApi[(enableMotor ? 'enable' : 'disable') + 'Motor'](), [enableMotor])
    useEffect(() => void hingeApi.setMotorSpeed(motorSpeed), [motorSpeed])

    return (
      <context.Provider value={[bodyRef, props] as any}>
        <BoxShape ref={bodyRef} {...props} color={color} />
        {children}
      </context.Provider>
    )
  },
)

const BoxShape = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: any, ref: any) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

const Obstacles = () => {
  return (
    <>
      <ConstraintPart
        collisionFilterGroup={GROUP_GROUND}
        collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        mass={4}
        args={[-30, -0.4, 30]}
        position={[-45, -4, 0]}
        rotation={[0, Math.PI / -4, 0]}
        color={'#ffb385'}
      />
      <ConstraintPart
        collisionFilterGroup={GROUP_GROUND}
        collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        mass={4}
        args={[-15, -0.5, 15]}
        position={[-50, -2, 0]}
        rotation={[0, Math.PI / -1.25, 0]}
        color={'#dc9c76'}
      />
      <ConstraintPart
        collisionFilterGroup={GROUP_GROUND}
        collisionFilterMask={GROUP_BODY | GROUP_GROUND}
        mass={4}
        args={[-10, -0.5, 10]}
        position={[-45, 0, -5]}
        rotation={[0, Math.PI / 3, 0]}
        color={'#c58e6e'}
      />
    </>
  )
}

const Robot = forwardRef(({ ...props }, ref) => {
  const [motorSpeed, setMotorSpeed] = useState(7)
  const legsLeftRef: any = ref
  const legsRightRef: any = useRef()
  useLockConstraint(legsRightRef, legsLeftRef, undefined as any)
  return (
    <group {...props} onPointerDown={() => setMotorSpeed(2)} onPointerUp={() => setMotorSpeed(7)}>
      <Legs ref={legsLeftRef} delay={1000} bodyDepth={3} motorSpeed={motorSpeed} />
      <Legs ref={legsRightRef} motorSpeed={motorSpeed} />
    </group>
  )
})

const Legs = forwardRef(({ bodyDepth = 0, delay = 0, motorSpeed = 7, ...props }: any, bodyRef) => {
  const horizontalRef: any = useRef()
  const frontLegRef: any = useRef()
  const frontUpperLegRef: any = useRef()
  const backLegRef: any = useRef()
  const partDepth = 0.3
  const bodyWidth = 10
  const bodyHeight = 2
  const legLength = 6
  const size3 = normalizeSize([1, 3, partDepth])
  const size5 = normalizeSize([1, 5, partDepth])
  const size10 = normalizeSize([1, 10, partDepth])
  const [isWalking, setIsWalking] = useState(false)

  // Hinge constraints for triangulations
  useHingeConstraint(frontUpperLegRef, frontLegRef, {
    collideConnected: false,
    axisA: [0, 0, 1],
    axisB: [0, 0, 1],
    pivotA: size3([0, 0.5, 0.5]) as any,
    pivotB: size5([0, 0.5, -0.5]) as any,
  })

  useHingeConstraint(backLegRef, horizontalRef, {
    collideConnected: false,
    axisA: [0, 0, 1],
    axisB: [0, 0, 1],
    pivotA: size5([0, 0.5, 0.5]) as any,
    pivotB: size10([0, 0.5, -0.5]) as any,
  })

  useEffect(() => {
    const t = setTimeout(() => setIsWalking(true), delay)
    return () => clearTimeout(t)
  }, [])

  return (
    <group {...props}>
      {/* Body */}
      <ConstraintPart
        ref={bodyRef}
        mass={1}
        args={[bodyHeight, bodyWidth, bodyDepth ? bodyDepth + partDepth * 3 : 0]}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 0, bodyDepth]}
        transparent={!bodyDepth}
        opacity={Number(!!bodyDepth)}>
        {/* Upper front leg */}
        <ConstraintPart
          ref={frontUpperLegRef}
          args={[1, 3, partDepth]}
          position={[-2, 0.5, bodyDepth]}
          rotation={[0, 0, Math.PI / 3]}
          pivot={[0, -0.5, -0.5]}
          parentPivot={[0, 0.2, 0.5]}
          color="#85ffb3"
        />
        {/* Crank */}
        <ConstraintPart
          enableMotor={isWalking} // Motor enabled here
          motorSpeed={motorSpeed}
          args={[0.5, 1, partDepth]}
          position={[bodyWidth * -0.5, -1.5 / 2, bodyDepth]}
          parentPivot={[0, 0.5, 0.5]}
          pivot={[0, 0.5, -0.5]}
          color="black">
          {/* Front leg */}
          <ConstraintPart
            ref={frontLegRef}
            args={[1, legLength, partDepth]}
            position={[bodyWidth * -0.5, -1, bodyDepth]}
            rotation={[0, 0, Math.PI / -6]}
            parentPivot={[0, -0.5, 0.5]}
            pivot={[0, 0, -0.5]}
            color="#85b3ff">
            {/* Horizontal bar */}
            <ConstraintPart
              ref={horizontalRef}
              parentPivot={[0, 0, 0.5]}
              pivot={[0, -0.5, -0.5]}
              args={[1, bodyWidth, partDepth]}
              position={[0, 0, bodyDepth]}
              color="#ff85b3"
              rotation={[0, 0, Math.PI / -2.5]}
            />
          </ConstraintPart>
        </ConstraintPart>
        {/* Back leg */}
        <ConstraintPart
          ref={backLegRef}
          args={[1, legLength, partDepth]}
          pivot={[0, -0, -1]}
          parentPivot={[-0.0, -0.5, 0.5]}
          position={[bodyWidth * 0.5, 0, bodyDepth]}
          rotation={[0, 0, Math.PI / 4]}
          color="#85b3ff"></ConstraintPart>
      </ConstraintPart>
    </group>
  )
})

const Scene = () => {
  const cameraRef: any = useRef()
  const robotRef: any = useRef()
  useFrame(() => cameraRef.current.lookAt(robotRef.current.position))
  return (
    <Suspense fallback={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[-40, 10, 20]} />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[20, 30, 10]}
        angle={Math.PI / 5}
        penumbra={1}
        intensity={1}
        distance={180}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <color attach="background" args={['#f6d186']} />
      <Physics iterations={80} gravity={[0, -40, 0]}>
        <Robot ref={robotRef} />
        <Obstacles />
        <Plane args={[120, 120]} position={[-20, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Suspense>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas shadows gl={{ alpha: false }}>
        <OrbitControls />
        <Scene />
      </Canvas>
      <div style={{ position: 'absolute', top: 20, left: 100, color: 'white', fontSize: '1.2em' }}>
        <pre>* click to reduce speed</pre>
      </div>
    </>
  )
}

export default Example

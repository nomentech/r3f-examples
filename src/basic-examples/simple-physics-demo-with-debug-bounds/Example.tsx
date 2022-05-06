import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Debug, Physics, useCompoundBody, usePlane } from '@react-three/cannon'

const Plane = (props: any) => {
  const [ref]: any[] = usePlane(() => ({ type: 'Static', ...props }))

  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial color='#ffb385' />
    </mesh>
  )
}

const CompoundBody = (props: any) => {
  const [ref]: any[] = useCompoundBody(() => ({
    mass: 12,
    ...props,
    shapes: [
      { type: 'Box', position: [0, 0, 0], rotation: [0, 0, 0], args: [1, 1, 1] },
      { type: 'Sphere', position: [1, 0, 0], rotation: [0, 0, 0], args: [0.65] }
    ]
  }))

  return (
    <group ref={ref}>
      <mesh receiveShadow castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
      <mesh receiveShadow castShadow position={[1, 0, 0]}>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}

const Example = ({ children }: any) => {
  // Mount a 3rd <CompoundBody /> object after 2 seconds
  const [flag, set] = useState(false)
  useEffect(() => void setTimeout(() => set(true), 2000), [])

  return (
    <>
      { children }
      <Canvas dpr={[1, 2]} shadows gl={{ alpha: false }} 
        camera={{ position: [-2, 1, 7], fov: 50 }}>
        <color attach='background' args={['#f6d186']} />
        <hemisphereLight intensity={1} />
        <spotLight position={[5, 5, 5]} angle={0.75} penumbra={1} intensity={1} 
          castShadow shadow-mapSize={[1024, 1024]} />
        <Physics iterations={6} >
          <Debug scale={1.1} color='black'>
            <Plane rotation={[-Math.PI/2, 0, 0]} />
            <CompoundBody position={[1.5, 5, 0.5]} rotation={[1.25, 0, 0]} />
            <CompoundBody position={[2.5, 3, 0.25]} rotation={[1.25, -1.25, 0]} />
            {flag && <CompoundBody position={[2.5, 4, 0.25]} rotation={[1.25, -1.25, 0]} />}
          </Debug>
        </Physics>
      </Canvas>
    </>
  )
}

export default Example
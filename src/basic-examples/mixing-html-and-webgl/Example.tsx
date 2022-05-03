import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'

const Box = () => {
  const [size, set] = useState(2)
  const [hidden, setVisible] = useState(false)
  return (
    <mesh scale={size * 0.5}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
        onOcclude={(v) => {setVisible(v); return null}}>
        <span>Size: </span>
        <input type='number' value={size} 
          onChange={e => set(e.target.valueAsNumber)} />
      </Html>
    </mesh>
  )
}

const Sphere = (props: any) => {
  const ref: any = useRef()
  useFrame(
    (state) => 
      ref.current.position.x = Math.sin(state.clock.getElapsedTime())
  )
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
} 

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <Box />
        <Sphere position={[0, 0, 1]} />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Example
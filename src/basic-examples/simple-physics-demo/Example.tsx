import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'

const Plane = (props: any) => {
  const [ref]: any[] = usePlane(() => ({ rotation: [-Math.PI/2, 0, 0], ...props}))
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color='#f0f0f0' />
    </mesh>
  )
}

const Cube = (props: any) => {
  const [ref]: any[] = useBox(() => ({ mass: 1, ...props}))
  return (
    <mesh castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  const [ready, set] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000)
    return () => clearTimeout(timeout)
  }, [])
  
  return (
    <>
      { children }
      <Canvas dpr={[1, 2]} camera={{ position: [-5, 5, 5], fov: 50}} shadows >
        <ambientLight />
        <spotLight angle={0.25}  penumbra={0.5} position={[10, 10, 5]} castShadow />
        <Physics>
        <Plane />
          <Cube position={[0, 5, 0]} />
          <Cube position={[0.45, 7, -0.25]} />
          <Cube position={[-0.45, 9, 0.25]} />
          {ready && <Cube position={[-0.45, 10, 0.25]} />}
        </Physics>
      </Canvas>
    </>
  )
}

export default Example
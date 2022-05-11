import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Cloud, Sky } from '@react-three/drei'

const Rig = () => {
  const { camera } = useThree()
  
  return useFrame((state) => {
    camera.position.z = Math.sin(state.clock.elapsedTime) * 20
  })
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas camera={{ position: [0, 0, 16], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <pointLight intensity={2} position={[0, 0, -1000]} />
        <Suspense fallback={null}>
          <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
          <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
          <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
          <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
          <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} />
        </Suspense>
        <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
        <Rig />
      </Canvas>
    </>
  )
}

export default Example
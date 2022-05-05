import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const Dodecahedron = (props: any) => {
  return (
    <mesh {...props}>
      <dodecahedronGeometry />
      <meshStandardMaterial roughness={0.75} emissive='#404057' />
      <Html distanceFactor={10}>
        <div className='p-[10px] text-left bg-[#202035] text-white rounded-md'>
          hello <br />
          world
        </div>
      </Html>
    </mesh>
  )
}

const Content = () => {
  const ref: any = useRef()
  useFrame(() => {
    ref.current.rotation.x = 
      ref.current.rotation.y = 
        ref.current.rotation.z += 0.01
  })

  return (
    <group ref={ref}>
      <Dodecahedron position={[-2, 0, 0]} />
      <Dodecahedron position={[0, -2, -3]} />
      <Dodecahedron position={[2, 0, 0]} />
    </group>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5] }}>
        <pointLight color='indianred' />
        <pointLight position={[10, 10, -10]} color='orange' />
        <pointLight position={[-10, -10, 10]} color='lightblue' />
        <Content />
      </Canvas>
    </>
  )
}

export default Example
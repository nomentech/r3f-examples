import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { WaveMaterial } from './WaveMaterial'

const ShaderPlane = () => {
  const ref: any = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <waveMaterial ref={ref} key={(WaveMaterial as any).key} toneMapped={true} colorStart={'#505050'} colorEnd={'black'} />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas>
        <ShaderPlane />
      </Canvas>
    </>
  )
}

export default Example
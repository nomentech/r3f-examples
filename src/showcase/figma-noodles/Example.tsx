import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Depth, LayerMaterial, Noise } from 'lamina'

import Noodles from './Noodles'
import kiMedium from './Ki-Medium.ttf'

const Bg = () => {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB='red' colorA='skyblue' alpha={1} mode='normal' near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping='local' type='white' scale={1000} colorA='white' colorB='black' mode='subtract' alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )
}

const Caption = ({ children }: any) => {
  const { width } = useThree((state) => state.viewport)

  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font={kiMedium}
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'>
      {children}
    </Text>
  )
}

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

const Example = ({ children }: any) => {
  return (
    <>    
      {children}
      <Canvas camera={{ position: [0, 0, 10], fov: 22 }} dpr={[1, 2]}>
        <Bg />
        <Caption>{`THE\nSEVENTY-TWO\nNAMES\nOF GOD.`}</Caption>
        <Noodles />
        <Rig />
      </Canvas>
    </>
  )
}

export default Example
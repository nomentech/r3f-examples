import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Outline, Select, Selection } from '@react-three/postprocessing'

const Box = (props: any) => {
  const ref: any = useRef()
  const [hovered, hover] = useState(false)
  useFrame((_, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))

  return (
    <Select enabled={hovered}>
      <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <boxGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
    </Select>
  )
}
const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas dpr={[1, 2]}>
        <color attach='background' args={[0x202020]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline blur visibleEdgeColor={0xffffff} edgeStrength={100} width={500} />
          </EffectComposer>
          <Box position={[-1, 0, 0]} />
          <Box position={[1, 0, 0]} />
        </Selection>
      </Canvas>
    </>
  )
}

export default Example
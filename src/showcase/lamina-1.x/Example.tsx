import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds, Edges, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Depth, Fresnel, LayerMaterial } from 'lamina'

import cursor from './cursor.glb'

const Cursor = (props: any) => {
  const ref: any = useRef()
  const { nodes }: any = useGLTF(cursor)
  const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } })

  // Animate gradient
  useFrame(({ clock }) => {
    const sin = Math.sin(clock.elapsedTime / 2)
    const cos = Math.cos(clock.elapsedTime / 2)
    ref.current.layers[0].origin.set(cos / 2, 0, 0)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <mesh { ...props } geometry={nodes.Cube.geometry}>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      <Edges color='white' />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 10], zoom: 200 }}>
        <color attach='background' args={['black']} />
        <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
          <Bounds fit clip observe margin={1.25}>
            <Cursor scale={[0.5, 1, 0.5]} />
          </Bounds>
          <gridHelper args={[10, 40, '#101010', '#050505']} position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        </group>
      </Canvas>
    </>
  )
}

export default Example
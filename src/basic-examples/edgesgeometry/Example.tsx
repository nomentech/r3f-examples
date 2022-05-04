import { Canvas } from '@react-three/fiber'
import { Edges, OrbitControls, Stage, useGLTF } from '@react-three/drei'

import modelPath from '../../models/headless.glb'
import { Suspense } from 'react'

const Model = () => {
  const { nodes } = useGLTF(modelPath) as any
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube.geometry}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
    </group>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 50}}>
        <Suspense fallback={null}>
          <Stage>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls dampingFactor={0.3} />
      </Canvas>
    </>
  )
}

export default Example
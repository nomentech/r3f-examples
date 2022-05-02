import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import modelHigh from '../../models/bust-hi.glb'
import modelLow from '../../models/bust-lo-draco.glb'

// This example shows how to prgressively load an asset through nested suspense blocks
// 1. A generic fallback
// 2. Lesser resolution
// 3. High resolution
const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Suspense fallback={<span>loading...</span>}>
        <Canvas dpr={[1, 2]} camera={{position: [-2, 2, 4], fov:25}}>
          <directionalLight position={[10, 10, 0]} intensity={1.5} />
          <directionalLight position={[-10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, 20, 0]} intensity={1.5} />
          <directionalLight position={[0, -10, 0]} intensity={0.25} />
          <Rotate position-y={-0.5} scale={0.2}>
            <Suspense fallback={<Model url={modelLow} />}>
              <Model url={modelHigh} />
            </Suspense>
          </Rotate>
        </Canvas>
      </Suspense>
    </>
  )
}

const Model = ({ url, ...props }: any) => {
  // useGLTF suspends the component, it literally stops processing
  const { scene } = useGLTF(url) as any
  // By the time we're here the model is gueranteed to be available
  return <primitive object={scene} {...props} />
}
const Rotate = (props: any) => {
  const ref: any = useRef()
  useFrame((state) => ref.current.rotation.y = state.clock.elapsedTime)
  return <group ref={ref} {...props} />
}

export default Example
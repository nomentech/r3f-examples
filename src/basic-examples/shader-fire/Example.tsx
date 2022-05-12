import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Fire } from './shaders/Fire'

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas camera={{ position: [0, -4, 5], fov: 50 }}>
        <color attach='background' args={[0x101010]} />
        <Suspense fallback={null}>
          <Fire scale={7} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Example
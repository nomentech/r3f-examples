import { Suspense, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { Html, OrbitControls, Preload } from '@react-three/drei'

import outside from '../../textures/2294472375_24a3b8ef46_o.jpg'
import inside from '../../textures/Photosphere1.jpg'

const store = [
  { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: outside, link: 1 },
  { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: inside, link: 0 }
  // ...
]

const Dome = ({ name, position, texture, onClick }: any) => {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color='white' />
        <Html center>
          <div className='cursor-pointer text-blue-500 text-sm' onClick={onClick}>{name}</div>
        </Html>
      </mesh>
    </group>
  )
}

const Portals = () => {
  const [which, set] = useState(0)
  const { link, ...props } = store[which]
  const maps = useLoader(THREE.TextureLoader, store.map(entry => entry.url))

  return (
    <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
  )
}

const Example = ( { children }: any) => {
  return (
    <>
      { children }
      <Canvas frameloop='demand' camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5} />
        <Suspense fallback={null}>
          <Preload all />
          <Portals />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Example
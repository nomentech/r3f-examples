import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useAspect } from '@react-three/drei'

import videoPath from '../../videos/10.mp4'

const Scene = () => {
  const size = useAspect(1800, 1000)
  const [video] = useState(() => 
    Object.assign(
      document.createElement('video'),
      {
        src: videoPath,
        crossOrigin: 'Anonymous', 
        loop: true, 
        muted: true
      }
    )
  )
  useEffect(() => void video.play(), [video])

  return (
    <mesh scale={size}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach='map' args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas orthographic>
        <Scene />
      </Canvas>
    </>
  )
}

export default Example
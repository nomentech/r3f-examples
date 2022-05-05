import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

import './ImageFadeMaterial'
import img1 from '../../textures/Img1.jpg'
import img2 from '../../textures/Img2.jpg'
import disp from '../../textures/10.jpg'

const FadingImage = () => {
  const ref: any = useRef()
  const [texture1, texture2, dispTexture] = useTexture([img1, img2, disp])
  const [hovered, setHover] = useState<number>(0)
  useFrame(() => (ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered, 0.1)))

  return (
    <mesh onPointerMove={() => setHover(1)} onPointerOut={() => setHover(0)} >
      <planeGeometry />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex-encoding={THREE.sRGBEncoding}
        tex2={texture2}
        tex2-encoding={THREE.sRGBEncoding}
        disp={dispTexture}
        disp-encoding={THREE.sRGBEncoding}
        toneMapped={false}
      />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <Suspense fallback={null}>
          <FadingImage />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Example
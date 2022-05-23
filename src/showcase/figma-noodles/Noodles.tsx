import { useMemo, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'
import { Depth, Fresnel, LayerMaterial, Noise } from 'lamina'

import worms from './worms-transformed.glb'

const colorA = new THREE.Color('#2032A5').convertSRGBToLinear()
const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
const fresnel = new THREE.Color('#E7B473').convertSRGBToLinear()

const Noodle = () => {
  const { viewport, camera } = useThree()
  const { nodes }: any = useGLTF(worms)
  const [geometry] = useState(() => nodes[`noodle_${Math.ceil(Math.random()*4)}`].geometry)
  const [speed] = useState(() => 0.1 + Math.random() / 10)
  const {x, y, z} = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    const x = THREE.MathUtils.randFloatSpread(bounds.width)
    const y = THREE.MathUtils.randFloatSpread(bounds.height * 0.75)
    return {x, y, z}
  }, [viewport])

  return (
    <Float position={[x, y, z]} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
      <mesh scale={5} geometry={geometry}>
        <LayerMaterial color={colorA}>
          <Depth colorA={colorA} colorB={colorB} alpha={0.5} mode='normal' near={0} far={2} origin={[1, 1, 1,]} />
          <Depth colorA='purple' colorB={colorB} alpha={0.5} mode='add' near={3} far={2} origin={[1, 1, 1,]} />
          <Fresnel mode='add' color={fresnel} intensity={0.3} power={2.5} bias={0.0} />
          <Noise mapping='local' type='simplex' scale={1000} colorA='#ffaf40' colorB='black' mode='overlay' />
        </LayerMaterial>
      </mesh>
    </Float>
  )
}

const Noodles = () => {
  return (
    <>
      {Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)}
    </>
  )
}

export default Noodles

useGLTF.preload(worms)

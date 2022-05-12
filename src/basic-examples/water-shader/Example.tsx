import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, extend, Object3DNode, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Water } from 'three-stdlib'

import water from '../../textures/waternormals.jpeg'
import { OrbitControls, Sky } from '@react-three/drei'

extend({ Water })
declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: Object3DNode<any, typeof Water>
    }
  }
}

const Ocean = () => {
  const ref: any = useRef()
  const gl: any = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, water)
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((_, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

const Box = () => {
  const ref: any = useRef()
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
  })
  return (
    <mesh ref={ref} scale={20}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Ocean />
          <Box />
        </Suspense>
        <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Example
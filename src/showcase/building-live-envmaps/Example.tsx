import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { applyProps, Canvas, useFrame } from '@react-three/fiber'
import { BakeShadows, ContactShadows, Environment, Float, Lightformer, useGLTF } from '@react-three/drei'

import porsche from './911-transformed.glb'
import { Depth, LayerMaterial } from 'lamina'

const Porsche = (props: any) => {
  const { scene, nodes, materials }: any = useGLTF(porsche)
  useMemo(() => {
    Object.values(nodes).forEach((node: any) => node.isMesh && (node.receiveShadow = node.castShadow = true))
    applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] })
    applyProps(materials.window, { color: 'black', roughness: 0, clearcoat: 0.1 })
    applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 1 })
    applyProps(materials.paint, { roughness: 0.5, metalness: 0.8, color: '#555', envMapIntensity: 2 })
  }, [nodes, materials])
  return <primitive object={scene} {...props} />
}

const CameraRig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t/5), 0, 10+Math.cos(t/5)), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}

const MovingSpots = ({ position = [2, 0, 2, 0, 2, 0, 2, 0]}) => {
  const group: any = useRef()
  useFrame((_, delta) => (group.current.position.z += delta * 15) > 60 && ( group.current.position.z = -60))
  return (
    <group rotation={[0, 0.5, 0]}>
      <group ref={group}>
        {position.map((x, i) => (
          <Lightformer key={i} form='circle' intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i*4]} scale={[3, 1, 1]} />
        ))}
      </group>
    </group>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas shadows dpr={[1, 2]} camera={{ position: [-10, 0, 15], fov: 30 }}>
        <color attach='background' args={[0x101060]} />
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
        <Porsche scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
        
        {/* Renders contents "live" into a HDRI environment (scene.environment). */}
        <Environment frames={Infinity} resolution={256} >
          {/* Ceiling */}
          <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <MovingSpots />
          {/* Sides */}
          <Lightformer intensity={4} rotation-y={Math.PI/2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
          <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
          <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
          {/* Accent (red) */}
          <Float speed={5} floatIntensity={2} rotationIntensity={2}>
            <Lightformer form='ring' color='red' intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
          </Float>
          {/* Background */}
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <LayerMaterial side={THREE.BackSide} color='#444' alpha={1} >
              <Depth colorA='blue' colorB='black' alpha={0.5} mode='normal' near={0} far={300} origin={[100, 100, 100]} />
            </LayerMaterial>
          </mesh>
        </Environment>

        <BakeShadows />
        <CameraRig />
      </Canvas>
    </>
  )
}

export default Example
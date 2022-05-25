import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { CameraShake, Cloud, Environment, OrbitControls, Sky } from '@react-three/drei'

import { Grass } from './Grass'
import { BlobGeometry } from './BlobGeometry'
import { Butterfly } from './Butterfly'
// import Particles from './Particles'

const rand = Array.from({ length: 15 }, () => ({
  position: [THREE.MathUtils.randFloat(0.5, 0.7), THREE.MathUtils.randFloat(0.5, 0.7), THREE.MathUtils.randFloat(0.5, 0.7)],
  scale: THREE.MathUtils.randFloat(0.5, 1)
}))

const Clouds = () => {
  return (
    <group>
      <Cloud depthTest={false} position={[-10, -6, -10]} speed={0.2} opacity={0.4} />
      <Cloud depthTest={false} position={[10, 6, -15]} speed={0.2} opacity={0.25} />
      <Cloud depthTest={false} position={[0, 10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[0, -10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[-10, -6, 15]} speed={0.2} opacity={0.3} />
      <Cloud depthTest={false} position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas dpr={1.5} camera={{position: [1, -1.25, 1] }}>
        <Grass>
          <BlobGeometry />
        </Grass>
        {rand.map((e, i) => (
          <Butterfly key={i} {...e} />
        ))}
        {/* <Particles amount={333} size={0.01} opacity={0.6} /> */}
        <Clouds />
        <Environment preset='sunset' />
        <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} />
        <CameraShake maxRoll={0.2} maxPitch={0.2} maxYaw={0.2} />
        <Sky />
      </Canvas>
    </>
  )
}

export default Example
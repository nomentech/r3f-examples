import { Suspense } from 'react'
import { Canvas, extend, Object3DNode, useLoader } from '@react-three/fiber'
import { Effects, Environment, OrbitControls, useTexture } from '@react-three/drei'
import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass'
import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader'
import cube from '../../models/cubicle-99.CUBE'
import terrazo from '../../textures/terrazo.png'
extend({ LUTPass })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      lUTPass: Object3DNode<any, typeof LUTPass>
    }
  }
}

const Grading = () => {
  const { texture3D }: any = useLoader(LUTCubeLoader as any, cube)

  return <Effects children={<lUTPass attachArray='passes' lut={texture3D} />} />
}

const Sphere = (props: any) => {
  const texture = useTexture(terrazo)

  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial envMapIntensity={0.4} map={texture} 
        clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0} />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas frameloop='demand' dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}
        className='bg-gradient-to-br from-[#cbbacc] to-[#2580b3]'>
        <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
        <Suspense fallback={null}>
          <Sphere />
          {/* <Grading /> */}
          <Environment preset='warehouse' />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Example
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Detailed, Environment, OrbitControls, useGLTF } from '@react-three/drei'

import bust1 from '../../models/bust-1-d.glb'
import bust2 from '../../models/bust-2-d.glb'
import bust3 from '../../models/bust-3-d.glb'
import bust4 from '../../models/bust-4-d.glb'

// Create 800 objects with random position and rotation data
const positions = [...Array(800)].map(() => ({
  position: [40 - Math.random() * 80, 40 - Math.random() * 80, 40 - Math.random() * 80],
  rotation: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2],
}))

const Bust = (props: any) => {
  // This will load 4 GLTF in parallel using React Suspense
  const levels = useGLTF([bust1, bust2, bust3, bust4])
  // By the time we're here these GLTFs exist, they're loaded
  // There are 800 instances of this component, but the GLTF data is cached and will be re-used ootb
  return (
    <Detailed distances={[0, 15, 25, 35, 100]} {...props}>
      {/* All we need to do is dump them into the Detailed component and define some distances
          Since we use a JSX mesh to represent each bust the geometry is being re-used w/o cloning */}
      {levels.map(({ nodes, materials }: any, index) => (
        <mesh receiveShadow castShadow key={index} geometry={nodes.Mesh_0001.geometry} material={materials.default} material-envMapIntensity={0.25} />
      ))}
      <mesh />
    </Detailed>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Suspense fallback={<span>loading...</span>}>
        <Canvas
          // Quick shortcut for setting up shadow maps
          shadows
          // Only render on changes and movement
          frameloop="demand"
          // Pixelratio using window.devicePixelRatio, no less than 1, no higher than 2
          dpr={[1, 2]}
          camera={{ position: [0, 0, 40] }}
          // Nice trick here, if your scene is static you can switch off shadowmap auto-update for more performance
          onCreated={({ gl }) => ((gl.shadowMap.autoUpdate = false), (gl.shadowMap.needsUpdate = true))}>
          {/* Let's render 800 Bust components with the data above */}
          {positions.map((props, i) => (
            <Bust key={i} {...props} />
          ))}
          <OrbitControls zoomSpeed={0.075} />
          <pointLight position={[0, 0, 0]} intensity={0.5} />
          <spotLight intensity={2.5} position={[50, 50, 50]} castShadow />
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </>
  )
}

export default Example
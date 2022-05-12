import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraShake, OrbitControls, Stage, useAnimations, useGLTF } from '@react-three/drei'

import robot from '../../models/robot-draco.glb'

// Handling controls in Threejs is hard bc 3rd party components that change the camera need to know
// about controls, or else all changes are overwritten. That is the case for both <Stage and <CameraShake.
// In latest R3F controls can be set as the default so that other parts of the app may react to it.
// By setting <OrbitControls makeDefault <Stage and <CameraShake are aware of the controls being used.
// Should your own components rely on default controls, throughout the three they're available as:
//   const controls = useThree(state => state.controls)
useGLTF.preload(robot)
const Model = (props: any) => {
  const { scene, animations }: any = useGLTF(robot)
  const { actions }: any = useAnimations(animations, scene)
  useEffect(() => {
    actions.Idle.play()
    scene.traverse((obj: any) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
  }, [actions, scene])
  return <primitive object={scene} {...props} />
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas shadows camera={{ fov: 50 }} className='bg-[#303035] bg-[url("./basic-examples/staging-and-camerashake/view.svg")] bg-no-repeat bg-contain bg-center z-10'>
        <Suspense fallback={null}>
          <Stage contactShadow={{ opacity: 1, blur: 2 }}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault />
        <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        />
      </Canvas>
    </>
  )
}

export default Example
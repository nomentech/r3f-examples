import { useEffect, useRef } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
extend({ EffectComposer, ShaderPass, RenderPass, SSAOPass, UnrealBloomPass, FXAAShader })

const Effects = () => {
  const composer: any = useRef()
  const { scene, gl, size, camera } = useThree()

  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 2)

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attach='passes-0' scene={scene} camera={camera} />
      {/* <sSAOPass attach='passes' args={[scene, camera]} kernelRadius={0.4} maxDistance={0.03} /> */}
      <shaderPass
        attach='passes-0'
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      />
    </effectComposer>
  )
}

export default Effects
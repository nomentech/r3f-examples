import { useMemo } from 'react'
import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import { patchShaders } from 'gl-noise'

const Particles = ({ amount=300, size=0.01, opacity=0.5 }) => {
  const positions = useMemo(() => 
    new Float32Array(Array.from({ length: amount*3 }, () => Math.random())), 
  [amount])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' args={[positions, 3]} />
      </bufferGeometry>
      <CustomShaderMaterial
        baseMaterial={THREE.PointsMaterial}
        size={size}
        opacity={opacity}
        transparent
        uniforms={{ u_time: { value: 0 }}}
        vertexShader={patchShaders(`
          uniform float u_time;
          void main() {
            vec3 n = gln_curl(position + u_time * 0.005);
            // n.x = 0.;
            csm_Position = n * 2.;
          }
        `) as any}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default Particles
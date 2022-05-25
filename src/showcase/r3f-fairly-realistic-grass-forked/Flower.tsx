import * as THREE from 'three'
import { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { LayerMaterial, Texture } from 'lamina'

import flower from './models/flower.glb'
import Albedo_2K__vkbgaihha from './models/Sea_Thrift_vkbgaihha/Albedo_2K__vkbgaihha.jpg'
import AO_2K__vkbgaihha from './models/Sea_Thrift_vkbgaihha/AO_2K__vkbgaihha.jpg'

export const Flower = forwardRef((props, ref: any) => {
  const { nodes }: any = useGLTF(flower)
  const map = useTexture(Albedo_2K__vkbgaihha)
  const ao = useTexture(AO_2K__vkbgaihha)

  return (
    <group>
      <instancedMesh ref={ref} args={[undefined, undefined, 1000]} castShadow receiveShadow geometry={nodes._ndyj_Var10_LOD0.geometry} {...props}>
        <LayerMaterial lighting="standard" side={THREE.DoubleSide}>
          <Texture map={map} />
          <Texture map={ao} mode="multiply" />
        </LayerMaterial>
      </instancedMesh>
    </group>
  )
})

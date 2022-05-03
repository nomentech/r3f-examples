/* This file was initially auto-generated by https://github.com/pmndrs/gltfjsx and then adapted manually */

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import model from '../../models/shoe.gltf'

const Shoe = ({ color, ...props}: any) => {
  const { nodes, materials } = useGLTF(model) as any
  // The following is a read-out of the models contents, all of its
  // meshes, groups and so on.

  return (
    <group {...props} dispose={null}>
      {/* We can alter materials by piercing into them: materia-property={...} */}
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} material-envMapIntensity={0.8} />
      {/* Or, we define new materials, which now allows full re-use */}
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color={color}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-envMapIntensity={0.8} />
    </group>
  )
}
useGLTF.preload(model)

export default Shoe
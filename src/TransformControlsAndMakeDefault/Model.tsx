import { useGLTF } from "@react-three/drei"

export default ({ name, ...props }: JSX.IntrinsicElements['mesh']) => {
  const { nodes, materials } = useGLTF("/models/compressed.glb") as any

  return (
    <mesh
      name={name}
      geometry={nodes[name!].geometry}
      material={materials[`M_${name}`]}
      {...props}
      dispose={null}
    />
  )
}

useGLTF.preload("/models/compressed.glb");
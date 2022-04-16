import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => mesh.current.rotation.x += 0.01)
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1.0}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? "hotpink" : "orange"} />
    </mesh>
  )
}
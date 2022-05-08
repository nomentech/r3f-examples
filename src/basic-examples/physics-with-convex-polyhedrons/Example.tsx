import { Suspense, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Physics, useConvexPolyhedron, usePlane } from '@react-three/cannon'
import { Geometry } from 'three-stdlib'

import model from '../../models/diamond.glb'

/**
 * Returns legacy geometry vertices, faces for ConvP
 * @param {THREE.BufferGeometry} bufferGeometry
 */
const toConvexProps = (bufferGeometry: THREE.BufferGeometry) => {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry)
  
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices()

  return [
    geo.vertices.map((v) => [v.x, v.y, v.z]),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    []
  ]
}

const Diamond = (props: any) => {
  const { nodes }: any = useGLTF(model)
  const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes])
  const [ref]: any[] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }))

  return (
    <mesh castShadow receiveShadow ref={ref} geometry={nodes.Cylinder.geometry} {...props}>
      <meshStandardMaterial wireframe color='white' />
    </mesh>
  )
}

// A cone is a convex shape by definition...
const Cone = ({ sides, ...props }: any) => {
  const geo = useMemo(
    () => toConvexProps(new THREE.ConeGeometry(0.7, 0.7, sides, 1)),
    []
  )
  const [ref]: any[] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }))

  return (
    <mesh castShadow ref={ref} {...props}>
      <coneGeometry args={[0.7, 0.7, sides, 1]} />
      <meshNormalMaterial />
    </mesh>
  )
}

// ...And so is cube!
const Cube = ({ size, ...props }: any) => {
  // note, this is wildly inefficient vs useBox
  const geo = useMemo(
    () => toConvexProps(new THREE.BoxGeometry(size, size, size)),
    []
  )
  const [ref]: any[] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }))

  return (
    <mesh castShadow receiveShadow ref={ref} {...props} geometry={geo} >
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial color='rebeccapurple' />
    </mesh>
  )
}

const Plane = (props: any) => {
  const [ref]: any[] = usePlane(() => ({ type: 'Static', ...props }))
  
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial color='#171717' />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas shadows dpr={[1, 2]} camera={{ position: [-1, 1, 5], fov: 50}} >
        <color attach='background' args={['lightpink']} />
        <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={2}
          castShadow shadow-mapSize={[2048, 2048]} />
        <Suspense fallback={null}>
          <Physics>
            <Plane rotation={[-Math.PI / 2, 0, 0]} />
            <Diamond position={[1, 5, 0]} rotation={[0.4, 0.1, 0.1]} />
            <Cone position={[-1, 5, 0.5]} rotation={[0.1, 0.2, 0.1]} sides={6} />
            <Cone position={[-1, 6, 0]} rotation={[0.5, 0.1, 0.1]} sides={8} />
            <Cube position={[2, 3, -0.3]} rotation={[0.5, 0.4, -1]} size={0.4} />
            <Cone position={[-0.3, 7, 1]} rotation={[1, 0.4, 0.1]} sides={7} />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}

export default Example
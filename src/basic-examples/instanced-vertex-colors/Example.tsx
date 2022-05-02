import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import niceColors from 'nice-color-palettes'
import Effects from './Effects'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const data = Array.from({ length: 1000 }, () => ({
  color: niceColors[17][Math.floor(Math.random() * 5)], 
  scale: 1
}))

const Boxes = () => {
  const [hovered, set] = useState<any>()
  const colorArray = useMemo(() => 
    Float32Array.from(
      new Array(1000).fill(null).flatMap((_, i) => 
        tempColor.set(data[i].color).toArray()))
  , [])

  const meshRef: any = useRef()
  const prevRef: any = useRef()
  useEffect(() => void (prevRef.current = hovered), [hovered])
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time / 4)
    meshRef.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          if (hovered !== prevRef.Current) {
            tempColor.set(id === hovered ? 'white' : data[id].color).toArray(colorArray, id * 3)
            meshRef.current.geometry.attributes.color.needsUpdate = true
          }
          const scale = (data[id].scale = THREE.MathUtils.lerp(data[id].scale, id === hovered ? 3 : 1, 0.1))
          tempObject.scale.setScalar(scale)
          tempObject.updateMatrix()
          meshRef.current.setMatrixAt(id, tempObject.matrix)
        }
    meshRef.current.instanceMatrix.needsUpdate = true
  })
  
  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 1000]} 
      onPointerMove={e => set(e.instanceId)} onPointerOut={e => set(undefined)}>
      <boxGeometry args={[0.6, 0.6, 0.6]}>
        <instancedBufferAttribute attach='attributes-color' args={[colorArray, 3]} />
      </boxGeometry>
      <meshPhongMaterial vertexColors={true} />
    </instancedMesh>
  )
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas
        linear
        gl={{ antialias: false, alpha: false }}
        camera={{ position: [0, 0, 15], near: 5, far: 20}}
        onCreated={({ gl }) => gl.setClearColor('#f0f0f0')}>
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <Boxes />
        {/* <Effects /> */}
      </Canvas>
    </>
  )
}

export default Example
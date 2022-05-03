import { useMemo, useRef, useState } from 'react'
import { Matrix4, Scene } from 'three'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, useCamera } from '@react-three/drei'

const Viewcube =() => {
  const { gl, scene, camera, size } = useThree()
  const virtualScene = useMemo(() => new Scene(), [])
  const virtualCam: any = useRef()
  const ref: any = useRef()
  const [hover, set] = useState<number | null>(null)
  const matrix = new Matrix4()

  useFrame(() => {
    matrix.copy(camera.matrix).invert()
    ref.current.quaternion.setFromRotationMatrix(matrix)
    gl.autoClear = true
    gl.render(scene, camera)
    gl.autoClear = false
    gl.clearDepth()
    gl.render(virtualScene, virtualCam.current)
  }, 1)
  return createPortal(
    <>
      <OrthographicCamera ref={virtualCam} makeDefault={false} position={[0, 0, 100]} />
      <mesh
        ref={ref}
        raycast={useCamera(virtualCam)}
        position={[size.width/2 - 80, size.height/2 - 80, 0]}
        onPointerOut={e => set(null)}
        onPointerMove={(e: any) => set(Math.floor(e.faceIndex / 2))}>
        {[...Array(6)].map((_, index) => (
          <meshLambertMaterial attach={`material-${index}`} key={index} color={hover === index ? 'hotpink' : 'white'} />  
        ))}
        <boxGeometry args={[60, 60, 60]} />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </>,
    virtualScene
  ) as any
}

const Example = ({ children }: any) => {
  return (
    <>
      { children }
      <Canvas>
        <mesh>
          <torusGeometry args={[1, 0.5, 32, 100]} />
          <meshNormalMaterial />
        </mesh>
        <OrbitControls />
        <Viewcube />
      </Canvas>
    </>
  )
}

export default Example
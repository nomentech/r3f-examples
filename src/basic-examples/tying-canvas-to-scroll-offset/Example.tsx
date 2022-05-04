import { useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const Box = ({ text, color, ...props }: any) => {
  const [hovered, set] = useState(false)

  return (
    <mesh {...props} onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
      <Html position={[0, 0, 1]} className='pointer-events-none' center>
        {text}
      </Html>
    </mesh>
  )
}

const ScrollContainer = ({ scroll, children }: any) => {
  const { viewport } = useThree()
  const group: any = useRef()
  useFrame((_, delta) => {
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, viewport.height * scroll.current, 4, delta)
    // Or: group.current.position.lerp(vec.set(0, viewport.height * scroll.current, 0), 0.1)
  })
  return (
    <group ref={group}>{ children }</group>
  )
}

const Scene = () => {
  const viewport = useThree(state => state.viewport)

  return (
    <>
      <Box text={<span>This is HTML</span>} color='aquamarine' />
      <Box text={<h1>H1 caption</h1>} color='lightblue' position={[0, -viewport.height, 0]} />
    </>
  )
}

const Example = ({ children }: any) => {
  const scrollRef: any = useRef()
  const scroll: any = useRef(0)

  return (
    <>
      { children }
      <Canvas 
        onCreated={(state: any) => state.events.connect(scrollRef.current)}
        raycaster={{ 
          computeOffsets: 
          ({ clientX, clientY }: any) => ({ offsetX: clientX, offsetY: clientY}) } as any} >
        <ambientLight />
        <pointLight position={[10, 0, 10]} />
        <ScrollContainer scroll={scroll}>
          <Scene />
        </ScrollContainer>
      </Canvas>
      <div
        ref={scrollRef}
        onScroll={(e: any) => 
          (scroll.current = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))}
        className='absolute w-[100vw] h-[100vh] overflow-y-auto top-0 left-0'>
        <div className='h-[200vh] pointer-events-none'></div>
      </div>
    </>
  )
}

export default Example
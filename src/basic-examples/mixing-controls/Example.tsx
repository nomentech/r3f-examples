import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, TransformControls, useCursor } from '@react-three/drei'
import { useControls } from 'leva'
import create from 'zustand'

const useStore = create((set: any) => ({
  target: null,
  setTarget: (target: any) => set({ target })
}))

const Box = (props: any) => {
  const setTarget = useStore(state => state.setTarget)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  return (
    <mesh {...props} 
      onClick={e => setTarget(e.object)} 
      onPointerOver={ () => setHovered(true) }
      onPointerOut={ () => setHovered(false) }>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

const Example = ({ children }: any) => {
  const { target, setTarget } = useStore()
  const { mode } = useControls({
    mode: {
      value: 'translate',
      options: [
        'translate',
        'rotate',
        'scale'
      ]
    }
  })

  return (
    <>
      { children }
      <Canvas dpr={[1, 2]} onPointerMissed={ () => setTarget(null)}>
        <Box position={[2, 2, 0]} />
        <Box />
        { target && <TransformControls object={target} mode={mode} /> }
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Example
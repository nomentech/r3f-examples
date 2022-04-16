import { OrbitControls, TransformControls } from "@react-three/drei"

export default () => {
  return (
    <>
      {/* <TransformControls object={} mode="translate" /> */}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </>
  )
}
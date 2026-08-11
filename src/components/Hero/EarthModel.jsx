import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import './EarthModel.css'

function Earth() {
  const earthRef = useRef()
  const { scene } = useGLTF('/earth.glb')

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015
    }
  })

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={1}
    />
  )
}

function EarthModel() {
  return (
    <div className="earth-canvas">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 3, 5]} intensity={2} />

        <Earth />
           <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  )
}

export default EarthModel
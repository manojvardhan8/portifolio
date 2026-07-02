import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Particles
    const count = 1800
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
    })

    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    // Mouse parallax
    let mx = 0, my = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.4
      my = -(e.clientY / window.innerHeight - 0.5) * 0.4
    }
    window.addEventListener('mousemove', onMouse)

    // Animation
    let id: number
    let elapsed = 0
    const clock = new THREE.Clock()

    const animate = () => {
      id = requestAnimationFrame(animate)
      elapsed = clock.getElapsedTime()
      particles.rotation.y = elapsed * 0.025 + mx * 0.15
      particles.rotation.x = elapsed * 0.015 + my * 0.15
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

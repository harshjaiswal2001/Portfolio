'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, ContactShadows } from '@react-three/drei'
import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'

function AnimatedAvatar({ triggerAnimation }) {
    const group = useRef()
    const { scene, animations } = useGLTF('/avatar_animated.glb')
    const mixer = useRef(null)
    const action = useRef(null)

    // Setup animation once
    useEffect(() => {
        if (scene && animations.length) {
            mixer.current = new THREE.AnimationMixer(scene)
            const anim = mixer.current.clipAction(animations[0])
            anim.clampWhenFinished = true
            anim.loop = THREE.LoopOnce
            action.current = anim
            anim.play()
        }
    }, [scene, animations])

    // Trigger animation when needed
    useEffect(() => {
        if (triggerAnimation && action.current) {
            action.current.reset().play()
        }
    }, [triggerAnimation])

    useFrame((_, delta) => {
        mixer.current?.update(delta)
    })

    return (
        <group
            ref={group}
            scale={1.5}
            position={[0, -1.5, 0]}
            rotation={[-0.1, 0, 0]} // tilt upward toward laptop user
        >
            <primitive object={scene} />
        </group>
    )
}

export default function AvatarCanvas() {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const containerRef = useRef(null)
    const [hasEntered, setHasEntered] = useState(false)

    // Scroll into view = play animation once
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasEntered) {
                    setHasEntered(true)
                    setShouldAnimate(true)
                }
            },
            { threshold: 0.6 }
        )

        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [hasEntered])

    // Hover handler
    const handleHover = useCallback(() => {
        setShouldAnimate(true)
        setTimeout(() => setShouldAnimate(false), 100) // allow retrigger
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                height: '600px',
                maxWidth: '450px',
                margin: '0 auto',
                cursor: 'pointer',
            }}
            onMouseEnter={handleHover}
        >
            <Canvas
                camera={{ position: [0, 2.2, 5.5], fov: 30 }}
                style={{ background: 'transparent' }}
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={1.2} />
                <directionalLight position={[3, 4, 2]} intensity={1.5} castShadow />
                <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={0.5} />

                <ContactShadows
                    position={[0, -1.6, 0]}
                    opacity={0.4}
                    scale={6}
                    blur={1.5}
                    far={2}
                />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2.2}
                    minPolarAngle={Math.PI / 2.5}
                />

                <AnimatedAvatar triggerAnimation={shouldAnimate} />
            </Canvas>
        </div>
    )
}

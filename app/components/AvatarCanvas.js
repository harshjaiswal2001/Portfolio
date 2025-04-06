'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, ContactShadows } from '@react-three/drei'
import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { useIsMobile } from '@/app/hooks/useIsMobile'

function AnimatedAvatar({ play }) {
    const group = useRef()
    const { scene, animations } = useGLTF('/avatar_animated.glb')
    const mixer = useRef(null)
    const action = useRef(null)

    useEffect(() => {
        if (scene && animations.length) {
            mixer.current = new THREE.AnimationMixer(scene)
            const anim = mixer.current.clipAction(animations[0])
            anim.clampWhenFinished = true
            anim.loop = THREE.LoopOnce
            action.current = anim
        }
    }, [scene, animations])

    useEffect(() => {
        if (play && action.current) {
            action.current.reset().play()
        }
    }, [play])

    useFrame((_, delta) => {
        mixer.current?.update(delta)
    })

    return (
        <group
            ref={group}
            scale={1.5}
            position={[0, -1.5, 0]}
            rotation={[-0.1, 0, 0]}
        >
            <primitive object={scene} />
        </group>
    )
}

export default function AvatarCanvas() {
    const [playAnimation, setPlayAnimation] = useState(false)
    const containerRef = useRef(null)
    const isMobile = useIsMobile()

    // Responsive adjustments
    const scale = isMobile ? 1 : 1.5
    const position = isMobile ? [0, -1.2, 0] : [0, -1.5, 0]

    // Animate when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    triggerAnimation()
                }
            },
            { threshold: 0.6 }
        )

        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [])

    const triggerAnimation = useCallback(() => {
        setPlayAnimation(true)
        setTimeout(() => setPlayAnimation(false), 100) // allow reset
    }, [])

    const handleInteraction = () => {
        triggerAnimation()
    }

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleInteraction}
            onClick={handleInteraction} // mobile support
            className="w-full mx-auto"
            style={{
                height: isMobile ? '350px' : '600px',
                maxWidth: isMobile ? '100%' : '450px',
                cursor: 'pointer',
            }}
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
                <ContactShadows position={[0, -1.6, 0]} opacity={0.4} scale={6} blur={1.5} far={2} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2.2}
                    minPolarAngle={Math.PI / 2.5}
                />
                <AnimatedAvatar play={playAnimation} />
            </Canvas>
        </div>
    )
}

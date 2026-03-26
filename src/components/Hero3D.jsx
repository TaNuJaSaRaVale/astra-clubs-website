import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Data Prism Component
function DataPrism() {
  const meshRef = useRef(null);
  
  // Rotate continuously and react to scroll
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Constant slow rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
    
    // Scroll-linked rotation (responsive to window scroll)
    const scrollY = window.scrollY;
    meshRef.current.rotation.y = (scrollY * 0.001) + (state.clock.elapsedTime * 0.15);
    meshRef.current.rotation.z = (scrollY * 0.0005);
    
    // Scroll-linked "break apart" or expand effect by scaling
    const targetScale = 1 + Math.min(scrollY * 0.001, 1.5);
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* Outer Wireframe Core */}
      <Icosahedron ref={meshRef} args={[2.5, 1]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#818cf8" wireframe={true} transparent opacity={0.3} />
      </Icosahedron>
      
      {/* Inner Distorted Core */}
      <Icosahedron args={[1.5, 4]}>
        <MeshDistortMaterial 
          color="#4f46e5" 
          attach="material" 
          distort={0.4} 
          speed={2} 
          roughness={0.2} 
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Icosahedron>
    </Float>
  );
}

// Background Particles
function ParticleField() {
  const starsRef = useRef(null);
  
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y -= delta * 0.02;
      starsRef.current.rotation.x -= delta * 0.01;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={50} depth={20} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Optimize for high DPI displays but cap at 2
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <DataPrism />
        <ParticleField />
      </Canvas>
    </div>
  );
}

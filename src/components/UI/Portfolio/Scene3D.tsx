'use client';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 3D Card Component with enhanced effects
function Card3D({ project, index, mousePosition }: { project: any; index: number; mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && typeof window !== 'undefined') {
      const time = state.clock.getElapsedTime();
      const width = window.innerWidth || 1920;
      const height = window.innerHeight || 1080;
      const normalizedX = width > 0 ? (mousePosition.x / width) * 2 - 1 : 0;
      const normalizedY = height > 0 ? (mousePosition.y / height) * 2 - 1 : 0;

      // Smooth rotation following mouse with subtle animation
      meshRef.current.rotation.y = normalizedX * 0.25 + Math.sin(time * 0.5 + index) * 0.15;
      meshRef.current.rotation.x = -normalizedY * 0.25 + Math.cos(time * 0.3 + index) * 0.15;
      
      // Hover effects
      if (hovered) {
        meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, 1.5, 0.1);
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1.15, 0.1));
      } else {
        meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, 0, 0.1);
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1));
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[3.5, 4.5, 0.2]} />
      <meshStandardMaterial
        color={hovered ? '#1a1a1a' : '#0a0a0a'}
        metalness={0.7}
        roughness={0.3}
        emissive={hovered ? '#ff5757' : '#000000'}
        emissiveIntensity={hovered ? 0.4 : 0}
        envMapIntensity={1}
      />
    </mesh>
  );
}

export default function Scene3D({ mousePosition, projects }: { mousePosition: { x: number; y: number }; projects: any[] }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff5757" />
      <Environment preset="night" />
      {projects.slice(0, 3).map((project, i) => (
        <group key={project.id} position={[(i - 1) * 4.5, 0, 0]}>
          <Card3D project={project} index={i} mousePosition={mousePosition} />
        </group>
      ))}
    </>
  );
}


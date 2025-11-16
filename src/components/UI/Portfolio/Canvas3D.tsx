'use client';
import { useEffect, useState } from 'react';

export default function Canvas3D({ mousePosition, projects }: { mousePosition: { x: number; y: number }; projects: any[] }) {
  const [isReady, setIsReady] = useState(false);
  const [Canvas, setCanvas] = useState<any>(null);
  const [Scene3D, setScene3D] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Lazy load React Three Fiber only on client side
    if (typeof window !== 'undefined') {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (gl) {
          // Dynamically import React Three Fiber
          import('@react-three/fiber')
            .then((mod) => {
              setCanvas(() => mod.Canvas);
              return import('./Scene3D');
            })
            .then((mod) => {
              setScene3D(() => mod.default);
              setIsReady(true);
            })
            .catch((err) => {
              console.error('Failed to load 3D components:', err);
              setError('3D rendering unavailable');
            });
        } else {
          setError('WebGL not supported');
        }
      } catch (e) {
        console.warn('WebGL check failed:', e);
        setError('WebGL not available');
      }
    }
  }, []);

  if (error || !isReady || !Canvas || !Scene3D) {
    return (
      <div style={{ 
        width: '100%', 
        height: '500px', 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        {error || 'Loading 3D scene...'}
      </div>
    );
  }

  return (
    <Canvas>
      <Scene3D mousePosition={mousePosition} projects={projects} />
    </Canvas>
  );
}


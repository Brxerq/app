import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 grid = fract(vUv * 30.0);
    float line = step(0.95, grid.x) + step(0.95, grid.y);
    
    float dist = distance(vUv, uMouse);
    float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.5 + 0.5;
    ripple *= smoothstep(0.5, 0.0, dist);
    
    float alpha = line * 0.3 + ripple * 0.2;
    
    vec3 color = mix(uColor1, uColor2, vUv.y + sin(uTime * 0.5) * 0.2);
    
    gl_FragColor = vec4(color, alpha * 0.5);
  }
`;

function GridFloor() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uColor1: { value: new THREE.Color('#a855f7') },
    uColor2: { value: new THREE.Color('#06b6d4') },
  });

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  useEffect(() => {
    const canTrackMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canTrackMouse) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uMouse.value.x = e.clientX / window.innerWidth;
        materialRef.current.uniforms.uMouse.value.y = 1 - e.clientY / window.innerHeight;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms.current}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 60;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = Math.random() > 0.5 ? new THREE.Color('#a855f7') : new THREE.Color('#06b6d4');
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 60 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.7 }}
      >
        <ambientLight intensity={0.5} />
        <GridFloor />
        <FloatingParticles />
      </Canvas>
      
      {/* CSS Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
    </div>
  );
}

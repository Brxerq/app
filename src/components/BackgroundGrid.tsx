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

function OrbitDotsTrails() {
  const groupRef = useRef<THREE.Group>(null);
  const purpleOrbitRef = useRef<THREE.Group>(null);
  const dotARef = useRef<THREE.Mesh>(null);
  const dotBRef = useRef<THREE.Mesh>(null);
  const dotCRef = useRef<THREE.Mesh>(null);
  const dotDRef = useRef<THREE.Mesh>(null);

  const trailA = useMemo(() => {
    const points: number[] = [];
    const segments = 220;
    for (let i = 0; i <= segments; i += 1) {
      const t = (i / segments) * Math.PI * 2;
      points.push(Math.cos(t) * 1.9, 0, Math.sin(t) * 1.05);
    }
    return new Float32Array(points);
  }, []);

  const trailB = useMemo(() => {
    const points: number[] = [];
    const segments = 220;
    for (let i = 0; i <= segments; i += 1) {
      const t = (i / segments) * Math.PI * 2;
      points.push(Math.cos(t) * 2.35, 0, Math.sin(t) * 0.78);
    }
    return new Float32Array(points);
  }, []);

  const trailLineA = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(trailA, 3));
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color('#22d3ee'),
      transparent: true,
      opacity: 0.58,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.LineLoop(geometry, material);
  }, [trailA]);

  const trailLineB = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(trailB, 3));
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color('#a855f7'),
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.LineLoop(geometry, material);
  }, [trailB]);

  useEffect(() => {
    return () => {
      trailLineA.geometry.dispose();
      (trailLineA.material as THREE.Material).dispose();
      trailLineB.geometry.dispose();
      (trailLineB.material as THREE.Material).dispose();
    };
  }, [trailLineA, trailLineB]);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.07;
    groupRef.current.rotation.x = 0.48 + Math.sin(t * 0.22) * 0.02;

    if (dotARef.current) {
      dotARef.current.position.set(Math.cos(t * 0.42) * 1.9, 0, Math.sin(t * 0.42) * 1.05);
    }
    if (dotBRef.current) {
      dotBRef.current.position.set(Math.cos(t * 0.42 + Math.PI) * 1.9, 0, Math.sin(t * 0.42 + Math.PI) * 1.05);
    }
    if (dotCRef.current) {
      dotCRef.current.position.set(Math.cos(-t * 0.32 + 0.75) * 2.35, 0, Math.sin(-t * 0.32 + 0.75) * 0.78);
    }
    if (dotDRef.current) {
      dotDRef.current.position.set(Math.cos(-t * 0.32 + Math.PI + 0.75) * 2.35, 0, Math.sin(-t * 0.32 + Math.PI + 0.75) * 0.78);
    }
  });

  return (
    <group ref={groupRef} position={[0, 1.25, -0.8]} rotation={[0.48, 0, 0.15]}>
      <primitive object={trailLineA} />
      <group ref={purpleOrbitRef} rotation={[0, 0.35, 0]}>
        <primitive object={trailLineB} />
        <mesh ref={dotCRef}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#a855f7" toneMapped={false} />
        </mesh>
        <mesh ref={dotDRef}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshBasicMaterial color="#d8b4fe" toneMapped={false} />
        </mesh>
      </group>

      <mesh ref={dotARef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#22d3ee" toneMapped={false} />
      </mesh>
      <mesh ref={dotBRef}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color="#67e8f9" toneMapped={false} />
      </mesh>
    </group>
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
        <pointLight position={[2, 4, 3]} intensity={0.7} color="#67e8f9" />
        <GridFloor />
        <FloatingParticles />
        <OrbitDotsTrails />
      </Canvas>
      
      {/* CSS Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
    </div>
  );
}

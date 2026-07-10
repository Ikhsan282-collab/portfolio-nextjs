"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree(); // posisi mouse, range -1 sampai 1

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // rotasi otomatis pelan (biar tetap hidup walau mouse diam)
    meshRef.current.rotation.z += delta * 0.05;

    // target rotasi berdasarkan posisi mouse
    const targetX = pointer.y * 0.6;   // mouse naik/turun -> shape tilt atas/bawah
    const targetY = pointer.x * 0.8;   // mouse kanan/kiri -> shape tilt kanan/kiri

    // lerp biar gerakannya halus, bukan langsung snap
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY,
      0.05
    );
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshStandardMaterial color="#111111" wireframe emissive="#333333" />
    </mesh>
  );
}

export function AboutScene() {
  return (
    <div className="relative aspect-[4/5] border border-hairline">
      <Canvas camera={{ position: [0, 0, 4.5] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
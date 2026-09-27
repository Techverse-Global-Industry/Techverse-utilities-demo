"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export function DataFlow({ phase = 0, z = -1 }: { phase?: number; z?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * .22 + phase) % 1;
    ref.current.position.x = -5.5 + t * 11;
    ref.current.position.z = z + Math.sin(t * Math.PI * 2) * .45;
    ref.current.position.y = .28 + Math.sin(t * Math.PI) * .2;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[.075, 12, 12]} />
      <meshBasicMaterial color="#FFD1A8" />
    </mesh>
  );
}

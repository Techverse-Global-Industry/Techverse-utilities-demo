"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";

export function UtilityParticles({ compact = false }: { compact?: boolean }) {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const count = compact ? 90 : 180;
    const result = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      result[i * 3] = Math.sin(i * 12.9898) * 6.5;
      result[i * 3 + 1] = .4 + ((i * 37) % 100) / 100 * 4;
      result[i * 3 + 2] = Math.cos(i * 9.117) * 4.8;
    }
    return result;
  }, [compact]);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * .018;
  });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={.035} color="#FFB57C" transparent opacity={.6} sizeAttenuation />
    </points>
  );
}

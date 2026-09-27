"use client";
import { Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function SmartMeter({ position = [4.2, 1.6, 1.6] as [number, number, number] }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = -.35 + Math.sin(state.clock.elapsedTime * .35) * .18;
  });
  return (
    <Float speed={1.2} rotationIntensity={.08} floatIntensity={.5}>
      <group ref={group} position={position}>
        <RoundedBox args={[1.15, 1.55, .38]} radius={.14} smoothness={4} castShadow>
          <meshStandardMaterial color="#f4e7df" roughness={.5} metalness={.08} />
        </RoundedBox>
        <mesh position={[0,.25,.205]}><planeGeometry args={[.72,.48]} /><meshStandardMaterial color="#32201F" emissive="#FF7700" emissiveIntensity={.22} /></mesh>
        <mesh position={[0,-.34,.22]}><circleGeometry args={[.09,20]} /><meshStandardMaterial color="#FF7700" emissive="#FF7700" emissiveIntensity={1.8} /></mesh>
        <mesh position={[0,-.68,0]}><cylinderGeometry args={[.16,.16,.35,16]} /><meshStandardMaterial color="#A05937" /></mesh>
      </group>
    </Float>
  );
}

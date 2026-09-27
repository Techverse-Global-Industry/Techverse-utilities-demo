"use client";
import { RoundedBox } from "@react-three/drei";

const buildings = [
  [-5, .6, -2, 1, 1.2, 1], [-3.7, .9, -2.4, .8, 1.8, .8], [-2.4, .5, -2, 1.1, 1, 1],
  [-.8, .8, -2.7, 1, 1.6, 1], [1, .55, -2.2, 1.3, 1.1, 1.2], [2.8, 1.1, -2.5, .9, 2.2, .9],
  [4.5, .7, -1.9, 1.2, 1.4, 1], [-4.6, .45, .3, 1.2, .9, 1.1], [-2.9, .75, .7, 1, 1.5, 1],
  [-1.2, .5, .5, 1.1, 1, 1], [1.5, .9, .6, 1.2, 1.8, 1.1], [3.4, .55, .2, 1.2, 1.1, 1],
] as const;

const streetLights = [[-4, -4], [-1.6, -4], [1, -4], [3.8, -4]] as const;

export function UtilityCity({ compact = false }: { compact?: boolean }) {
  const list = compact ? buildings.slice(0, 7) : buildings;
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[0, -.03, 0]} receiveShadow>
        <planeGeometry args={[18, 12]} />
        <meshStandardMaterial color="#3b2725" roughness={.95} />
      </mesh>
      {list.map(([x, y, z, w, h, d], index) => (
        <RoundedBox key={index} args={[w, h, d]} radius={.08} smoothness={2} position={[x, y, z]} castShadow receiveShadow>
          <meshStandardMaterial color={index % 3 === 0 ? "#7d5548" : "#533734"} roughness={.7} metalness={.08} />
        </RoundedBox>
      ))}
      {streetLights.map(([x, z], index) => (
        <group key={index} position={[x, 0, z]}>
          <mesh position={[0, .6, 0]}><cylinderGeometry args={[.045, .06, 1.2, 8]} /><meshStandardMaterial color="#A05937" /></mesh>
          <mesh position={[0, 1.25, 0]}><sphereGeometry args={[.13, 12, 12]} /><meshStandardMaterial emissive="#FFB57C" emissiveIntensity={2} color="#FF963E" /></mesh>
        </group>
      ))}
    </group>
  );
}

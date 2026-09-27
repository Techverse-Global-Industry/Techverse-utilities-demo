"use client";
const towerPositions = [[-5.2, -4.2], [5.1, -3.5]] as const;

export function UtilityTowers() {
  return (
    <group>
      {towerPositions.map(([x, z], index) => (
        <group key={index} position={[x, 0, z]}>
          <mesh position={[0, 1.4, 0]}><cylinderGeometry args={[.07, .16, 2.8, 8]} /><meshStandardMaterial color="#A05937" metalness={.5} roughness={.45} /></mesh>
          {[.7, 1.2, 1.7, 2.2].map((y) => <mesh key={y} position={[0, y, 0]}><boxGeometry args={[1.1, .05, .05]} /><meshStandardMaterial color="#FF963E" metalness={.35} /></mesh>)}
          <mesh position={[0, 2.85, 0]}><sphereGeometry args={[.12, 12, 12]} /><meshStandardMaterial color="#FF7700" emissive="#FF7700" emissiveIntensity={2} /></mesh>
        </group>
      ))}
    </group>
  );
}

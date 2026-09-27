"use client";
import { Float } from "@react-three/drei";

const nodes = [[-5.1,.25,-4],[-3.2,.25,-2.2],[-.7,.25,.1],[1.5,.25,.6],[3.4,.25,.2],[5.2,.25,-3.4]] as const;

export function InfrastructureNodes() {
  return (
    <group>
      {nodes.map((position, index) => (
        <Float key={index} speed={1 + index * .08} rotationIntensity={.15} floatIntensity={.25}>
          <mesh position={position}>
            <sphereGeometry args={[.13, 16, 16]} />
            <meshStandardMaterial color="#FF963E" emissive="#FF7700" emissiveIntensity={2.6} roughness={.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

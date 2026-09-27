"use client";
import { Line } from "@react-three/drei";

const primary: [number, number, number][] = [[-6,0,-4],[-3.2,0,-2.2],[-.7,0,.1],[2.3,0,-1.8],[5.5,0,-3.4]];
const branchA: [number, number, number][] = [[-3.2,0,-2.2],[-2.7,0,.5],[1.4,0,.5],[3.4,0,.2]];
const branchB: [number, number, number][] = [[-.7,0,.1],[.8,0,-3.8],[4.2,0,-1.8]];

export function PowerNetwork() {
  return (
    <group position={[0, .08, 0]}>
      <Line points={primary} color="#FF7700" lineWidth={2.2} transparent opacity={.85} />
      <Line points={branchA} color="#FFB57C" lineWidth={1.2} transparent opacity={.65} />
      <Line points={branchB} color="#FF963E" lineWidth={1.2} transparent opacity={.55} />
    </group>
  );
}

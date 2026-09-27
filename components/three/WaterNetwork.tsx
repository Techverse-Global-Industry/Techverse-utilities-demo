"use client";
import { Line } from "@react-three/drei";

const waterLine: [number, number, number][] = [[-5.5,.04,1.8],[-3.2,.04,.7],[-1,.04,1.1],[1.5,.04,.6],[4.8,.04,1.7]];

export function WaterNetwork() {
  return <Line points={waterLine} color="#FFB57C" lineWidth={1.6} transparent opacity={.45} />;
}

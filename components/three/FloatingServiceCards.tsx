"use client";
import { Float, Html } from "@react-three/drei";

export function FloatingServiceCards() {
  return (
    <group>
      <Float speed={1.1} floatIntensity={.6} rotationIntensity={.06}>
        <Html position={[-4.3,2.6,-1]} transform distanceFactor={7} style={{ pointerEvents: "none" }}>
          <div className="w-32 rounded-2xl border border-white/10 bg-[#32201f]/85 p-3 text-white shadow-2xl backdrop-blur-xl">
            <p className="text-[8px] uppercase tracking-[.18em] text-white/45">Demo network</p>
            <p className="mt-1 text-lg font-semibold text-[#FFB57C]">Stable</p>
          </div>
        </Html>
      </Float>
      <Float speed={1.25} floatIntensity={.45} rotationIntensity={.05}>
        <Html position={[3.3,3.1,-2]} transform distanceFactor={7} style={{ pointerEvents: "none" }}>
          <div className="w-32 rounded-2xl border border-white/10 bg-[#32201f]/85 p-3 text-white shadow-2xl backdrop-blur-xl">
            <p className="text-[8px] uppercase tracking-[.18em] text-white/45">Service node</p>
            <p className="mt-1 text-lg font-semibold text-[#FF963E]">Online</p>
          </div>
        </Html>
      </Float>
    </group>
  );
}

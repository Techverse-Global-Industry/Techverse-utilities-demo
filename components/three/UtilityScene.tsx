"use client";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { UtilityCity } from "./UtilityCity";
import { UtilityTowers } from "./UtilityTowers";
import { PowerNetwork } from "./PowerNetwork";
import { WaterNetwork } from "./WaterNetwork";
import { InfrastructureNodes } from "./InfrastructureNodes";
import { DataFlow } from "./DataFlow";
import { UtilityParticles } from "./UtilityParticles";
import { SmartMeter } from "./SmartMeter";
import { FloatingServiceCards } from "./FloatingServiceCards";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function UtilityScene({ controls = false }: { controls?: boolean }) {
  const compact = useMediaQuery("(max-width: 767px)");
  return (
    <Canvas shadows dpr={compact ? [1, 1.25] : [1, 1.75]} camera={{ position: [8, 6.5, 10], fov: 42 }} gl={{ antialias: !compact, alpha: true }}>
      <ambientLight intensity={.7} />
      <directionalLight position={[5,8,4]} intensity={2.2} color="#FFB57C" castShadow />
      <pointLight position={[-4,3,-2]} intensity={25} color="#FF7700" distance={12} />
      <UtilityCity compact={compact} />
      <UtilityTowers />
      <PowerNetwork />
      <WaterNetwork />
      <InfrastructureNodes />
      <DataFlow phase={0} z={-1.4} />
      <DataFlow phase={.34} z={.5} />
      {!compact ? <DataFlow phase={.68} z={-2.6} /> : null}
      <UtilityParticles compact={compact} />
      <SmartMeter />
      {!compact ? <FloatingServiceCards /> : null}
      <ContactShadows position={[0,.01,0]} opacity={.35} scale={14} blur={2.8} far={4} />
      <OrbitControls enabled={controls} enablePan={false} minDistance={8} maxDistance={14} autoRotate autoRotateSpeed={.2} />
    </Canvas>
  );
}

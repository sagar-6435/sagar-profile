"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroScene } from "./HeroScene";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HeroCanvas() {
  const mobile = useMediaQuery("(max-width: 768px)");
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(77,141,255,0.18), transparent 36%), radial-gradient(circle at 20% 70%, rgba(125,120,255,0.12), transparent 40%)",
        }}
      />
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      dpr={mobile ? [1, 1] : [1, 1.5]}
      gl={{ antialias: !mobile, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <HeroScene dense={!mobile} />
      </Suspense>
    </Canvas>
  );
}

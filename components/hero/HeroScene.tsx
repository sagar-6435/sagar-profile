"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

type Props = {
  dense: boolean;
};

export function HeroScene({ dense }: Props) {
  const group = useRef<THREE.Group>(null);
  const mouse = useMousePosition();
  const count = dense ? 220 : 90;
  const nodeCount = dense ? 22 : 12;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = 1.4 + Math.random() * 4.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  const { nodePositions, linePositions } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i += 1) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push(
        new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi) * 2.8,
          Math.sin(theta) * Math.sin(phi) * 1.8,
          Math.cos(phi) * 2.4,
        ),
      );
    }
    const segs: number[] = [];
    pts.forEach((a, i) => {
      pts.forEach((b, j) => {
        if (j <= i) return;
        if (a.distanceTo(b) < 2.35) {
          segs.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      });
    });
    return {
      nodePositions: pts,
      linePositions: new Float32Array(segs),
    };
  }, [nodeCount]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.y = t * 0.04;
    group.current.rotation.x = Math.sin(t * 0.12) * 0.08;
    const mx = mouse.current.nx;
    const my = mouse.current.ny;
    state.camera.position.x += (mx * 0.7 - state.camera.position.x) * 0.04;
    state.camera.position.y += (-my * 0.4 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <fog attach="fog" args={["#05070d", 6, 14]} />
      <color attach="background" args={["#05070d"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[2.4, 1.6, 3]} intensity={18} color="#4d8dff" distance={12} />
      <pointLight position={[-3, -1, 2]} intensity={10} color="#7d78ff" distance={10} />

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={dense ? 0.035 : 0.045}
          color="#9ec2ff"
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#4d8dff" transparent opacity={0.22} />
      </lineSegments>

      {nodePositions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#7d78ff" : "#6ea6ff"} />
        </mesh>
      ))}

      <mesh rotation={[0.6, 0.2, 0.1]}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color="#4d8dff" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[1.1, 0.4, 0.3]}>
        <octahedronGeometry args={[2.4, 0]} />
        <meshBasicMaterial color="#7d78ff" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

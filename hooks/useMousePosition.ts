"use client";

import { useEffect, useRef } from "react";

export function useMousePosition() {
  const position = useRef({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      position.current.x = event.clientX;
      position.current.y = event.clientY;
      position.current.nx = event.clientX / window.innerWidth - 0.5;
      position.current.ny = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return position;
}

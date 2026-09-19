"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "@/app/providers";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const touch = useIsTouchDevice();
  const reduced = usePrefersReducedMotion();
  const { cursorState } = useExperience();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const enabled = !touch && !reduced;

  useEffect(() => {
    if (!enabled) {
      document.body.removeAttribute("data-cursor");
      return;
    }
    document.body.setAttribute("data-cursor", "on");

    const onMove = (event: PointerEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    let frame = 0;
    const loop = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.18;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.body.removeAttribute("data-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  const scale = cursorState === "project" ? 2.4 : cursorState === "hover" ? 1.8 : 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden>
      <div
        ref={dot}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7e6ff] shadow-[0_0_12px_rgba(77,141,255,0.9)]"
      />
      <div
        ref={ring}
        className="absolute top-0 left-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(173,196,255,0.45)] transition-[width,height,opacity] duration-300"
        style={{
          width: `${40 * scale}px`,
          height: `${40 * scale}px`,
          opacity: cursorState === "default" ? 0.7 : 1,
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { useExperience } from "@/app/providers";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function LoadingScreen() {
  const reduced = usePrefersReducedMotion();
  const { setIntroComplete } = useExperience();
  const root = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setPercent(100);
      setIntroComplete(true);
      setGone(true);
      return;
    }

    const state = { value: 0 };
    const tween = gsap.to(state, {
      value: 100,
      duration: 1.45,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.round(state.value)),
      onComplete: () => {
        gsap.to(root.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          delay: 0.12,
          onComplete: () => {
            setIntroComplete(true);
            setGone(true);
          },
        });
      },
    });

    return () => {
      tween.kill();
    };
  }, [reduced, setIntroComplete]);

  if (gone) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#05070d] px-8 py-8 md:px-12"
      role="status"
      aria-live="polite"
      aria-label="Loading experience"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(173,196,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(173,196,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at center, black 20%, transparent 78%)",
        }}
      />
      <div className="relative flex items-start justify-between">
        <span className="mono text-[11px] tracking-[0.32em] text-[var(--muted)]">
          {portfolio.initials} / SYS.INIT
        </span>
        <span className="mono text-[11px] tracking-[0.28em] text-[var(--accent)]">
          {String(percent).padStart(3, "0")}%
        </span>
      </div>
      <div className="relative mx-auto text-center">
        <p className="display text-[18vw] leading-none text-white/8 md:text-[9rem]">
          {portfolio.initials}
        </p>
        <p className="mono mt-4 text-[11px] tracking-[0.42em] text-[var(--muted)]">
          CALIBRATING INTERFACE
        </p>
      </div>
      <div className="relative">
        <div className="h-px w-full bg-white/10">
          <div
            className="h-px bg-[var(--accent)] shadow-[0_0_12px_rgba(77,141,255,0.8)]"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

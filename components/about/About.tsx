"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { gsap, registerGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function About() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGsap();
    if (!root.current) return;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from("[data-about]", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 36,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="about" ref={root} className="relative py-28 md:py-36">
      <div className="section-shell grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p data-about className="mono text-[11px] tracking-[0.36em] text-[var(--muted)]">
            01 — ABOUT
          </p>
          <h2
            data-about
            className="display mt-6 max-w-xl text-4xl leading-[1.05] md:text-6xl"
          >
            {portfolio.aboutStatement}
          </h2>
          <ul className="mt-12 space-y-4">
            {portfolio.aboutFocus.map((item) => (
              <li
                key={item}
                data-about
                className="flex gap-4 text-sm text-[var(--muted)]"
              >
                <span className="mt-2 h-px w-8 shrink-0 bg-[var(--accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div data-about className="glass glow-border relative p-8 md:p-10">
          <p className="text-[15px] leading-8 text-[#c9d0e0]">{portfolio.about}</p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {portfolio.stats.map((stat) => (
              <div key={stat.id} className="border-t border-white/8 pt-4">
                <p className="display text-4xl text-white">{stat.value}</p>
                <p className="mono mt-2 text-[10px] tracking-[0.28em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

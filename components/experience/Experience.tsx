"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { gsap, registerGsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Experience() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const vertical = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    registerGsap();
    if (!root.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-exp]", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        opacity: 0,
        y: 32,
        x: vertical ? 0 : 40,
        stagger: 0.16,
        duration: 0.85,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, [reduced, vertical]);

  return (
    <section id="experience" ref={root} className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="mono text-[11px] tracking-[0.36em] text-[var(--muted)]">04 — TIMELINE</p>
        <h2 className="display mt-5 text-4xl md:text-6xl">Field work.</h2>
        <div
          className={
            vertical
              ? "relative mt-14 space-y-10 border-l border-white/10 pl-8"
              : "mt-16 grid grid-cols-3 gap-6"
          }
        >
          {portfolio.experience.map((item) => (
            <article key={item.id} data-exp className="relative glass p-6">
              {!vertical && (
                <div className="absolute -top-px left-0 h-px w-16 bg-[var(--accent)]" />
              )}
              {vertical && (
                <span className="absolute top-8 -left-[37px] h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_#4d8dff]" />
              )}
              <p className="mono text-[10px] tracking-[0.24em] text-[var(--accent)]">
                {item.duration}
              </p>
              <h3 className="display mt-3 text-2xl">{item.role}</h3>
              <p className="mt-1 text-sm text-white/80">{item.organization}</p>
              <p className="mono mt-1 text-[10px] text-[var(--muted)]">{item.location}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="mono text-[10px] tracking-[0.16em] text-[#9eb0d4]">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

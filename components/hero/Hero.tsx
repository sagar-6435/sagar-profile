"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useExperience } from "@/app/providers";
import { Magnetic } from "@/components/effects/Magnetic";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HeroCanvas = dynamic(() => import("./HeroCanvas").then((m) => m.HeroCanvas), {
  ssr: false,
});

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { introComplete } = useExperience();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const targets = root.current!.querySelectorAll("[data-hero]");
      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0, filter: "none" });
        return;
      }
      gsap.set(targets, { opacity: 0, y: 28, filter: "blur(8px)" });
      if (!introComplete) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to('[data-hero="scene"]', { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1 })
        .to('[data-hero="label"]', { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.45")
        .to('[data-hero="line"]', { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.12 }, "-=0.25")
        .to('[data-hero="copy"]', { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.35")
        .to('[data-hero="cta"]', { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, stagger: 0.1 }, "-=0.3")
        .to('[data-hero="scroll"]', { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 }, "-=0.2");
    }, root);
    return () => ctx.revert();
  }, [introComplete, reduced]);

  const lines = portfolio.tagline.replace(/\.$/, "").split(" ");
  const headline = [lines.slice(0, 2).join(" "), lines.slice(2).join(" ")];

  return (
    <section
      ref={root}
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28"
    >
      <div data-hero="scene" className="absolute inset-0 -z-10 opacity-0">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/20 via-transparent to-[#05070d]" />
      </div>
      <div className="section-shell relative z-10 w-full">
        <p
          data-hero="label"
          className="mono mb-6 text-[11px] tracking-[0.42em] text-[var(--accent)] opacity-0"
        >
          {portfolio.role}
        </p>
        <h1 className="display max-w-5xl text-[12vw] leading-[0.92] text-white md:text-7xl lg:text-8xl">
          {headline.map((line) => (
            <span key={line} data-hero="line" className="block opacity-0">
              {line}
              {line === headline[headline.length - 1] ? "." : ""}
            </span>
          ))}
        </h1>
        <p
          data-hero="copy"
          className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] opacity-0 md:text-lg"
        >
          {portfolio.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic as="a" href="#projects" data-hero="cta" className="primary opacity-0">
            Explore My Work
          </Magnetic>
          <Magnetic as="a" href="#contact" data-hero="cta" className="opacity-0">
            Let&apos;s Connect
          </Magnetic>
        </div>
        <a
          href="#about"
          data-hero="scroll"
          className="mono mt-20 inline-flex items-center gap-3 text-[10px] tracking-[0.32em] text-[var(--muted)] opacity-0"
        >
          <span className="grid h-10 w-6 place-items-center rounded-full border border-white/15">
            <ArrowDown size={12} className="animate-bounce" />
          </span>
          SCROLL
        </a>
      </div>
    </section>
  );
}

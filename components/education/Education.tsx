"use client";

import { useRef } from "react";
import { portfolio } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="section-shell">
        <p className="mono text-[11px] tracking-[0.36em] text-[var(--muted)]">05 — FORMATION</p>
        <h2 className="display mt-5 text-4xl md:text-6xl">Education.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolio.education.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item }: { item: (typeof portfolio.education)[number] }) {
  const ref = useRef<HTMLElement>(null);

  return (
    <article
      ref={ref}
      className="glass p-7 transition-transform duration-300 will-change-transform"
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "none";
      }}
    >
      <p className="mono text-[10px] tracking-[0.24em] text-[var(--accent)]">{item.duration}</p>
      <h3 className="display mt-3 text-2xl">{item.institution}</h3>
      <p className="mt-1 text-sm text-white/85">{item.degree}</p>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.details}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.focus.map((focus) => (
          <span key={focus} className="border border-white/10 px-2 py-1 text-[11px] text-[var(--muted)]">
            {focus}
          </span>
        ))}
      </div>
    </article>
  );
}

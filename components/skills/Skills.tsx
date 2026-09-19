"use client";

import { useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

export function Skills() {
  const compact = useMediaQuery("(max-width: 900px)");
  const [active, setActive] = useState<string | null>(null);

  const nodes = useMemo(() => {
    const all = portfolio.skills.flatMap((cat, ring) =>
      cat.items.map((item, i) => {
        const count = cat.items.length;
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2 + ring * 0.18;
        const radius = 18 + ring * 10;
        return {
          id: `${cat.id}-${item.name}`,
          category: cat.label,
          ...item,
          x: 50 + Math.cos(angle) * radius,
          y: 50 + Math.sin(angle) * radius * 0.78,
        };
      }),
    );
    return all;
  }, []);

  const hovered = nodes.find((n) => n.id === active) ?? null;

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="mono text-[11px] tracking-[0.36em] text-[var(--muted)]">02 — SYSTEMS</p>
        <h2 className="display mt-5 text-4xl md:text-6xl">An orbit of instruments.</h2>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          Hover a node to inspect the stack. The core is the practice; the rings are the tools.
        </p>

        {compact ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {portfolio.skills.map((cat) => (
              <article key={cat.id} className="glass p-5">
                <h3 className="mono text-[11px] tracking-[0.28em] text-[var(--accent)]">
                  {cat.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-3">
                      <span>{item.name}</span>
                      <span className="mono text-[10px] text-[var(--muted)]">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <div className="relative mt-8 aspect-[16/10] w-full">
            <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
              <defs>
                <radialGradient id="core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4d8dff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#05070d" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[22, 34, 46, 58].map((r) => (
                <ellipse
                  key={r}
                  cx="50"
                  cy="50"
                  rx={r}
                  ry={r * 0.78}
                  fill="none"
                  stroke="rgba(173,196,255,0.14)"
                  strokeWidth="0.12"
                />
              ))}
              {hovered && (
                <line
                  x1="50"
                  y1="50"
                  x2={hovered.x}
                  y2={hovered.y}
                  stroke="#4d8dff"
                  strokeWidth="0.18"
                  className="drop-shadow-[0_0_6px_#4d8dff]"
                />
              )}
              <circle cx="50" cy="50" r="4.2" fill="url(#core)" />
              <circle cx="50" cy="50" r="1.3" fill="#e8f1ff" />
              {nodes.map((node) => (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={active === node.id ? 1.35 : 0.82}
                    fill={active === node.id ? "#dce9ff" : "#7aa7ff"}
                    className="cursor-none transition-[r] duration-300"
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.name}, ${node.category}`}
                    onMouseEnter={() => setActive(node.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(node.id)}
                    onBlur={() => setActive(null)}
                  />
                </g>
              ))}
            </svg>
            <div
              className={cn(
                "pointer-events-none absolute bottom-6 left-6 max-w-sm glass p-5 transition-opacity duration-300",
                hovered ? "opacity-100" : "opacity-40",
              )}
            >
              <p className="mono text-[10px] tracking-[0.28em] text-[var(--accent)]">
                {hovered?.category ?? "CORE"}
              </p>
              <p className="display mt-2 text-2xl">{hovered?.name ?? "Practice"}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {hovered?.note ?? "Select a node to inspect its role in the laboratory."}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

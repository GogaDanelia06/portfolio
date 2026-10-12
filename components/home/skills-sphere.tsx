"use client";

import { useAnimationFrame, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Supabase",
  "PostgreSQL",
  "REST API",
  "Angular",
  "Framer Motion",
  "Git",
  "GitHub",
  "Vercel",
  "Postman",
  "next-intl",
  "SEO",
  "3D / CSS",
  "i18n",
];

const IDLE_SPEED = 0.0035; // radians per frame-ish (scaled by delta below)

/** Tag cloud on a sphere, projected to 2D each frame; drag to spin. */
export default function SkillsSphere({ hint }: { hint: string }) {
  const container = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLSpanElement | null)[]>([]);
  const radius = useRef(200);
  const angle = useRef({ x: 0.3, y: 0 });
  const velocity = useRef({ x: 0, y: IDLE_SPEED });
  const drag = useRef<{ x: number; y: number } | null>(null);

  const reduceMotion = useReducedMotion();
  const inView = useInView(container, { amount: 0.2 });

  // Evenly spread points on a unit sphere (Fibonacci lattice).
  const points = useMemo(() => {
    const golden = Math.PI * (3 - Math.sqrt(5));
    return tags.map((_, index) => {
      const y = 1 - (index / (tags.length - 1)) * 2;
      const ring = Math.sqrt(1 - y * y);
      const theta = golden * index;
      return { x: Math.cos(theta) * ring, y, z: Math.sin(theta) * ring };
    });
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      radius.current = Math.min(entry.contentRect.width, entry.contentRect.height) * 0.38;
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!inView) return;
    const frames = Math.min(delta, 64) / 16.67;

    if (!drag.current) {
      // Ease back toward the idle spin after a flick.
      const idle = reduceMotion ? 0 : IDLE_SPEED;
      velocity.current.x += (0 - velocity.current.x) * 0.03 * frames;
      velocity.current.y += (idle - velocity.current.y) * 0.03 * frames;
    }

    angle.current.x += velocity.current.x * frames;
    angle.current.y += velocity.current.y * frames;

    const { x: ax, y: ay } = angle.current;
    const cosX = Math.cos(ax);
    const sinX = Math.sin(ax);
    const cosY = Math.cos(ay);
    const sinY = Math.sin(ay);
    const r = radius.current;

    points.forEach((point, index) => {
      const element = items.current[index];
      if (!element) return;

      // Rotate around Y, then X.
      const x1 = point.x * cosY + point.z * sinY;
      const z1 = -point.x * sinY + point.z * cosY;
      const y2 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;

      const depth = (z2 + 1) / 2; // 0 = back, 1 = front
      const scale = 0.55 + depth * 0.65;

      element.style.transform = `translate(-50%, -50%) translate3d(${x1 * r}px, ${y2 * r}px, 0) scale(${scale})`;
      element.style.opacity = String(0.25 + depth * 0.75);
      element.style.zIndex = String(Math.round(depth * 100));
      element.style.filter = depth < 0.35 ? "blur(1px)" : "none";
    });
  });

  return (
    <div
      ref={container}
      className="relative mx-auto aspect-square w-full max-w-[520px] cursor-grab touch-pan-y select-none active:cursor-grabbing"
      onPointerDown={(event) => {
        drag.current = { x: event.clientX, y: event.clientY };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!drag.current) return;
        const dx = event.clientX - drag.current.x;
        const dy = event.clientY - drag.current.y;
        drag.current = { x: event.clientX, y: event.clientY };
        velocity.current = { x: -dy * 0.004, y: dx * 0.004 };
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerCancel={() => (drag.current = null)}
      role="img"
      aria-label={tags.join(", ")}
    >
      <div className="absolute inset-[18%] rounded-full bg-[var(--color-primary)]/15 blur-[80px]" />
      <div className="absolute inset-[12%] rounded-full border border-[var(--color-border)]" />
      <div className="absolute inset-[12%] rotate-[70deg] scale-y-[0.3] rounded-full border border-[var(--color-border)]" />

      {tags.map((tag, index) => (
        <span
          key={tag}
          ref={(element) => {
            items.current[index] = element;
          }}
          aria-hidden="true"
          className="font-display absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-lg will-change-transform md:text-base"
        >
          {tag}
        </span>
      ))}

      <p className="absolute inset-x-0 bottom-0 text-center text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
        {hint}
      </p>
    </div>
  );
}

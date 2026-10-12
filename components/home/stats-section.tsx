"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { work } from "@/data/portfolio-data";
import type { Dictionary } from "@/i18n/dictionaries/en";


function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection({ dict }: { dict: Dictionary["stats"] }) {
  const stats = [
    { value: 5, suffix: "+", label: dict.years },
    { value: 20, suffix: "+", label: dict.delivered },
    {
      value: work.filter((item) => item.kind === "client").length,
      suffix: "",
      label: dict.clients,
    },
    { value: work.length, suffix: "", label: dict.featured },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-border)] lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--color-background)] p-6 md:p-10">
            <p className="font-display text-5xl font-bold tracking-[-0.04em] text-gradient md:text-7xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

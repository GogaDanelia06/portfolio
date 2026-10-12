"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

import type { Dictionary } from "@/i18n/dictionaries/en";

const accents = ["#22d3ee", "#a78bfa", "#f0abfc", "#a3e635"];

export default function ProcessSection({ dict }: { dict: Dictionary["process"] }) {
  const stack = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stack,
    offset: ["start start", "end end"],
  });

  const count = dict.steps.length;

  return (
    <section className="mx-auto max-w-7xl px-6 pt-24">
      <p className="eyebrow mb-4">{dict.eyebrow}</p>
      <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
        {dict.title}
      </h2>

      <div ref={stack} className="relative mt-14">
        {dict.steps.map((step, index) => (
          <StepCard
            key={step.title}
            index={index}
            count={count}
            title={step.title}
            text={step.text}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function StepCard({
  index,
  count,
  title,
  text,
  progress,
}: {
  index: number;
  count: number;
  title: string;
  text: string;
  progress: MotionValue<number>;
}) {
  // Once the next card starts covering this one, it recedes: shrinks and tips back.
  const start = index / count;
  const depth = count - 1 - index;
  const scale = useTransform(progress, [start, 1], [1, 1 - depth * 0.06]);
  const rotateX = useTransform(progress, [start, 1], [0, depth * 6]);
  const dim = useTransform(progress, [start, 1], [0, depth * 0.18]);

  const accent = accents[index % accents.length];

  return (
    <div
      className="sticky flex h-[62vh] min-h-[380px] items-start justify-center [perspective:1400px]"
      style={{ top: `calc(7rem + ${index * 22}px)` }}
    >
      <motion.article
        style={{ scale, rotateX, transformOrigin: "50% 0%" }}
        className="relative grid w-full overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-7 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.5)] md:grid-cols-[auto_1fr] md:gap-12 md:p-12"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-[90px]"
          style={{ background: accent }}
        />

        <span
          className="font-display text-7xl font-bold leading-none md:text-[9rem]"
          style={{ WebkitTextStroke: `2px ${accent}`, color: "transparent" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative mt-6 md:mt-4">
          <h3 className="text-3xl font-bold tracking-[-0.02em] md:text-5xl">{title}</h3>
          <p className="mt-5 max-w-xl text-lg leading-8">{text}</p>
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ opacity: dim }}
        />
      </motion.article>
    </div>
  );
}

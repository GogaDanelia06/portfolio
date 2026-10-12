"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  Gauge,
  LayoutDashboard,
  Languages,
  Sparkles,
} from "lucide-react";

import type { Dictionary } from "@/i18n/dictionaries/en";

// Paired by index with dictionary.services.items.
const layout = [
  { icon: Sparkles, span: "md:col-span-2" },
  { icon: LayoutDashboard, span: "" },
  { icon: Building2, span: "" },
  { icon: Bot, span: "" },
  { icon: Languages, span: "" },
  { icon: Gauge, span: "md:col-span-2 lg:col-span-3" },
];

export default function ServicesSection({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
      <p className="eyebrow">{dict.eyebrow}</p>
      <h2 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
        {dict.title} <span className="text-gradient">{dict.highlight}</span>
      </h2>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dict.items.map((service, index) => {
          const { icon: Icon, span } = layout[index];

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: 25, transformPerspective: 1000 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, transformPerspective: 1000 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
              className={`spotlight-card group relative overflow-hidden rounded-[1.75rem] p-7 md:p-8 ${span}`}
              onPointerMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
                event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
              }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-8 text-2xl font-bold tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl leading-7">{service.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

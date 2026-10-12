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

const services = [
  {
    icon: Sparkles,
    title: "Immersive brand websites",
    text: "Award-level landing pages with 3D, scroll storytelling, and micro-interactions that make your brand memorable.",
    span: "md:col-span-2",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS & dashboards",
    text: "Product UI, admin panels, and analytics built to scale.",
    span: "",
  },
  {
    icon: Building2,
    title: "Corporate & real estate",
    text: "Project catalogs, galleries, and lead capture for developers and enterprises.",
    span: "",
  },
  {
    icon: Bot,
    title: "AI-powered features",
    text: "Chat assistants, automations, and smart integrations that save your team hours every week.",
    span: "",
  },
  {
    icon: Languages,
    title: "Multilingual by default",
    text: "Georgian, English, and Russian versions with proper SEO for each.",
    span: "",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    text: "Core Web Vitals in the green, structured data, and fast loads on every device — because speed sells.",
    span: "md:col-span-2 lg:col-span-3",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
      <p className="eyebrow">Services</p>
      <h2 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] md:text-6xl">
        Everything your brand needs to <span className="text-gradient">win online.</span>
      </h2>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
            className={`spotlight-card group relative overflow-hidden rounded-[1.75rem] p-7 md:p-8 ${service.span}`}
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
              event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
            }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition duration-500 group-hover:scale-110 group-hover:rotate-6">
              <service.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-8 text-2xl font-bold tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="mt-3 max-w-xl leading-7">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

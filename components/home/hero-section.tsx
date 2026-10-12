"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/navbar";
import HeroShowcase from "@/components/home/hero-showcase";
import { work } from "@/data/portfolio-data";

const headline = ["Websites", "that", "turn", "visitors", "into", "clients."];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-background)] to-transparent" />

      <Navbar />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="glass-pill inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Booking new projects · Tbilisi
          </motion.div>

          <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.75rem,6.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            {headline.map((word, index) => (
              <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`inline-block pr-[0.25em] ${
                    word === "clients." ? "text-gradient" : ""
                  }`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + index * 0.07, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-8 max-w-xl text-lg leading-8 md:text-xl"
          >
            Goga Danelia &amp; team design and build fast, immersive websites, SaaS
            products, and dashboards for ambitious brands — with Next.js, React,
            and motion people remember.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary group">
              Start a project
              <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className="btn-ghost group">
              See our work
              <ArrowDownRight className="h-5 w-5 transition group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Trusted by
            </span>
            {work
              .filter((item) => item.url)
              .map((client) => (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-lg font-semibold text-[var(--color-text)] opacity-70 transition hover:opacity-100"
                >
                  {client.url?.replace(/^https?:\/\//, "")}
                </a>
              ))}
          </motion.div>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}

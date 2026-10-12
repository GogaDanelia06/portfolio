"use client";

import { animate, AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Dictionary } from "@/i18n/dictionaries/en";

const COUNT_SECONDS = 1;

/**
 * Seconds that entrance animations should wait so they play as the intro lifts.
 * The layout's boot script adds `intro-seen` before paint when the intro is skipped.
 */
export function introDelay() {
  if (typeof document === "undefined") return 0;
  return document.documentElement.classList.contains("intro-seen") ? 0 : COUNT_SECONDS;
}

export default function IntroOverlay({ dict }: { dict: Dictionary["intro"] }) {
  const [done, setDone] = useState(false);
  const counter = useRef<HTMLSpanElement>(null);

  const finish = useCallback(() => {
    setDone(true);
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      // Without storage the intro simply plays again next visit.
    }
  }, []);

  useEffect(() => {
    // Already hidden by CSS when seen this session (or reduced motion).
    if (document.documentElement.classList.contains("intro-seen")) return;

    const controls = animate(0, 100, {
      duration: COUNT_SECONDS,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => {
        if (counter.current) counter.current.textContent = String(Math.round(value));
      },
      onComplete: finish,
    });
    return () => controls.stop();
  }, [finish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="intro-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 800 }}
          >
            <Image src="/logo.png" alt="" width={72} height={72} priority className="h-16 w-16 rounded-full" />
          </motion.div>

          <div className="mt-6 overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl"
            >
              Goga Danelia
            </motion.p>
          </div>
          <p className="mt-2 text-sm text-slate-400">{dict.tagline}</p>

          <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between md:left-12 md:right-12">
            <span className="font-display text-6xl font-bold leading-none text-white/90 md:text-8xl">
              <span ref={counter}>0</span>
              <span className="text-[var(--color-primary)]">%</span>
            </span>
            <button
              type="button"
              onClick={finish}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              {dict.skip}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

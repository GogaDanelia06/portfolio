"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import BrowserFrame from "@/components/work/browser-frame";
import { introDelay } from "@/components/shared/intro-overlay";
import { displayDomain, work, type WorkSlug } from "@/data/portfolio-data";

const ease = [0.22, 1, 0.36, 1] as const;

const FIRST: WorkSlug = "montavia";
const CYCLE_MS = 5500;

// Slot per depth, front (0) to back. Back cards fan out left and right so each one
// peeks out from behind the front card, angled toward the center.
const slots = [
  { x: "0%", y: "6%", z: 60, rotateY: 0, rotateZ: 0, scale: 1, opacity: 1 },
  { x: "30%", y: "0%", z: -90, rotateY: -20, rotateZ: 2, scale: 0.9, opacity: 0.95 },
  { x: "-30%", y: "0%", z: -90, rotateY: 20, rotateZ: -2, scale: 0.9, opacity: 0.95 },
  { x: "52%", y: "-6%", z: -220, rotateY: -28, rotateZ: 4, scale: 0.8, opacity: 0.7 },
  { x: "-52%", y: "-6%", z: -220, rotateY: 28, rotateZ: -4, scale: 0.8, opacity: 0.7 },
];

// Every live site, with the featured one dealt first.
const sites = work
  .filter((item) => item.url)
  .sort((a, b) => Number(b.slug === FIRST) - Number(a.slug === FIRST))
  .slice(0, slots.length);

/**
 * A 3D deck of live client sites. The front card cycles to the back every few seconds;
 * the stage turns toward the pointer, and clicking a card brings it to the front.
 */
export default function HeroShowcase() {
  const stage = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(stage, { amount: 0.3 });
  const [wait] = useState(introDelay);
  const [front, setFront] = useState(0);
  const [hovered, setHovered] = useState(false);
  const pointer = useRef<{ x: number; y: number } | null>(null);

  const rotateX = useSpring(8, { stiffness: 50, damping: 16 });
  const rotateY = useSpring(0, { stiffness: 50, damping: 16 });

  const count = sites.length;

  useEffect(() => {
    if (reduceMotion || hovered || !inView) return;
    const timer = setInterval(() => setFront((current) => (current + 1) % count), CYCLE_MS);
    return () => clearInterval(timer);
  }, [reduceMotion, hovered, inView, count]);

  // Follow the pointer when present; otherwise sway slowly so the scene never feels static.
  useAnimationFrame((time) => {
    if (reduceMotion) return;
    if (pointer.current) {
      rotateY.set(pointer.current.x * 12);
      rotateX.set(-pointer.current.y * 18 + 6);
    } else {
      rotateY.set(Math.sin(time / 3000) * 3);
      rotateX.set(Math.cos(time / 3200) * 5 + 8);
    }
  });

  return (
    <div
      ref={stage}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        };
      }}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => {
        pointer.current = null;
        setHovered(false);
      }}
      className="relative mx-auto aspect-[5/4] w-full max-w-xl [perspective:1400px]"
      aria-hidden="true"
    >
      <div className="absolute inset-[10%] rounded-full bg-[var(--color-primary)]/20 blur-[100px]" />

      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
      >
        {sites.map((item, index) => {
          const depth = (index - front + count) % count;
          const slot = slots[depth];

          return (
            <motion.div
              key={item.slug}
              className="absolute inset-x-[16%] top-[20%] cursor-pointer [transform-style:preserve-3d]"
              style={{ zIndex: count - depth }}
              animate={{
                x: slot.x,
                y: slot.y,
                z: slot.z,
                rotateY: slot.rotateY,
                rotateZ: slot.rotateZ,
                scale: slot.scale,
                opacity: slot.opacity,
              }}
              transition={{ duration: 1.2, ease }}
              onClick={() => setFront(index)}
            >
              <motion.div
                initial={{ opacity: 0, y: 120, rotateX: 50, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: wait + 0.4 + (count - 1 - index) * 0.12, ease }}
              >
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
                  transition={{
                    duration: 6 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7,
                  }}
                  className="shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
                >
                  <BrowserFrame
                    src={item.images[0]}
                    alt=""
                    address={displayDomain(item)}
                    priority={depth < 3}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="absolute inset-x-0 -bottom-16 flex justify-center gap-2 sm:-bottom-10">
        {sites.map((item, index) => (
          <span
            key={item.slug}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === front ? "w-6 bg-[var(--color-primary)]" : "w-1.5 bg-[var(--color-border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

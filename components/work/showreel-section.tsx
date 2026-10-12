"use client";

import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { work } from "@/data/portfolio-data";

const AUTO_SPEED = 6; // degrees per second
const DRAG_FACTOR = 0.25; // degrees per dragged pixel

/** A 3D ring of project covers: auto-spins, drag to rotate, tilts with scroll. */
export default function ShowreelSection() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(section, { amount: 0.1 });

  const [cardWidth, setCardWidth] = useState(300);
  const rotation = useMotionValue(0);
  const velocity = useRef(0);
  const drag = useRef<{ x: number; moved: number } | null>(null);

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [16, -10]), {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setCardWidth(Math.min(320, Math.max(180, entry.contentRect.width * 0.26)));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!inView || drag.current) return;
    const seconds = Math.min(delta, 64) / 1000;
    // Coast on release, then settle back to the idle spin.
    velocity.current *= 0.94;
    const idle = reduceMotion ? 0 : AUTO_SPEED * seconds;
    rotation.set(rotation.get() - idle + velocity.current);
  });

  const count = work.length;
  const step = 360 / count;
  // Radius that places the cards edge to edge around the ring, plus breathing room.
  const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / count) + cardWidth * 0.18);

  // Set when the last gesture was a drag, so its trailing click doesn't navigate.
  const dragged = useRef(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    drag.current = { x: event.clientX, moved: 0 };
    dragged.current = false;
    velocity.current = 0;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const dx = event.clientX - drag.current.x;
    drag.current.x = event.clientX;
    drag.current.moved += Math.abs(dx);

    // Capture only once it's clearly a drag; capturing on press would retarget card clicks.
    if (!dragged.current && drag.current.moved > 6) {
      dragged.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    velocity.current = dx * DRAG_FACTOR;
    rotation.set(rotation.get() + dx * DRAG_FACTOR);
  };

  const handlePointerUp = () => {
    drag.current = null;
  };

  const goTo = (slug: string) => {
    if (dragged.current) return;
    document
      .getElementById(`work-${slug}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      ref={section}
      aria-labelledby="showreel-title"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="eyebrow justify-center">Showreel</p>
        <h2
          id="showreel-title"
          className="font-display mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] md:text-6xl"
        >
          {count} launches. <span className="text-gradient">One standard.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md">
          Drag to spin through the work — tap any project to jump to it.
        </p>
      </div>

      <div
        ref={stage}
        className="showreel-stage relative mx-auto mt-10 h-[340px] max-w-7xl cursor-grab touch-pan-y select-none [perspective:1600px] active:cursor-grabbing md:mt-14 md:h-[400px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
          style={{ rotateX: tilt }}
        >
          <motion.div className="[transform-style:preserve-3d]" style={{ rotateY: rotation }}>
            {work.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => goTo(item.slug)}
                aria-label={`Jump to ${item.name}`}
                className="group absolute overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl [backface-visibility:hidden]"
                style={{
                  width: cardWidth,
                  height: cardWidth * 0.66,
                  left: -cardWidth / 2,
                  top: -(cardWidth * 0.66) / 2,
                  transform: `rotateY(${index * step}deg) translateZ(${radius}px)`,
                }}
              >
                <Image
                  src={item.images[0]}
                  alt=""
                  fill
                  draggable={false}
                  sizes="320px"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-10 text-left">
                  <span className="font-display text-sm font-bold text-white md:text-base">
                    {item.name}
                  </span>
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: item.palette[0] }}
                  />
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

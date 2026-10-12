"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

/** 3D perspective card that tilts toward the pointer with a moving glare. */
export default function TiltCard({ children, className = "", intensity = 10 }: Props) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), spring);

  const glareX = useTransform(x, (value) => `${value * 100}%`);
  const glareY = useTransform(y, (value) => `${value * 100}%`);
  const glare = useMotionTemplate`radial-gradient(600px circle at ${glareX} ${glareY}, rgba(255,255,255,0.12), transparent 40%)`;

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="[perspective:1400px]">
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative ${className}`}
      >
        {children}
        <motion.div
          aria-hidden="true"
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </motion.div>
    </div>
  );
}

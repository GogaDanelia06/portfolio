"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import BrowserFrame from "@/components/work/browser-frame";
import { work } from "@/data/portfolio-data";

const ease = [0.22, 1, 0.36, 1] as const;

// Back to front: each card is offset and rotated a little more.
const layout = [
  { x: "-10%", y: "-18%", rotate: -6, depth: 0.4 },
  { x: "8%", y: "-4%", rotate: 4, depth: 0.7 },
  { x: "-4%", y: "16%", rotate: -2, depth: 1 },
];

export default function HeroShowcase() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 60, damping: 18 });
  const y = useSpring(pointerY, { stiffness: 60, damping: 18 });

  const shots = work.filter((item) => item.kind === "client").slice(0, 3);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="relative mx-auto aspect-[5/4] w-full max-w-xl"
      aria-hidden="true"
    >
      <div className="absolute inset-[10%] rounded-full bg-[var(--color-primary)]/20 blur-[100px]" />

      {shots.map((item, index) => (
        <ShowcaseCard
          key={item.name}
          index={index}
          src={item.images[0]}
          address={item.url?.replace(/^https?:\/\//, "") ?? item.name}
          x={x}
          y={y}
          floating={!reduceMotion}
        />
      ))}
    </div>
  );
}

function ShowcaseCard({
  index,
  src,
  address,
  x,
  y,
  floating,
}: {
  index: number;
  src: string;
  address: string;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  floating: boolean;
}) {
  const { depth, rotate, x: offsetX, y: offsetY } = layout[index];
  const shiftX = useTransform(x, (value) => value * 40 * depth);
  const shiftY = useTransform(y, (value) => value * 30 * depth);

  return (
    <motion.div
      className="absolute inset-x-[8%] top-[18%]"
      style={{
        x: shiftX,
        y: shiftY,
        zIndex: index,
        translate: `${offsetX} ${offsetY}`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80, rotate: 0, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.4 + index * 0.15, ease }}
      >
        <motion.div
          animate={floating ? { y: [0, -10, 0] } : undefined}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8,
          }}
        >
          <BrowserFrame
            src={src}
            alt=""
            address={address}
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

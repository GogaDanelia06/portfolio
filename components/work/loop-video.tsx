"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  /** Path without extension; a .webm and an .mp4 must sit side by side. */
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/** Muted, looping clip that only plays while it is on screen. */
export default function LoopVideo({ src, poster, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <video
      ref={ref}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  );
}

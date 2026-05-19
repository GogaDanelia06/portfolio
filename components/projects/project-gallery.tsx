"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { projects } from "@/data/portfolio-data";

type Props = {
  project: (typeof projects)[number];
  onSelectImage: (image: string) => void;
};

export default function ProjectGallery({
  project,
  onSelectImage,
}: Props) {
  return (
    <div className="mt-8 grid max-h-[780px] gap-5 overflow-y-auto pr-2 md:grid-cols-2 lg:grid-cols-3">
      {project.images.map((image, index) => (
        <motion.button
          key={image}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
          }}
          onClick={() => onSelectImage(image)}
          className="group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl"
        >
          <Image
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            width={1400}
            height={850}
            className="h-[230px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
            priority={index === 0}
          />
        </motion.button>
      ))}
    </div>
  );
}
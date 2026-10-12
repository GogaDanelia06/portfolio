"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import type { Dictionary } from "@/i18n/dictionaries/en";

type Props = {
  image: string | null;
  images: string[];
  onClose: () => void;
  onChangeImage: (image: string) => void;
  labels: Dictionary["common"];
};

export default function ImageModal({
  image,
  images,
  onClose,
  onChangeImage,
  labels,
}: Props) {
  const currentIndex = image ? images.indexOf(image) : -1;

  const showPrevious = () => {
    if (currentIndex <= 0) {
      onChangeImage(images[images.length - 1]);
      return;
    }

    onChangeImage(images[currentIndex - 1]);
  };

  const showNext = () => {
    if (currentIndex === images.length - 1) {
      onChangeImage(images[0]);
      return;
    }

    onChangeImage(images[currentIndex + 1]);
  };

  // Latest handlers for the key listener, which only re-binds on open/close.
  const keyActions = useRef({ onClose, showPrevious, showNext });
  useEffect(() => {
    keyActions.current = { onClose, showPrevious, showNext };
  });

  const isOpen = image !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") keyActions.current.onClose();
      if (event.key === "ArrowLeft") keyActions.current.showPrevious();
      if (event.key === "ArrowRight") keyActions.current.showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label={labels.close}
            className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={labels.previous}
            className="absolute left-5 z-20 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={labels.next}
            className="absolute right-5 z-20 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <motion.div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] max-w-7xl overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl"
            initial={{ scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={image}
              alt={labels.screenshotAlt}
              width={1800}
              height={1200}
              className="max-h-[92vh] w-auto object-contain"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
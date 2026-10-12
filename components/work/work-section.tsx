"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Expand, Plus } from "lucide-react";
import { useState } from "react";

import ImageModal from "@/components/shared/image-modal";
import TiltCard from "@/components/shared/tilt-card";
import BrowserFrame from "@/components/work/browser-frame";
import { displayDomain, work, type WorkItem } from "@/data/portfolio-data";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { format } from "@/i18n/format";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  dict: Dictionary["work"];
  common: Dictionary["common"];
};

export default function WorkSection({ dict, common }: Props) {
  const [gallery, setGallery] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openGallery = (item: WorkItem) => {
    setGallery(item.images);
    setSelectedImage(item.images[0]);
  };

  return (
    <section id="work" className="relative mx-auto max-w-7xl scroll-mt-28 px-6 py-24 md:py-32">
      <div className="mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] md:text-6xl">
            {dict.title} <span className="text-gradient">{dict.highlight}</span>
          </h2>
        </div>
        <p className="max-w-sm leading-7">{dict.intro}</p>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {work.map((item, index) => {
          const reversed = index % 2 === 1;
          const href = item.url ?? item.github;
          const copy = dict.items[item.slug];

          return (
            <motion.article
              key={item.slug}
              id={`work-${item.slug}`}
              initial={{ opacity: 0, y: 80, rotateX: 22, transformPerspective: 1400 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, transformPerspective: 1400 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ transformOrigin: "50% 100%" }}
              transition={{ duration: 0.9, ease }}
              className="grid scroll-mt-28 grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16"
            >
              <button
                type="button"
                onClick={() => openGallery(item)}
                aria-label={format(dict.viewScreenshots, { count: item.images.length, name: copy.name })}
                className={`text-left ${reversed ? "lg:order-2" : ""}`}
              >
                <TiltCard className="rounded-[1.75rem]" intensity={6}>
                  <div
                    className="relative rounded-[1.75rem] p-3 sm:p-4"
                    style={{
                      background: `linear-gradient(135deg, ${item.palette[0]}40, ${item.palette[1]}26 60%, transparent)`,
                    }}
                  >
                    <BrowserFrame
                      src={item.images[0]}
                      video={item.video}
                      alt={copy.name}
                      address={displayDomain(item)}
                      priority={index === 0}
                    />
                    <span className="absolute bottom-7 right-7 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 sm:opacity-100">
                      <Expand className="h-3.5 w-3.5" />
                      {format(dict.screens, { count: item.images.length })}
                    </span>
                  </div>
                </TiltCard>
              </button>

              <div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-bold text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[var(--color-border)]" />
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      color: item.palette[0],
                      background: `${item.palette[0]}1a`,
                    }}
                  >
                    {copy.category}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-3xl font-bold tracking-[-0.02em] md:text-5xl">
                  {copy.name}
                </h3>

                <p className="mt-5 text-lg leading-8">{copy.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {copy.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline inline-flex items-center gap-2 font-semibold text-[var(--color-text)]"
                    >
                      {item.url ? format(dict.visit, { domain: displayDomain(item) }) : dict.github}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => openGallery(item)}
                    className="link-underline inline-flex items-center gap-2 font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  >
                    {dict.screenshots}
                    <Expand className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="group relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-[2rem] border border-dashed border-[var(--color-border)] px-6 py-16 text-center transition hover:border-[var(--color-primary)]"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-slate-950 transition duration-500 group-hover:rotate-90 group-hover:scale-110">
            <Plus className="h-7 w-7" />
          </span>
          <p className="font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">
            {dict.nextTitle}
          </p>
          <p className="max-w-md">{dict.nextText}</p>
        </motion.a>
      </div>

      <ImageModal
        image={selectedImage}
        images={gallery}
        onClose={() => setSelectedImage(null)}
        onChangeImage={setSelectedImage}
        labels={common}
      />
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects } from "@/data/portfolio-data";

import ImageModal from "./image-modal";
import Reveal from "./reveal";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects[activeProject];

  return (
    <Reveal>
      <section
        id="projects"
        className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 dark:text-cyan-300">
              Portfolio
            </p>

            <h2 className="mt-3 text-4xl font-black text-[var(--color-text)]">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-[var(--color-muted)]">
            Choose a project below to view screenshots, stack, features,
            GitHub, and live demo.
          </p>
        </div>

        <div className="theme-card rounded-[2rem] p-5 md:p-7">
          <ProjectTabs
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectHeader project={project} />

              <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="max-w-4xl leading-7 text-[var(--color-muted)]">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                        Focus
                      </p>

                      <p className="mt-3 leading-7 text-[var(--color-muted)]">
                         {project.focus}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                        Architecture
                      </p>

                      <p className="mt-3 leading-7 text-[var(--color-muted)]">
                        {project.architecture}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                    Key Features
                  </p>

                  <div className="mt-5 flex flex-col gap-4">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                        <span className="font-medium text-[var(--color-text)]">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
                    onClick={() => setSelectedImage(image)}
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
            </motion.div>
          </AnimatePresence>
        </div>

        <ImageModal
          image={selectedImage}
          images={project.images}
          onClose={() => setSelectedImage(null)}
          onChangeImage={setSelectedImage}
        />
      </section>
    </Reveal>
  );
}

function ProjectTabs({
  activeProject,
  setActiveProject,
}: {
  activeProject: number;
  setActiveProject: (index: number) => void;
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {projects.map((item, index) => {
        const isActive = activeProject === index;

        return (
          <button
            key={item.title}
            onClick={() => setActiveProject(index)}
            className={`rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 ${
              isActive
                ? "bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-[var(--color-text)]"
            }`}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}

function ProjectHeader({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-start">
      <div>
        <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          {project.type}
        </span>

        <h3 className="mt-4 text-3xl font-black text-[var(--color-text)]">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-[var(--color-muted)]">
          {project.stack}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 font-bold text-[var(--color-text)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60"
        >
          GitHub
        </a>

{project.live !== "#" && (
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1"
  >
    Live Demo
  </a>
)}
      </div>
    </div>
  );
}
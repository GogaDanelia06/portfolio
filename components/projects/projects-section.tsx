"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects } from "@/data/portfolio-data";

import Reveal from "@/components/shared/reveal";
import ImageModal from "@/components/shared/image-modal";

import ProjectTabs from "@/components/projects/project-tabs";
import ProjectHeader from "@/components/projects/project-header";
import ProjectDetails from "@/components/projects/project-details";
import ProjectGallery from "@/components/projects/project-gallery";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const project = projects[activeProject];

  return (
    <Reveal>
      <section
        id="projects"
        className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Portfolio
            </p>

            <h2 className="mt-3 text-4xl font-black text-[var(--color-text)]">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-[var(--color-muted)]">
            Choose a project below to view screenshots,
            stack, features, GitHub, and live demo.
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

              <ProjectDetails project={project} />

              <ProjectGallery
                project={project}
                onSelectImage={setSelectedImage}
              />
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
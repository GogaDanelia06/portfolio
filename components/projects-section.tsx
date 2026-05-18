"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/portfolio-data";
import ImageModal from "./image-modal";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projects[activeProject];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Portfolio
          </p>
          <h2 className="mt-3 text-4xl font-black">Featured Projects</h2>
        </div>

        <p className="max-w-xl text-slate-300">
          Choose a project below to view screenshots, stack, features, GitHub,
          and live demo.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl">
        <ProjectTabs activeProject={activeProject} setActiveProject={setActiveProject} />
        <ProjectHeader project={project} />

        <p className="max-w-4xl leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-8 grid max-h-[780px] gap-5 overflow-y-auto pr-2 md:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950 transition hover:border-cyan-400"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={1400}
                height={850}
                className="h-[230px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                priority={index === 0}
              />
            </button>
          ))}
        </div>
      </div>

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
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
      {projects.map((item, index) => (
        <button
          key={item.title}
          onClick={() => setActiveProject(index)}
          className={`rounded-2xl px-5 py-3 text-sm font-bold transition ${
            activeProject === index
              ? "bg-cyan-400 text-slate-950"
              : "border border-white/10 bg-slate-950/40 text-slate-300 hover:border-cyan-400 hover:text-white"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

function ProjectHeader({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-start">
      <div>
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-300">
          {project.type}
        </span>

        <h3 className="mt-4 text-3xl font-black">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.stack}</p>
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="rounded-2xl border border-white/10 px-5 py-3 font-bold text-cyan-300 transition hover:border-cyan-400"
        >
          GitHub
        </a>

        <a
          href={project.live}
          className="rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
import { projects } from "@/data/portfolio-data";

type Props = {
  project: (typeof projects)[number];
};

export default function ProjectHeader({
  project,
}: Props) {
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
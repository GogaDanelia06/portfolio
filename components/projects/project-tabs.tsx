import { projects } from "@/data/portfolio-data";

type Props = {
  activeProject: number;
  setActiveProject: (index: number) => void;
};

export default function ProjectTabs({
  activeProject,
  setActiveProject,
}: Props) {
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
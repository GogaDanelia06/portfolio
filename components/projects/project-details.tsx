import { projects } from "@/data/portfolio-data";

type Props = {
  project: (typeof projects)[number];
};

export default function ProjectDetails({
  project,
}: Props) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="max-w-4xl leading-7 text-[var(--color-muted)]">
          {project.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            title="Focus"
            text={project.focus}
          />

          <InfoCard
            title="Architecture"
            text={project.architecture}
          />
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
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        {title}
      </p>

      <p className="mt-3 leading-7 text-[var(--color-muted)]">
        {text}
      </p>
    </div>
  );
}
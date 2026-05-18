import { skills } from "@/data/portfolio-data";
import Reveal from "./reveal";

export default function SkillsSection() {
  return (
    <Reveal>
      <section
  id="skills"
  className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20"
>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 dark:text-cyan-300">
          Tech Stack
        </p>

        <h2 className="mt-3 text-4xl font-black text-[var(--color-text)]">
          Skills I Use
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-5
                py-3
                text-sm
                font-medium
                text-[var(--color-muted)]
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:text-[var(--color-text)]
                hover:shadow-lg
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
import SkillsSphere from "@/components/home/skills-sphere";
import Reveal from "@/components/shared/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function SkillsSection({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <Reveal>
      <section id="skills" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              {dict.title} <span className="text-gradient">{dict.highlight}</span>
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {dict.groups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SkillsSphere hint={dict.hint} />
        </div>
      </section>
    </Reveal>
  );
}

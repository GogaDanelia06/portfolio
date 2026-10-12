import Reveal from "@/components/shared/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function ExperienceSection({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Reveal>
      <section id="experience" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
        <p className="eyebrow">{dict.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">{dict.title}</h2>

        <div className="mt-12 grid gap-5">
          {dict.items.map((item) => (
            <div
              key={item.role + item.company}
              className="spotlight-card rounded-[1.75rem] p-6 md:p-8"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">{item.role}</h3>
                  <p className="mt-1 font-medium text-[var(--color-primary)]">{item.company}</p>
                </div>

                <p className="shrink-0 font-mono text-sm text-[var(--color-muted)]">{item.date}</p>
              </div>

              <p className="mt-4 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

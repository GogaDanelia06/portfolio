import { experience } from "@/data/portfolio-data";
import Reveal from "@/components/shared/reveal";

export default function ExperienceSection() {
  return (
    <Reveal>
<section
  id="experience"
  className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20"
>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-black">Professional Background</h2>

        <div className="mt-10 grid gap-5">
          {experience.map((item) => (
            <div
              key={item.role + item.company}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="mt-1 text-cyan-300">{item.company}</p>
                </div>

                <p className="text-sm text-slate-400">{item.date}</p>
              </div>

              <p className="mt-4 leading-7 text-[var(--color-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}
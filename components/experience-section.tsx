import { experience } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-y border-white/10 bg-white/[0.03] py-20"
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
              className="rounded-3xl border border-white/10 bg-slate-950/50 p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="mt-1 text-cyan-300">{item.company}</p>
                </div>

                <p className="text-sm text-slate-400">{item.date}</p>
              </div>

              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
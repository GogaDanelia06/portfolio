import { skills } from "@/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Tech Stack
      </p>

      <h2 className="mt-3 text-4xl font-black">Skills I Use</h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
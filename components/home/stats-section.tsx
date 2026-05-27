import { projects } from "@/data/portfolio-data";

const stats = [
  ["5+", "Years Experience"],
  ["20+", "Completed Projects"],
  [projects.length, "Featured Projects"],
  ["100%", "Responsive Focus"],
];

export default function StatsSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white/[0.03] py-10">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <h3 className="text-4xl font-black text-cyan-300">{number}</h3>
            <p className="mt-2 text-[var(--color-muted)]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
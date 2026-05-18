import { projects } from "@/data/portfolio-data";

const stats = [
  ["3+", "Years Experience"],
  ["10+", "Completed Projects"],
  [projects.length, "Featured Projects"],
  ["100%", "Responsive Focus"],
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-10">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-4xl font-black text-cyan-300">{number}</h3>
            <p className="mt-2 text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
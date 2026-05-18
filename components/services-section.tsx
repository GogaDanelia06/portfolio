import Reveal from "./reveal";

const services = [
  "Dashboard & Admin Panel Development",
  "React / Next.js Websites",
  "Responsive UI Development",
  "Authentication Interfaces",
  "API Integration",
  "Frontend Bug Fixing",
];

export default function ServicesSection() {
  return (
   <Reveal>
    <section className="border-y border-[var(--color-border)] bg-white/[0.03] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          What I Do
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Services I can help with
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-[var(--color-border)] bg-slate-950/50 p-6 transition hover:border-cyan-400/50"
            >
              <p className="text-lg font-bold">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     </Reveal>
  );
}
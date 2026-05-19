import Reveal from "@/components/shared/reveal";

const steps = [
  {
    number: "01",
    title: "Understand the product",
    text: "I first define the goal, users, required pages, and main user flows before writing code.",
  },
  {
    number: "02",
    title: "Design the structure",
    text: "I plan reusable components, responsive layouts, data flow, and clean project architecture.",
  },
  {
    number: "03",
    title: "Build the interface",
    text: "I develop polished UI with Next.js, React, TypeScript, Tailwind CSS, and real UX details.",
  },
  {
    number: "04",
    title: "Test and polish",
    text: "I check responsiveness, loading states, errors, spacing, accessibility, and final visual quality.",
  },
];

export default function ProcessSection() {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[var(--color-muted)]">
            Process
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            How I turn ideas into clean production-ready interfaces.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="theme-card rounded-[2rem] p-6 transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-black text-cyan-300">
                {step.number}
              </div>

              <h3 className="text-2xl font-black">{step.title}</h3>

              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
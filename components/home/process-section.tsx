import Reveal from "@/components/shared/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We dig into your business, audience, and goals, then map the pages and user flows that will drive conversions.",
  },
  {
    number: "02",
    title: "Design",
    text: "A distinctive visual direction with motion and 3D where it adds impact — reviewed with you before a line of code.",
  },
  {
    number: "03",
    title: "Build",
    text: "Fast, SEO-ready Next.js development with a CMS your team can actually use, in every language you need.",
  },
  {
    number: "04",
    title: "Launch & grow",
    text: "Cross-device QA, performance tuning, analytics, and ongoing support after go-live.",
  },
];

export default function ProcessSection() {
  return (
    <Reveal>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="eyebrow mb-4">Process</p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] md:text-6xl">
            From first call to launch in four clear steps.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="spotlight-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-black text-cyan-300">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold">{step.title}</h3>

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
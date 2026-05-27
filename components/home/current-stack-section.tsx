import Reveal from "@/components/shared/reveal";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "UI Systems",
];

export default function CurrentStackSection() {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="theme-card flex flex-col gap-5 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[var(--color-text)]">
            Currently working with
          </p>

          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
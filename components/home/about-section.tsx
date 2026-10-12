import Reveal from "@/components/shared/reveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <Reveal>
      <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
              {dict.title}
            </h2>
          </div>

          <div className="spotlight-card rounded-[2rem] p-7 md:p-9">
            {dict.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 [&+&]:mt-5">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

const items = [
  "Web Design",
  "Next.js",
  "3D & Motion",
  "SaaS Products",
  "E-commerce",
  "Dashboards",
  "Branding Sites",
  "TypeScript",
  "SEO-ready",
];

export default function MarqueeSection() {
  return (
    <section
      aria-label="What we do"
      className="relative overflow-hidden border-y border-[var(--color-border)] py-6"
    >
      <div className="marquee flex w-max gap-10">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            aria-hidden={index >= items.length}
            className="font-display flex items-center gap-10 text-2xl font-bold tracking-[-0.02em] text-[var(--color-text)] md:text-4xl"
          >
            {item}
            <span className="text-gradient text-xl md:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

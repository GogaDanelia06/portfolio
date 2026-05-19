import Reveal from "./reveal";

const items = [
  {
    title: "Clean architecture",
    text: "I split projects into reusable components, clear folders, and maintainable logic.",
  },
  {
    title: "Pixel-focused UI",
    text: "I care about spacing, typography, responsiveness, hover states, and visual polish.",
  },
  {
    title: "Real user flows",
    text: "I build full flows like login, dashboard, filters, forms, protected pages, and actions.",
  },
  {
    title: "Fast iteration",
    text: "I improve projects step by step, test often, and polish details until the product feels complete.",
  },
];

export default function WorkStyleSection() {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[var(--color-muted)]">
            How I Work
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            I build with product quality, not just code.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="theme-card rounded-[2rem] p-6">
              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
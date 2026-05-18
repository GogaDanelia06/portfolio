export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            About Me
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Developer focused on clean UI and real product experience.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 text-slate-300">
          <p className="leading-8">
            I’m Goga Danelia, a Full-Stack Developer focused on building modern
            web applications with Next.js, React, TypeScript, and Tailwind CSS.
            I enjoy creating dashboards, authentication flows, responsive
            interfaces, and clean component-based systems.
          </p>

          <p className="mt-5 leading-8">
            My main goal is to build applications that look professional, work
            smoothly on different devices, and feel close to real production
            products.
          </p>
        </div>
      </div>
    </section>
  );
}
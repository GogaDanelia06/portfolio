import Navbar from "@/components/layout/navbar";
import Reveal from "@/components/shared/reveal";

const highlights = [
  "Production-ready Next.js apps",
  "Dashboard & admin interfaces",
  "Authentication and protected routes",
  "Clean component architecture",
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function HeroSection() {
  return (
    <Reveal>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute left-[-140px] top-[-140px] h-96 w-96 rounded-full bg-cyan-400/20 blur-[130px]" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <Navbar />

          <div className="grid min-h-[82vh] items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Full-Stack Developer • React • Next.js • TypeScript
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
                I build scalable web apps with clean UI and real product
                thinking.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                I specialize in modern frontend and full-stack development,
                building responsive dashboards, authentication flows, banking
                interfaces, and polished user experiences using Next.js, React,
                TypeScript, and Tailwind CSS.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:shadow-cyan-400/30"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  Let’s Work Together
                </a>
              </div>
            </div>

            <div className="theme-card rounded-[2rem] p-6 shadow-2xl">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  What I Build
                </p>

                <div className="mt-6 grid gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={item}
                      className="theme-dark-box flex items-center gap-4 rounded-2xl p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-black text-cyan-300">
                        0{index + 1}
                      </span>

                      <span className="font-semibold text-[var(--color-text)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-black text-cyan-300">10+</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    UI sections built
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-black text-cyan-300">3+</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    Real app flows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
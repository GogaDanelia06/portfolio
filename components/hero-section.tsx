import Navbar from "./navbar";

const availableItems = [
  "React / Next.js websites",
  "Dashboards & admin panels",
  "Responsive UI development",
  "Authentication screens",
  "Frontend bug fixing",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-8">
        <Navbar />

        <div className="grid min-h-[82vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Full-Stack Developer • Next.js • React • TypeScript
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              I build modern dashboards and web apps that feel production-ready.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m a developer focused on clean UI, responsive layouts,
              authentication flows, scalable component architecture, and
              high-quality user experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Available for
            </p>

            <div className="mt-6 grid gap-4">
              {availableItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
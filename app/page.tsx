export default function PortfolioHome() {
  const projects = [
    {
      title: "TBC Internet Banking Clone",
      stack: "Next.js • React • TypeScript • Tailwind CSS",
      description:
        "A banking-style dashboard with authentication flows, transfers, templates, multilingual support, dark/light themes, and reusable component architecture.",
      link: "https://github.com/GogaDanelia06/tbc-web",
    },
    {
      title: "Job Application Tracker",
      stack: "Next.js • React • TypeScript • MongoDB",
      description:
        "A kanban-style job tracking platform with authentication, dashboard functionality, responsive UI, and dynamic workflows.",
      link: "https://github.com/GogaDanelia06",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <nav className="mb-20 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Goga Danelia</h2>
          <div className="flex gap-5 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="mailto:daneliagoga6@gmail.com" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Full-Stack Developer
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Building modern web apps with Next.js, React and TypeScript.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I create responsive dashboards, authentication flows, multilingual interfaces,
              and performance-focused web applications with clean component architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="https://github.com/GogaDanelia06"
                target="_blank"
                className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
            <h3 className="text-xl font-bold">Available for</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              <p>• React / Next.js websites</p>
              <p>• Dashboards and admin panels</p>
              <p>• Responsive UI development</p>
              <p>• API integration</p>
              <p>• Frontend bug fixing</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-slate-800 bg-slate-900/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Angular",
              "MongoDB",
              "MySQL",
              "API Integration",
              "Responsive Design",
              "Authentication",
              "UI/UX",
            ].map((skill) => (
              <span key={skill} className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <p className="mb-3 text-sm font-medium text-cyan-400">{project.stack}</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-cyan-400 p-8 text-slate-950 md:p-10">
          <h2 className="text-3xl font-bold">Let’s build something modern.</h2>
          <p className="mt-3 max-w-2xl">
            Available for React, Next.js, dashboard, admin panel, and responsive frontend projects.
          </p>
          <a
            href="mailto:daneliagoga6@gmail.com"
            className="mt-6 inline-block rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}

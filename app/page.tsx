import Image from "next/image";

const projects = [
  {
    title: "TBC Internet Banking Clone",
    type: "Banking Dashboard",
    stack: "Next.js • React • TypeScript • Tailwind CSS",
    images: [
      "/TBC/1.png",
      "/TBC/2.png",
      "/TBC/3.png",
      "/TBC/4.png",
      "/TBC/5.png",
      "/TBC/6.png",
      "/TBC/7.png",
      "/TBC/8.png",
      "/TBC/9.png",
    ],
    description:
      "Production-style banking dashboard inspired by TBC Bank with authentication flows, transfers, templates, multilingual support, dark/light themes, and reusable component architecture.",
    highlights: [
      "Authentication UI",
      "Transfers",
      "Multilingual",
      "Dark / Light Mode",
      "Dashboard",
      "Reusable Components",
    ],
    github: "https://github.com/GogaDanelia06/tbc-web",
    live: "#",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Angular",
  "MongoDB",
  "MySQL",
  "Authentication",
  "API Integration",
  "Responsive Design",
  "UI/UX",
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Mainstream / Kinotechy",
    date: "2026 — Present",
    text: "Developing modern web applications, dashboards, responsive interfaces, and production-focused frontend architecture.",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Remote / Contract Projects",
    date: "2023 — Present",
    text: "Building business websites, dashboards, and custom web applications using React, Next.js, and modern frontend tools.",
  },
  {
    role: "Front-End Developer",
    company: "LEPL Levan Samkharauli National Forensics Bureau",
    date: "2024 — 2025",
    text: "Developed frontend applications using Angular and JavaScript, improving usability and internal workflows.",
  },
];

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <a href="#" className="text-lg font-bold tracking-tight">
              Goga Danelia
            </a>

            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#projects" className="hover:text-cyan-300">
                Projects
              </a>
              <a href="#experience" className="hover:text-cyan-300">
                Experience
              </a>
              <a href="#skills" className="hover:text-cyan-300">
                Skills
              </a>
              <a href="#contact" className="hover:text-cyan-300">
                Contact
              </a>
            </div>
          </nav>

          <div className="grid min-h-[82vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Full-Stack Developer • Next.js • React • TypeScript
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
                I build modern dashboards and web apps that feel
                production-ready.
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
                {[
                  "React / Next.js websites",
                  "Dashboards & admin panels",
                  "Responsive UI development",
                  "Authentication screens",
                  "Frontend bug fixing",
                ].map((item) => (
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

      <section className="border-y border-white/10 bg-white/[0.03] py-10">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-4">
          {[
            ["3+", "Years Experience"],
            ["10+", "Completed Projects"],
            ["2", "Strong Portfolio Apps"],
            ["100%", "Responsive Focus"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-4xl font-black text-cyan-300">{number}</h3>
              <p className="mt-2 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Portfolio
            </p>
            <h2 className="mt-3 text-4xl font-black">Featured Projects</h2>
          </div>

          <p className="max-w-xl text-slate-300">
            My strongest projects focus on dashboards, business flows,
            responsive UI, authentication, and scalable frontend architecture.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl"
            >
              <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-300">
                    {project.type}
                  </span>

                  <h3 className="mt-4 text-3xl font-black">{project.title}</h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {project.stack}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-2xl border border-white/10 px-5 py-3 font-bold text-cyan-300 transition hover:border-cyan-400"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <p className="max-w-4xl leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {project.images.map((image, index) => (
                  <div
                    key={image}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1400}
                      height={850}
                      className="h-[230px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.03] py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Experience
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Professional Background
          </h2>

          <div className="mt-10 grid gap-5">
            {experience.map((item) => (
              <div
                key={item.role + item.company}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-6"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="mt-1 text-cyan-300">{item.company}</p>
                  </div>

                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>

                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Tech Stack
        </p>

        <h2 className="mt-3 text-4xl font-black">Skills I Use</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] bg-cyan-400 p-8 text-slate-950 md:p-12">
          <p className="font-bold uppercase tracking-[0.2em]">
            Let’s work together
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">
            Need a modern React or Next.js developer for your project?
          </h2>

          <p className="mt-4 max-w-2xl text-lg">
            I can help with dashboards, responsive websites, frontend fixes,
            authentication UI, API integration, and production-ready interfaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=daneliagoga6@gmail.com"
              target="_blank"
              className="rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-900"
            >
              daneliagoga6@gmail.com
            </a>

            <a
              href="tel:+995595560635"
              className="rounded-2xl border border-slate-950/20 px-6 py-3 font-bold transition hover:bg-slate-950/10"
            >
              +995 595 56 06 35
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-900/80">
            <a
              href="https://github.com/GogaDanelia06"
              target="_blank"
              className="transition hover:text-slate-950"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/goga-danelia-91110a209"
              target="_blank"
              className="transition hover:text-slate-950"
            >
              LinkedIn
            </a>

            <span>Tbilisi, Georgia</span>
          </div>
        </div>
      </section>
    </main>
  );
}
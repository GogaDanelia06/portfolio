import Reveal from "@/components/shared/reveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "MongoDB",
      "MySQL",
      "Authentication",
      "REST API",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "UI / UX",
    skills: [
      "Dashboard Design",
      "Component Architecture",
      "Dark / Light Themes",
      "Mobile UX",
      "Clean Interfaces",
    ],
  },
];

export default function SkillsSection() {
  return (
    <Reveal>
      <section
        id="skills"
        className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[var(--color-muted)]">
            Tech Stack
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="theme-card rounded-[2rem] p-6"
            >
              <h3 className="mb-6 text-2xl font-black">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
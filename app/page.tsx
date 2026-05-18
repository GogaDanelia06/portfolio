import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import FloatingActions from "@/components/floating-actions";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import SkillsSection from "@/components/skills-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-slate-300">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <FloatingActions />
    </main>
  );
}
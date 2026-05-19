import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import FloatingActions from "@/components/floating-actions";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import SkillsSection from "@/components/skills-section";
import StatsSection from "@/components/stats-section";
import ProcessSection from "@/components/process-section";
import WorkStyleSection from "@/components/work-style-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <WorkStyleSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </main>
  );
}
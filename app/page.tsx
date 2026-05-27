import ContactSection from "@/components/contact/contact-section";
import Footer from "@/components/layout/footer";
import FloatingActions from "@/components/shared/floating-actions";
import MouseGradient from "@/components/shared/mouse-gradient";

import AboutSection from "@/components/home/about-section";
import CurrentStackSection from "@/components/home/current-stack-section";
import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";
import ProcessSection from "@/components/home/process-section";
import ServicesSection from "@/components/home/services-section";
import SkillsSection from "@/components/home/skills-section";
import StatsSection from "@/components/home/stats-section";
import WorkStyleSection from "@/components/home/work-style-section";
import ProjectsSection from "@/components/projects/projects-section";


export default function Home() {
  return (
    <main>
      <MouseGradient />
      <HeroSection />
      <CurrentStackSection />
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
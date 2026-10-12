import ContactSection from "@/components/contact/contact-section";
import Footer from "@/components/layout/footer";
import FloatingActions from "@/components/shared/floating-actions";
import MouseGradient from "@/components/shared/mouse-gradient";

import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";
import MarqueeSection from "@/components/home/marquee-section";
import ProcessSection from "@/components/home/process-section";
import ServicesSection from "@/components/home/services-section";
import SkillsSection from "@/components/home/skills-section";
import StatsSection from "@/components/home/stats-section";
import ShowreelSection from "@/components/work/showreel-section";
import WorkSection from "@/components/work/work-section";

export default function Home() {
  return (
    <main>
      <MouseGradient />
      <HeroSection />
      <MarqueeSection />
      <ShowreelSection />
      <WorkSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </main>
  );
}

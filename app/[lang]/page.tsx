import { notFound } from "next/navigation";

import ContactSection from "@/components/contact/contact-section";
import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import HeroSection from "@/components/home/hero-section";
import MarqueeSection from "@/components/home/marquee-section";
import ProcessSection from "@/components/home/process-section";
import ServicesSection from "@/components/home/services-section";
import SkillsSection from "@/components/home/skills-section";
import StatsSection from "@/components/home/stats-section";
import Footer from "@/components/layout/footer";
import FloatingActions from "@/components/shared/floating-actions";
import IntroOverlay from "@/components/shared/intro-overlay";
import MouseGradient from "@/components/shared/mouse-gradient";
import ShowreelSection from "@/components/work/showreel-section";
import WorkSection from "@/components/work/work-section";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <main>
      <IntroOverlay dict={dict.intro} />
      <MouseGradient />
      <HeroSection lang={lang} dict={dict.hero} nav={dict.nav} common={dict.common} />
      <MarqueeSection items={dict.marquee} />
      <ShowreelSection dict={dict.showreel} names={dict.work.items} />
      <WorkSection dict={dict.work} common={dict.common} />
      <StatsSection dict={dict.stats} />
      <ServicesSection dict={dict.services} />
      <ProcessSection dict={dict.process} />
      <AboutSection dict={dict.about} />
      <SkillsSection dict={dict.skills} />
      <ExperienceSection dict={dict.experience} />
      <ContactSection dict={dict.contact} />
      <Footer dict={dict.footer} />
      <FloatingActions dict={dict.common} />
    </main>
  );
}

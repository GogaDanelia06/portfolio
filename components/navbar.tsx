"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#projects");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;

      if (nearBottom) {
        setActiveSection("#contact");
        return;
      }

      let currentSection = "#projects";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (!section) return;

        if (window.scrollY >= section.offsetTop - 260) {
          currentSection = link.href;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-5 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-between rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur-2xl transition-all duration-300 ${
        scrolled
          ? "max-w-4xl px-4 py-2 shadow-2xl"
          : "max-w-5xl px-6 py-4 shadow-xl"
      }`}
    >
      <a
        href="#"
        onClick={() => setActiveSection("#projects")}
        className={`navbar-brand font-black tracking-tight transition-all duration-300 ${
          scrolled ? "text-sm md:text-base" : "text-base md:text-lg"
        }`}
      >
        Goga Danelia
      </a>

      <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 md:flex">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "nav-link hover:bg-cyan-400/10"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <ThemeToggle />
    </nav>
  );
}
"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
    setActive("");

    const handleScroll = () => {
      if (window.scrollY < 500) {
        setActive("");
        return;
      }

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isBottom) {
        setActive("#contact");
        return;
      }

      let current = "";

      for (const link of links) {
        const section = document.querySelector(link.href) as HTMLElement | null;

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 260 && rect.bottom >= 260) {
          current = link.href;
          break;
        }
      }

      setActive(current);
    };

    const timeout = setTimeout(() => {
      setActive("");
      handleScroll();
    }, 300);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const section = document.querySelector(href) as HTMLElement | null;
    if (!section) return;

    setActive(href);

    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[90%] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-[#0b1020]/80 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="font-bold text-white">Goga Danelia</div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleClick(event, link.href)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === link.href
                  ? "bg-cyan-400 text-slate-950"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

      <ThemeToggle />
      </div>
    </nav>
  );
}
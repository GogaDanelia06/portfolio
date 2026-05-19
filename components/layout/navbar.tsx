"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/shared/theme-toggle";
import AvailabilityBadge from "@/components/layout/availability-badge";

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
        const section = document.querySelector(
          link.href
        ) as HTMLElement | null;

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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

    const section = document.querySelector(
      href
    ) as HTMLElement | null;

    if (!section) return;

    setActive(href);

    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  };

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[94%] max-w-5xl -translate-x-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 backdrop-blur-xl md:top-4 md:px-4 md:py-3">
      <div className="flex items-center justify-between gap-2">
        <div className="hidden font-bold text-[var(--color-text)] sm:block">
          Goga Danelia
        </div>

        <div className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 sm:flex-none sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) =>
                handleClick(event, link.href)
              }
              className={`rounded-full px-3 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                active === link.href
                  ? "bg-cyan-400 text-slate-950"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <AvailabilityBadge />
        <ThemeToggle />
      </div>
    </nav>
  );
}
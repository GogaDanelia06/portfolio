"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import AvailabilityBadge from "@/components/layout/availability-badge";
import LanguageSwitch from "@/components/layout/language-switch";
import ThemeToggle from "@/components/shared/theme-toggle";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Props = {
  lang: Locale;
  dict: Dictionary["nav"];
  common: Dictionary["common"];
};

export default function Navbar({ lang, dict, common }: Props) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: dict.work, href: "#work" },
    { label: dict.services, href: "#services" },
    { label: dict.about, href: "#about" },
    { label: dict.contact, href: "#contact" },
  ];

  useEffect(() => {
    const hrefs = ["#work", "#services", "#about", "#contact"];

    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);

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

      for (const href of hrefs) {
        const section = document.querySelector(href) as HTMLElement | null;
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 260 && rect.bottom >= 260) {
          current = href;
          break;
        }
      }

      setActive(current);
    };

    const timeout = setTimeout(handleScroll, 300);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);

    const section = document.querySelector(href) as HTMLElement | null;
    if (!section) return;

    setActive(href);

    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 110,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[94%] max-w-5xl -translate-x-1/2 md:top-4">
      <div className="flex items-center justify-between gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 backdrop-blur-xl md:px-4 md:py-3">
        <a
          href={`/${lang}`}
          className="flex items-center gap-3 font-bold text-[var(--color-text)]"
        >
          <Image
            src="/logo.png"
            alt="GD"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-contain"
          />
          <span
            className={`hidden whitespace-nowrap sm:inline md:hidden ${
              // Georgian links are longer, so the name only fits on very wide screens.
              lang === "ka" ? "2xl:inline" : "xl:inline"
            }`}
          >
            Goga Danelia
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 md:flex lg:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleClick(event, link.href)}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition lg:px-5 ${
                active === link.href
                  ? "bg-[var(--color-primary)] text-slate-950"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <AvailabilityBadge label={common.available} />
          <LanguageSwitch lang={lang} label={common.language} />
          <ThemeToggle label={common.toggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-2 flex flex-col gap-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-2 shadow-2xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className={`rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                  active === link.href
                    ? "bg-[var(--color-primary)] text-slate-950"
                    : "text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

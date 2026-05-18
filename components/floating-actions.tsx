"use client";

import { ArrowUp, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=daneliagoga6@gmail.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:scale-110"
      >
        <Mail className="h-5 w-5" />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-slate-900 text-slate-300 shadow-lg transition hover:scale-110 hover:border-cyan-400"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
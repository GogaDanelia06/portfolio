"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !isLight;

    setIsLight(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-cyan-400"
      aria-label="Toggle theme"
    >
      {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
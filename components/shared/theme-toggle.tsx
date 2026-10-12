"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

// The theme lives on <html class="light">, set before paint by the layout's boot script.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const isLight = () => document.documentElement.classList.contains("light");

export default function ThemeToggle({ label }: { label: string }) {
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  const toggleTheme = () => {
    const next = !isLight();
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    listeners.forEach((listener) => listener());
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:border-[var(--color-primary)]"
    >
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}

import type { Dictionary } from "@/i18n/dictionaries/en";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>{dict.rights}</p>
        <p>{dict.builtWith}</p>
      </div>
    </footer>
  );
}

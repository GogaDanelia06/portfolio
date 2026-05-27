export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 Goga Danelia. All rights reserved.
        </p>

        <p>
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
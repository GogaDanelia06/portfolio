import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="theme-card mx-auto flex min-h-[76px] items-center justify-between rounded-3xl px-6 py-4">
      <a href="#" className="navbar-brand text-lg font-bold tracking-tight">
        Goga Danelia
      </a>

      <div className="flex items-center gap-6 text-sm font-medium">
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#experience" className="nav-link">
          Experience
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
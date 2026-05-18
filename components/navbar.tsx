export default function Navbar() {
  return (
    <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
      <a href="#" className="text-lg font-bold tracking-tight">
        Goga Danelia
      </a>

      <div className="hidden gap-6 text-sm text-slate-300 md:flex">
        <a href="#projects" className="hover:text-cyan-300">
          Projects
        </a>
        <a href="#experience" className="hover:text-cyan-300">
          Experience
        </a>
        <a href="#skills" className="hover:text-cyan-300">
          Skills
        </a>
        <a href="#contact" className="hover:text-cyan-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-[2rem] bg-cyan-400 p-8 text-slate-950 md:p-12">
        <p className="font-bold uppercase tracking-[0.2em]">
          Let’s work together
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">
          Need a modern React or Next.js developer for your project?
        </h2>

        <p className="mt-4 max-w-2xl text-lg">
          I can help with dashboards, responsive websites, frontend fixes,
          authentication UI, API integration, and production-ready interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=daneliagoga6@gmail.com"
            target="_blank"
            className="rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-900"
          >
            daneliagoga6@gmail.com
          </a>

          <a
            href="tel:+995595560635"
            className="rounded-2xl border border-slate-950/20 px-6 py-3 font-bold transition hover:bg-slate-950/10"
          >
            +995 595 56 06 35
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-900/80">
          <a
            href="https://github.com/GogaDanelia06"
            target="_blank"
            className="transition hover:text-slate-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/goga-danelia-91110a209"
            target="_blank"
            className="transition hover:text-slate-950"
          >
            LinkedIn
          </a>

          <span>Tbilisi, Georgia</span>
        </div>
      </div>
    </section>
  );
}
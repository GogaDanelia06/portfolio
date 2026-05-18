export default function ContactSection() {
  return (
<section
  id="contact"
  className="scroll-mt-32 mx-auto max-w-6xl px-6 pb-20"
>
      <div className="rounded-[2rem] bg-gradient-to-r from-cyan-400 to-cyan-300 p-8 text-slate-950 shadow-xl shadow-cyan-500/20 md:p-12">
        <p className="font-bold uppercase tracking-[0.2em] text-slate-700">
          Let’s work together
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">
          Need a modern React or Next.js developer for your project?
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          I can help with dashboards, responsive websites, frontend fixes,
          authentication UI, API integration, and production-ready interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=daneliagoga6@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
          >
            <span className="text-white">daneliagoga6@gmail.com</span>
          </a>

          <a
            href="tel:+995595560635"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-950/20 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-slate-950/10"
          >
            +995 595 56 06 35
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-900/80">
          <a
            href="https://github.com/GogaDanelia06"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/goga-danelia-91110a209"
            target="_blank"
            rel="noreferrer"
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
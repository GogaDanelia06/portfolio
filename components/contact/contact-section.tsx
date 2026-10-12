"use client";

import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState("");

  const copyText = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);

    setCopied(label);

    setTimeout(() => {
      setCopied("");
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 mx-auto max-w-7xl px-6 pt-10 pb-20"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.25)] md:p-12">
        <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            Booking projects for the coming months
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text)] md:text-7xl">
            Have a project in mind? Let’s make it <span className="text-gradient">extraordinary.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Websites, SaaS products, dashboards, and AI-powered tools — tell us
            what you&apos;re building and you&apos;ll get a reply within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=daneliagoga6@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Start a project
            </a>

            <a
              href="/Goga-Danelia-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-4 font-bold text-[var(--color-text)] transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              View CV
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ContactCard
              title="Email"
              value="daneliagoga6@gmail.com"
              button="Copy Email"
              copied={copied === "email"}
              onClick={() =>
                copyText("daneliagoga6@gmail.com", "email")
              }
            />

            <ContactCard
              title="Phone"
              value="+995 595 56 06 35"
              button="Copy Phone"
              copied={copied === "phone"}
              onClick={() =>
                copyText("+995595560635", "phone")
              }
            />

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Location
              </p>

              <p className="mt-3 text-lg font-black text-[var(--color-text)]">
                Tbilisi, Georgia
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/GogaDanelia06"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 font-bold text-[var(--color-text)] transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/goga-danelia-91110a209"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 font-bold text-[var(--color-text)] transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  title,
  value,
  button,
  copied,
  onClick,
}: {
  title: string;
  value: string;
  button: string;
  copied: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
        {title}
      </p>

      <p className="mt-3 break-all text-lg font-black text-[var(--color-text)]">
        {value}
      </p>

      <button
        onClick={onClick}
        className="mt-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-bold text-[var(--color-text)] transition hover:border-cyan-400/40"
      >
        {copied ? "Copied!" : button}
      </button>
    </div>
  );
}
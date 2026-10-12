"use client";

import { localeCookie, localeLabels, locales, type Locale } from "@/i18n/config";

type Props = {
  lang: Locale;
  label: string;
};

// Remember the choice so the root redirect sends returning visitors to it.
function remember(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitch({ lang, label }: Props) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex h-11 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
    >
      {locales.map((locale) => (
        <a
          key={locale}
          href={`/${locale}`}
          hrefLang={locale}
          lang={locale}
          onClick={() => remember(locale)}
          aria-current={locale === lang ? "true" : undefined}
          className={`flex h-full items-center rounded-full px-2.5 text-xs font-bold transition ${
            locale === lang
              ? "bg-[var(--color-text)] text-[var(--color-background)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
          }`}
        >
          {localeLabels[locale]}
        </a>
      ))}
    </div>
  );
}

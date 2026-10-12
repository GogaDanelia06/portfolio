export const locales = ["en", "ka"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookie = "NEXT_LOCALE";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ka: "ქარ",
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

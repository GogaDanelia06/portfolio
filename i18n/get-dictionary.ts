import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";
import { ka } from "@/i18n/dictionaries/ka";

const dictionaries: Record<Locale, Dictionary> = { en, ka };

export const getDictionary = (locale: Locale) => dictionaries[locale];

export type { Dictionary };

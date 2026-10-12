import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Noto_Sans_Georgian } from "next/font/google";
import { notFound } from "next/navigation";

import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const georgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-georgian",
});

const siteUrl = "https://portfolio-one-delta-v6nldbrif7.vercel.app";

// Runs before first paint so the saved theme and the "intro already seen"
// state apply without a flash.
const bootScript = `try{var d=document.documentElement;if(localStorage.getItem("theme")==="light")d.classList.add("light");if(sessionStorage.getItem("intro-seen")||matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("intro-seen")}catch(e){}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: [
      "Goga Danelia",
      "გოგა დანელია",
      "Web Development Georgia",
      "საიტის დამზადება",
      "ვებსაიტის შექმნა",
      "Next.js Developer",
      "React Developer",
      "Tbilisi",
    ],
    authors: [{ name: "Goga Danelia" }],
    creator: "Goga Danelia",
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", ka: "/ka", "x-default": "/en" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      siteName: "Goga Danelia",
      locale: lang === "ka" ? "ka_GE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${display.variable} ${sans.variable} ${georgian.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

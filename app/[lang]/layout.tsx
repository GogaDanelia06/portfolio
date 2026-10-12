import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
  "https://portfolio-one-delta-v6nldbrif7.vercel.app"
),

  title: "Goga Danelia | Websites & Digital Products",
  description:
    "Goga Danelia & team build immersive websites, SaaS products, and dashboards for brands like Sidekick, Monolith Group, and Montavia. Next.js, React, TypeScript, 3D, and motion.",

  keywords: [
    "Goga Danelia",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Developer",
    "Tbilisi Developer",
    "Tailwind CSS",
    "Web Development Georgia",
    "საიტის დამზადება",
  ],

  authors: [{ name: "Goga Danelia" }],
  creator: "Goga Danelia",

  openGraph: {
    title: "Goga Danelia | Full-Stack Developer",
    description:
      "Next.js, React, TypeScript, dashboards, authentication flows, and production-ready web applications.",
   url: "https://portfolio-one-delta-v6nldbrif7.vercel.app",
    siteName: "Goga Danelia Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Goga Danelia | Full-Stack Developer",
    description:
      "Full-Stack Developer focused on Next.js, React, TypeScript, dashboards, and production-ready interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
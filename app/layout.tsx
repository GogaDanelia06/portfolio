import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-goga-danelia.vercel.app"),

  title: "Goga Danelia | Full-Stack Developer",
  description:
    "Portfolio of Goga Danelia, a Full-Stack Developer focused on Next.js, React, TypeScript, dashboards, authentication flows, and production-ready web applications.",

  keywords: [
    "Goga Danelia",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Developer",
    "Tbilisi Developer",
    "Tailwind CSS",
  ],

  authors: [{ name: "Goga Danelia" }],
  creator: "Goga Danelia",

  openGraph: {
    title: "Goga Danelia | Full-Stack Developer",
    description:
      "Next.js, React, TypeScript, dashboards, authentication flows, and production-ready web applications.",
    url: "https://portfolio-goga-danelia.vercel.app",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
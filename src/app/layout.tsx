import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sofiene Ben Fekih | Full-Stack & Mobile Software Engineer",
  description:
    "Software Engineer holding a National Engineering Diploma in Computer Science. Specializing in Flutter, Next.js, React, Python, and Laravel.",
  keywords: [
    "Sofiene Ben Fekih",
    "Software Engineer",
    "Next.js Developer",
    "Flutter Developer",
    "Full-Stack Engineer Tunisia",
    "React",
    "Laravel",
    "Python",
  ],
  authors: [{ name: "Sofiene Ben Fekih" }],
  openGraph: {
    title: "Sofiene Ben Fekih | Software Engineer",
    description:
      "Full-Stack & Mobile Software Engineer specializing in Flutter, Next.js, React, Python, and Laravel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-sky-400/20 selection:text-sky-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-sky-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

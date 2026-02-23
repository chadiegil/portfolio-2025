import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chadie Gil S. Augis | Software Engineer",
  description:
    "Portfolio for Chadie Gil S. Augis — a software engineer shipping full-stack experiences, robust APIs, and thoughtful UX.",
  metadataBase: new URL("https://portfolio.example.com"),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Chadie Gil S. Augis | Software Engineer",
    description:
      "Full-stack software engineer crafting performant products across frontend and backend.",
    url: "https://portfolio.example.com",
    siteName: "Chadie Gil S. Augis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chadie Gil S. Augis | Software Engineer",
    description:
      "Showcasing full-stack projects, skills, and contact info for Chadie Gil S. Augis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

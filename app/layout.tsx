import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        <Script id="entityroot-bot-detection" strategy="afterInteractive">
          {`
            (function() {
              var ua = navigator.userAgent;
              var bots = [
                /GPTBot/i, /ChatGPT/i, /OpenAI/i,
                /ClaudeBot/i, /Claude-Web/i, /Anthropic/i,
                /Google-Extended/i, /Googlebot/i,
                /Bingbot/i, /BingPreview/i,
                /PerplexityBot/i, /YouBot/i,
                /CCBot/i, /FacebookBot/i,
                /Bytespider/i, /Applebot/i, /Amazonbot/i
              ];
              if (bots.some(function(p) { return p.test(ua); })) {
                fetch('https://www.entity-root.com/webhooks/cloudflare/bot-visit', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-Webhook-Secret': '4f2a3b2fbcb0eef2f61e46ec8d985757a70e9feb9c47a855b730dafc31bb82fa'
                  },
                  body: JSON.stringify({
                    user_agent: ua,
                    path: window.location.pathname,
                    timestamp: new Date().toISOString()
                  })
                }).catch(function() {});
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

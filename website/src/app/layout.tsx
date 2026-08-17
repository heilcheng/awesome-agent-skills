import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Skill Index - The Ultimate AI Agent Skills List & Tutorials",
  description: "Explore the most comprehensive list of AI agent skills, tools, and workflows. Master agentic AI with our curated skill list, tutorials, and quality standards for 2026.",
  keywords: ["agent skill list", "skill list", "skill tutorial", "agentic ai", "ai agent", "mcp skills", "ai coding assistants", "claude code", "github copilot skills"],
  authors: [{ name: "Hailey Cheng (Cheng Hei Lam)" }],
  openGraph: {
    title: "Agent Skill Index",
    description: "The definitive repository for AI agent skills and tutorials.",
    url: "https://agent-skill.co",
    siteName: "Agent Skill Index",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Skill Index",
    description: "The definitive repository for AI agent skills and tutorials.",
    creator: "@haileyhmt",
  },
  metadataBase: new URL("https://agent-skill.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24" suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
             __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}
      >
        <Providers>
          <Navbar />
          <LayoutShell>
            {children}
          </LayoutShell>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

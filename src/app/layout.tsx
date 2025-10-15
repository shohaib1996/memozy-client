import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar/Navbar";
import { FloatingDownloadButton } from "@/components/FloatingDownloadButton/FloatingDownloadButton";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
// import { Footer } from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit", // custom CSS variable name
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: "Memozy – Your AI Memory & Companion",
  description:
    "Talk, reflect, and stay organized with Memozy — your AI companion that remembers, understands, and grows with you. Chat naturally, manage your thoughts, and rediscover your best self.",
  keywords: [
    "AI Companion",
    "AI Memory app",
    "AI Chat app",
    "Memozy",
    "AI Friend",
    "AI Assistant",
    "Journal app",
    "AI Reflection",
    "AI Notes",
    "AI Therapy",
    "Personal AI",
    "AI Organizer",
    "Voice AI",
    "Image AI",
    "AI Roleplay",
    "Calendar Sync",
    "Meeting Scheduler",
    "Weekly Summary",
    "Mental Wellness AI",
    "Productivity AI",
    "Creative AI",
    "AI Life Coach",
    "Emotional Support AI",
    "Task Management AI",
    "AI Note Taking",
    "AI Journaling",
    "AI Self Improvement",
    "AI Personal Growth",
    "AI Mindfulness",
    "AI Habit Tracker",
    "AI Goal Setting",
    "AI Time Management",
    "AI Study Buddy",
    "AI Learning Companion",
  ],
  authors: [{ name: "Memozy Team" }],
  creator: "Memozy AI",
  openGraph: {
    title: "Memozy – Your AI Memory & Companion",
    description:
      "Memozy helps you talk, reflect, and stay organized — an AI companion that remembers and understands you.",
    url: "https://memozy.ai",
    siteName: "Memozy",
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Memozy – Your AI Memory & Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memozy – Your AI Memory & Companion",
    description:
      "Chat, reflect, and stay organized with your personal AI memory assistant.",
    images: [`${basePath}/og-image.png`],
    creator: "@memozyai",
  },
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
  manifest: `${basePath}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          {/* <Footer/> */}
          <FloatingDownloadButton />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

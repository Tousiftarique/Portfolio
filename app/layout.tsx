// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono ,Mulish } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Tousif Tarique | Software Developer",
  description:
    "Portfolio of Tousif Tarique, a Software developer specializing in React and Next.js.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Tousif Tarique", }],
  openGraph: {
    title: "Tousif Tarique | Software Developer",
    description:
      "Portfolio of Tousif Tarique, a Software developer specializing in React and Next.js.",
    siteName: "Tousif Tarique Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tousif Tarique Portfolio",
      },
    ],
 
  },
  twitter: {
    card: "summary_large_image",
    title: "Tousif Tarique | Software Developer",
    description: "Portfolio of Tousif Tarique, a Software developer specializing in Next.js, React, and Tailwind CSS.",
    images: ["/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${mulish.variable} antialiased relative`}
      >
        {/* 🌀 Background Splash Cursor Effect */}
        <SplashCursor />

        {/* 🌐 App Structure */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
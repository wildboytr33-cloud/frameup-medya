import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frameupmedya.com"),

  title: {
    default: "FrameUp Medya | Antalya Video Prodüksiyon & Drone Çekimi",
    template: "%s | FrameUp Medya",
  },

  description:
    "Antalya’da video prodüksiyon, drone çekimi, reklam filmi ve tanıtım videoları üretiyoruz. İşletmenizi büyüten profesyonel video çözümleri.",

  verification: {
    google: "eLMQYPkz5tzquQnQ-p-cLD2crLpjmJVDelJo-fEUfQg",
  },

  openGraph: {
    title: "FrameUp Medya | Antalya Video Prodüksiyon & Drone Çekimi",
    description:
      "Antalya’da profesyonel video prodüksiyon, drone çekimi, reklam filmi ve tanıtım videosu çözümleri.",
    url: "https://frameupmedya.com",
    siteName: "FrameUp Medya",
    locale: "tr_TR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://frameupmedya.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
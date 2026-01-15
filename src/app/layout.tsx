import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { UrgentWarningModal } from "@/components/urgent-warning-modal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LinkedIn Account Restricted? Professional LinkedIn Account Recovery Service",
  description:
    "Is your LinkedIn account restricted? Get professional LinkedIn account recovery help. We fix restricted LinkedIn accounts fast. Why is my LinkedIn account restricted? We have the answers and solutions. Starting at $50.",
  keywords: [
    "linkedin account restricted",
    "linkedin account recovery",
    "linkedin restricted account",
    "why is my linkedin account restricted",
    "linkedin account suspended",
    "linkedin account banned",
    "linkedin appeal",
    "linkedin account help",
    "fix linkedin restriction",
    "linkedin account locked",
  ],
  openGraph: {
    title: "LinkedIn Account Restricted? Get Professional Recovery Help",
    description:
      "Is your LinkedIn account restricted? Professional LinkedIn account recovery service. We help fix restricted LinkedIn accounts fast.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans`}
      >
        <UrgentWarningModal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

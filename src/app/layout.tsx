import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
  title: "LinkedIn Account Restricted? Get Professional Recovery Help | $50",
  description:
    "Professional LinkedIn account recovery service. Get your restricted LinkedIn account back with expert help. Starting at just $50. Fast, reliable, and confidential.",
  keywords: [
    "linkedin account restricted",
    "linkedin recovery",
    "linkedin appeal",
    "linkedin suspended",
    "linkedin account help",
  ],
  openGraph: {
    title: "LinkedIn Account Restricted? Get Professional Recovery Help",
    description:
      "Professional LinkedIn account recovery service. Get your restricted LinkedIn account back with expert help.",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

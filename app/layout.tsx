import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

// self-host Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Cruz Spirits",
  description: "Created with Next.js and Tailwind CSS",
  authors: [
    {
      name: "Cruz Spirits",
      url: ""
    },
    {
      name: "Vishwaa",
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

// Load Funnel Display font
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel-display",
});

export const metadata: Metadata = {
  title: "ULTEX - Your E-Logistics Gateway",
  description: "L'Expertise Logistique qui Traverse les Frontières",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={funnelDisplay.variable}>{children}</body>
    </html>
  );
}

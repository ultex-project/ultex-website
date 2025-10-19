// src/app/layout.tsx
import type { Metadata } from "next";
import { headers } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo, Funnel_Display, Noto_Sans_Arabic } from "next/font/google";

import {
  AppLocale,
  defaultLocale,
  getLocaleDirection,
  locales,
  rtlLocales,
} from "@/i18n";
import { SITE_ORIGIN } from "@/config/site";

import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel-display",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const headerList = await headers();
  const headerLocale = headerList.get("x-next-intl-locale");
  const locale = locales.includes(headerLocale as AppLocale)
    ? (headerLocale as AppLocale)
    : defaultLocale;
  const messages = await getMessages();
  const dir = getLocaleDirection(locale);
  const isRtl = rtlLocales.includes(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${funnelDisplay.variable} ${isRtl ? `${cairo.variable} ${cairo.className} ${notoArabic.variable} ${notoArabic.className} rtl` : ""}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

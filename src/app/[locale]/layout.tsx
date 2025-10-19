import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { AppLocale, locales } from "@/i18n";
import { buildSiteMetadata } from "@/lib/seo";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type GenerateMetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as AppLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return buildSiteMetadata({ locale });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as AppLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  return <>{children}</>;
}

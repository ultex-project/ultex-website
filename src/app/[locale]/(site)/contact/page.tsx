import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n";

import ContactPageClient from "./ContactPageClient";

type ContactPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, route: "contact" });
}

export default function ContactPage() {
  return <ContactPageClient />;
}

import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n";

import ResourcesPageClient from "./ResourcesPageClient";

type ResourcesPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, route: "resources" });
}

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}

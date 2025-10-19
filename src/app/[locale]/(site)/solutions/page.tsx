import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n";

import SolutionsPageClient from "./SolutionsPageClient";

type SolutionsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, route: "solutions" });
}

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}

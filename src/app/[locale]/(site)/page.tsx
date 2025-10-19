// src/app/page.tsx

import type { Metadata } from "next";

import Footer from "@/app/(components)/Footer";
import HeroSection from "@/app/(components)/HeroSection";
import PasserelleSection from "@/app/(components)/PasserelleSection";
import SectorsSection from "@/app/(components)/SectorsSection";
import ServiceFlowSection from "@/app/(components)/ServiceFlowSection";
import SolutionsChainSection from "@/app/(components)/SolutionsChainSection";
import ValuePropositions from "@/app/(components)/ValuePropositions";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n";

type HomePageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, route: "home" });
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropositions />
      <PasserelleSection />
      <SolutionsChainSection />
      <ServiceFlowSection />
      <SectorsSection />
      <Footer />
    </>
  );
}

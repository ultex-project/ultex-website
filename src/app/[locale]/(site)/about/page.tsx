import type { Metadata } from "next";

import Footer from "@/app/(components)/Footer";
import HeroPage from "@/app/(components)/HeroPage";
import PasserelleSection from "@/app/(components)/PasserelleSection";
import ServiceFlowSection from "@/app/(components)/ServiceFlowSection";
import SolutionsChainSection from "@/app/(components)/SolutionsChainSection";
import AboutValuePropositions from "@/app/(components)/AboutValuePropositions";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n";

type AboutPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, route: "about" });
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/solutions-hero.png"
        eyebrow="À Propos"
        title="ULTex"
      />
      <AboutValuePropositions />
      <PasserelleSection />
      <ServiceFlowSection />
      <SolutionsChainSection />

      <Footer />
    </main>
  );
}


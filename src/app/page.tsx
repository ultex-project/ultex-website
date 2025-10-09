// src/app/page.tsx

import HeroSection from "@/app/(components)/HeroSection";
import Footer from "@/app/(components)/Footer";
import ValuePropositions from "@/app/(components)/ValuePropositions";
import PasserelleSection from "@/app/(components)/PasserelleSection";
import SolutionsChainSection from "@/app/(components)/SolutionsChainSection";
import ServiceFlowSection from "@/app/(components)/ServiceFlowSection";
import SectorsSection from "@/app/(components)/SectorsSection";

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

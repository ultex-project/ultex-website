// src/app/events/page.tsx
import EventsSection from "@/app/(components)/EventsSection";
import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import Image from "next/image";
import ValuePropositions from "@/app/(components)/ValuePropositions";
import PasserelleSection from "@/app/(components)/PasserelleSection";
import ServiceFlowSection from "@/app/(components)/ServiceFlowSection";
import SolutionsChainSection from "@/app/(components)/SolutionsChainSection";
import HeroPage from "@/app/(components)/HeroPage";

export const metadata = {
  title: "À Propos | ULTex",
  description:
    "Participations ULTex aux salons, forums et rencontres logistiques.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/solutions-hero.jpg"
        eyebrow="À Propos"
        title="ULTex"
      />
      <ValuePropositions />
      <PasserelleSection />
      <ServiceFlowSection />
      <SolutionsChainSection />

      <Footer />
    </main>
  );
}

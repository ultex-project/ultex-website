// src/app/events/page.tsx
import EventsSection from "@/app/(components)/EventsSection";
import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import Image from "next/image";
import HeroPage from "@/app/(components)/HeroPage";

export const metadata = {
  title: "Événements | ULTex",
  description:
    "Participations ULTex aux salons, forums et rencontres logistiques.",
};

export default function EventsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/solutions-hero.jpg"
        eyebrow="Événements"
        title="ULTex"
      />
      <EventsSection loading count={16} />
      <Footer />
    </main>
  );
}

// src/app/events/page.tsx
import type { Metadata } from "next";

import EventsSection from "@/app/(components)/EventsSection";
import Footer from "@/app/(components)/Footer";
import HeroPage from "@/app/(components)/HeroPage";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n";

type EventsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: EventsPageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, route: "events" });
}

export default function EventsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/event-page.png"
        eyebrow="Événements"
        title="ULTex"
      />
      <EventsSection loading count={16} />
      <Footer />
    </main>
  );
}

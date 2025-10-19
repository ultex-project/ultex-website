"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef } from "react";

import MarketPresenceSection from "@/app/(components)/sectors-parts/MarketPresenceSection";
import SectorsSplitSection from "@/app/(components)/SectorsSplitSection";
import StatsBand from "@/app/(components)/StatsBand";
import ResourcesStrip, { Resource } from "@/app/(components)/ResourcesStrip";

const sectorConfig = [
  { key: "agro", imgSrc: "/images/agro.svg" },
  { key: "textile", imgSrc: "/images/textile.svg" },
  { key: "electronics", imgSrc: "/images/electro.svg" },
  { key: "automotive", imgSrc: "/images/auto.svg" },
  { key: "tech", imgSrc: "/images/tech.svg" },
  { key: "cosmetics", imgSrc: "/images/cosmetic.svg" },
] as const;

const resourcesConfig = [
  {
    key: "worldCup",
    image: "/images/world-cup.svg",
    href: "/resources/coupe-du-monde-2030-impact",
  },
  {
    key: "greenFuel",
    image: "/images/ship-larg.svg",
    href: "/resources/transition-carburants-verts",
  },
  {
    key: "customs",
    image: "/images/douane.svg",
    href: "/resources/reglementations-douanieres-2024",
  },
] as const;

const testimonialsConfig = [
  { key: "ismail", image: "/images/testimonials/ismail.svg" },
  { key: "doha", image: "/images/testimonials/ismail.svg" },
  { key: "youssef", image: "/images/testimonials/ismail.svg" },
] as const;

const statsConfig = [
  { value: "236", key: "clients" },
  { value: "16", key: "partners" },
  { value: "316", key: "operations" },
  { value: "11", key: "cancelled" },
] as const;

export default function SectorsSection() {
  const containerRef = useRef(null);
  const tSections = useTranslations("sections.sectors");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const sectors = sectorConfig.map((sector) => ({
    title: tSections(`list.${sector.key}`),
    imgSrc: sector.imgSrc,
  }));
  const resources: Resource[] = resourcesConfig.map((item) => ({
    title: tSections(`resourcesList.${item.key}.title`),
    excerpt: tSections(`resourcesList.${item.key}.excerpt`),
    image: item.image,
    href: item.href,
  }));

  function StarIcon({ className = "w-3 h-3" }) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }

  type Testimonial = { name: string; text: string; image: string };
  const testimonials: Testimonial[] = testimonialsConfig.map((item) => ({
    name: tSections(`testimonialsList.${item.key}.name`),
    text: tSections(`testimonialsList.${item.key}.quote`),
    image: item.image,
  }));

  const stats = statsConfig.map((stat) => ({
    value: stat.value,
    labelTop: tSections(`stats.${stat.key}`),
  }));

  return (
    <section
      className={`py-20 bg-white overflow-hidden relative ${
        isRtl ? "text-right" : ""
      }`}
      ref={containerRef}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#11131A] z-0"
        style={{ height: "200px" }}
      />
      <div className="container mx-auto px-6 xl:px-24">
        {/* Header */}
        <div className={`text-center max-w-3xl ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            {tSections("heading.line1")}
            <br />
            {tSections("heading.line2")}
          </h2>
          <p className="mt-4 text-gray-600">
            {tSections("description")}
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT: rail + sticky ship (même logique que sticky top-24 de ta section solutions) */}
          <div className={`relative hidden lg:block w-[110px] self-stretch ${isRtl ? "order-2" : ""}`}>
            {/* tube gris avec bords doux */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-25   from-gray-80 bg-white to-gray-80 border border-gray-200 shadow-inner" />

            {/* le bateau qui “descend puis colle” sous la navbar */}
            <div className="sticky top-[var(--navbar)] pt-6 flex justify-center">
              <Image
                src="/images/ship.svg"
                alt="Cargo Ship"
                width={92}
                height={620}
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>

          {/* RIGHT: cards + text */}
          <div className={`flex-1 items-start ${isRtl ? "lg:text-right" : ""}`}>
            <SectorsSplitSection
              sectors={sectors}
              bgImage="/images/sectors-bg.svg"
              minHeight={600}
              bottomSpace={120}
              hoverZoom
              hoverScale={1.12}
              hoverDurationMs={800}
              gradientBottom
              glowTopRight
              title={tSections("split.title")}
              titleClassName={`text-4xl font-bold text-blue-900 mb-4 ${
                isRtl ? "text-right" : ""
              }`}
              rightImage={{
                src: "/images/import-export.svg",
                alt: "Import Export",
                width: 500,
                height: 300,
                className: `rounded-lg py-10 ${isRtl ? "ml-auto" : ""}`,
              }}
              quoteText={tSections("split.quote")}
              reverseOnLg={isRtl}
            />
            {/* bloc suivant (titre témoignages) – gardé comme chez toi */}
            <div className="max-w-3xl mt-25 mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                {tSections("testimonials.heading.line1")}
                <br />
                {tSections("testimonials.heading.line2")}
              </h2>
              <p className="mt-4 text-gray-600">
                {tSections("testimonials.description")}
              </p>
            </div>
            <div></div>
            <div className=" mx-auto ">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-funnel-display">
                {tSections("testimonials.title")}
              </h3>

              {/* Testimonials row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <Image
                      width={500}
                      height={100}
                      src={t.image}
                      alt={t.name}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Stats band */}
              <StatsBand
                stats={stats}
                defaultCardBg="/images/stats-bg.svg"
                // + proches
                tightGaps
                // cartes plus petites
                cardSize={100}
                cardSizeMd={120}
                // expand carte + groupe au hover
                cardHoverScale={1.08}
                groupHoverScale={1.02}
                // bande de fond (facultatif)
                bandClassName={`mt-8 rounded-2xl p-6 md:p-8 bg-[#EFF3F6] border border-gray-200/70 relative overflow-hidden ${
                  isRtl ? "text-right" : ""
                }`}
                bandStyle={{
                  backgroundImage:
                    "radial-gradient(50% 80% at 10% 50%, rgba(99,102,241,.18), transparent 60%), radial-gradient(40% 60% at 90% 20%, rgba(59,130,246,.12), transparent 55%)",
                }}
              />
              <MarketPresenceSection />
              <ResourcesStrip className={"mt-20"} items={resources} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

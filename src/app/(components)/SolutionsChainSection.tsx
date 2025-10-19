// src/components/SolutionsChainSection.tsx
"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

const cardConfig = [
  {
    key: "sourcing",
    image: "/images/sourcing.png",
    icon: "/icons/sourcing-icon.png",
    video: "/videos/sourcing.mp4",
  },
  {
    key: "quality",
    image: "/images/quality.png",
    icon: "/icons/quality-icon.png",
  },
  {
    key: "transport",
    image: "/images/transport.png",
    icon: "/icons/transport-icon.png",
  },
  {
    key: "storage",
    image: "/images/storage.png",
    icon: "/icons/storage-icon.png",
  },
  {
    key: "customs",
    image: "/images/customs.png",
    icon: "/icons/customs-icon.png",
  },
  {
    key: "tracking",
    image: "/images/tracking.png",
    icon: "/icons/tracking-icon.png",
  },
] as const;

export default function SolutionsChainSection() {
  const containerRef = useRef(null);
  const tSections = useTranslations("sections.solutionsChain");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const cards = cardConfig.map((card, index) => ({
    id: index + 1,
    title: tSections(`cards.${card.key}.title`),
    description: tSections(`cards.${card.key}.description`),
    image: card.image,
    icon: card.icon,
    video: "video" in card ? card.video : undefined,
  }));

  return (
    <section className={`py-20 bg-[#11131A] text-white ${isRtl ? "text-right" : ""}`} ref={containerRef}>
      <div className="container mx-auto max-w-6xl px-6 xl:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-funnel-display">
          {tSections("title")}
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          {tSections("description")}
        </p>

        {/* Left cards + right sticky (right fixed width to avoid giant cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_500px] gap-3">
          {/* Cards – smaller, centered, portrait */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center ${
              isRtl ? "sm:text-right" : ""
            }`}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative w-[240px] sm:w-[260px] md:w-[280px]
                       overflow-hidden rounded-xl ring-1 ring-white/10
                       bg-[#0B0F17] hover:ring-white/20 hover:shadow-xl shadow-[-9px_11px_22px_rgba(1,89,163,0.30)] hover:shadow-cyan-500/10
                       transition-all duration-300 ${isRtl ? "text-right" : ""}`}
              >
                <div className="relative w-full aspect-[3/4]">
                  {card.video ? (
                    <video
                      src={card.video}
                      poster={card.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-base md:text-lg font-bold font-funnel-display">
                      {card.title}
                    </h3>
                    <p className="mt-1  md:text-sm text-white/80 leading-snug">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full
                              bg-cyan-400/0 blur-3xl transition-opacity duration-300
                              group-hover:bg-cyan-400/15"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right sticky */}
          {/* Colonne droite sticky (tu gardes ton fond SVG) */}
          <div className={`lg:col-span-1 ${isRtl ? "lg:order-first" : ""}`}>
            {/*<img src={"/images/solutions-electro.svg"}/>*/}
            <div className="relative sticky top-24 p-4 overflow-hidden">
              <img
                src="/images/solutions-rc-cropped.png"
                alt="background pattern"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

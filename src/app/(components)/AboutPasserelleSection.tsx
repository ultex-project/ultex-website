// src/components/AboutPasserelleSection.tsx
"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import QuoteCard from "@/app/(components)/QuoteCard";
import InfoButton from "@/app/(components)/InfoButton";
import DeleteWithMovingCursor from "@/app/(components)/DeleteBackwardButton";

export default function AboutPasserelleSection() {
  const tPasserelle = useTranslations("sections.passerelle");
  const tAboutPasserelle = useTranslations("sections.aboutPasserelle");
  const tSections = useTranslations("sections.passerelle");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className={`py-20 bg-white ${isRtl ? "text-right" : ""}`}>
      <div className="container mx-auto px-6 xl:px-24">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 font-funnel-display ${
            isRtl ? "lg:text-right" : "text-center"
          }`}
        >
          {tAboutPasserelle("title")}
        </h2>

        {/* Subheading */}
        <p
          className={`text-gray-600 max-w-4xl mx-auto mb-12 ${
            isRtl ? "lg:text-right" : "text-center"
          }`}
        >
          {tAboutPasserelle("subtitle")}
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Graphic */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/passerelle-graphic.png"
              alt="Logistics network with ship, plane, and truck"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />

            {/* Overlay Buttons */}
            <div
              className={`absolute top-6 space-y-3 ${
                isRtl ? "right-6" : "left-6"
              }`}
            >
              <button className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
                {tPasserelle("overlayButtons.solutions")}
              </button>
              <button className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
                {tPasserelle("overlayButtons.elogistics")}
              </button>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className={`space-y-6 ${isRtl ? "lg:text-right" : ""}`}>
            <h3 className="text-3xl font-bold font-funnel-display">
              {tAboutPasserelle("rightTitle")}
            </h3>

            <QuoteCard text={tAboutPasserelle("quote")} className="text-sm"/>
                <DeleteWithMovingCursor
                    text={tSections("marquee")}
                    mode={isRtl ? "backspace" : "delete"}
                    stepMs={90}
                    loop
                />
          </div>
        </div>
      </div>
    </section>
  );
}

// src/app/(components)/ResourcesStrip.tsx
"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

import InfoButton from "@/app/(components)/InfoButton";

export type Resource = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

type Props = {
  items: Resource[]; // expect 3
  worldMapSrc?: string; // left SVG
  cardWidth?: number; // px – makes cards smaller (default 280)
  reserveLeftPx?: number; // px – space for the map on lg+ (default 320)
  className?: string;
};

export default function ResourcesStrip({
  items,
  worldMapSrc = "/images/footer-bg.svg",
  cardWidth = 280,
  reserveLeftPx = 150,
  className = "",
}: Props) {
  const tSections = useTranslations("sections.cta");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const paddingStyle = isRtl
    ? { paddingRight: reserveLeftPx }
    : { paddingLeft: reserveLeftPx };
  return (
    <section className={`relative overflow-visible ${className}`}>
      {/* Left world map */}
      <div
        className={`absolute top-0 bottom-0 hidden lg:flex items-center z-[1] pointer-events-none ${
          isRtl ? "right-0" : "left-0"
        }`}
      >
        <img
          src={worldMapSrc}
          alt="World map"
          className={`max-h-[520px] w-auto opacity-95 ${
            isRtl ? "-mr-2" : "-ml-2"
          }`}
          style={isRtl ? { transform: "scaleX(-1)" } : undefined}
        />
      </div>

      {/* Cards grid (reserve space for the map on lg+) */}
      <div
        className="container mx-auto px-6 lg:px-12 relative z-10"
        style={paddingStyle}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          {items.slice(0, 3).map((r, i) => (
            <motion.article
              key={r.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[18px] overflow-hidden bg-white border border-[#C7D3E1] shadow-[0_20px_40px_-24px_rgba(2,6,23,0.25)] flex flex-col"
              style={{ width: cardWidth }}
            >
              {/* Smaller/taller media but overall compact card */}
              <div className="relative h-44 md:h-56">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 400px) 53vw, 100vw"
                  priority={i === 0}
                />
                {/* dotted overlay on the left */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-2/5 opacity-80
                                [mask-image:linear-gradient(to_right,black,transparent)]
                                [background:radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.9)_1.2px,transparent_1.6px)]
                                [background-size:10px_10px]"
                />
              </div>

              <div className="px-4 pt-5 pb-5 flex-1 flex flex-col">
                <h3 className="text-center text-[16px] md:text-[17px] font-bold text-gray-900 leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-center text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {r.excerpt}
                </p>

                <div className="mt-auto pt-4 flex justify-center">
                  <InfoButton href={r.href} text={tSections("moreInfo")} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

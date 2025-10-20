// src/components/HeroSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import Header from "@/app/(components)/Header";
import HoverArrowText from "@/app/(components)/HoverArrowText";
import InfoButton from "@/app/(components)/InfoButton";
import Link from "next/link";

export default function HeroSection() {
  const tHero = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const horizontalInitial = isRtl ? 50 : -50;

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex flex-col">
      {/* === Video Background === */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        {/* Vidéo masquée si l'utilisateur préfère moins d’animations */}
        <video
          className="absolute inset-0 w-full h-full object-[50%_62%] md:object-[70%_80%] object-cover "
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
        >
          {/* Optionnel : WEBM d’abord si dispo */}
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero-better.mp4" type="video/mp4" />
        </video>

        {/* Fallback image si motion-reduce activé (ou si la vidéo ne charge pas) */}
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          className="object-center hidden motion-reduce:block"
          priority
        />
      </div>

      {/* Header au-dessus de la vidéo */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Main content container */}
      <div
        className={`container mx-auto px-6 xl:px-24 py-16 relative z-10 flex-1 flex flex-col items-center lg:items-stretch gap-12 ${
          isRtl ? "lg:flex-row-reverse text-right" : "lg:flex-row"
        }`}
      >
        {/* Left Text Content */}
        <div className={`lg:w-1/2 space-y-6 lg:pr-8 ${isRtl ? "lg:pl-8 lg:pr-0" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-4 ${isRtl ? "rtl:text-right" : ""}`}
          >
            <h1 className="text-4xl md:text-5xl leading-tight font-funnel-display">
              {tHero.rich("title", {
                highlight: (chunk) => (
                  <span className="text-yellow-400 font-bold">{chunk}</span>
                ),
                accent: (chunk) => (
                  <span className="text-blue-400">{chunk}</span>
                ),
              })}
            </h1>
            <p className="text-lg text-white max-w-md font-funnel-display">
              {tHero("subtitle")
                .split("\\n")
                .map((line, idx) => (
                  <span key={line}>
                    {idx > 0 && <br />}
                    {line}
                  </span>
                ))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: horizontalInitial }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`space-y-4 ${isRtl ? "text-right" : ""}`}
          >
            <h3 className="text-sm uppercase tracking-wider text-white font-funnel-display">
              <HoverArrowText text={tHero("ctaHeading")} />
            </h3>
            <Link
              href="/contact"
              className={`inline-block ${
                isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"
              } from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 font-funnel-display`}
            >
              {tHero("ctaLabel")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom trapezoid tab */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30">
        <div
          className="
            mx-auto
            w-[min(35%,1100px)]
            h-8
            bg-white
            rounded-t-[50px]
            [clip-path:polygon(2%_100%,8%_18%,92%_18%,98%_100%)]
          "
        />
      </div>
    </section>
  );
}

// src/app/(components)/HeroAbout.tsx
"use client";

import Image from "next/image";
import Header from "@/app/(components)/Header";
import { PropsWithChildren } from "react";

type HeroAboutProps = PropsWithChildren<{
  bgSrc?: string;
  eyebrow?: string; // petit surtitre
  title?: string; // titre principal
  subtitle?: string; // sous-titre optionnel
}>;

export default function HeroPage({
  bgSrc = "/images/solutions-hero.jpg",
  eyebrow = "À Propos",
  title = "ULTex",
  children,
}: HeroAboutProps) {
  return (
    <section className="relative bg-[#050A12] text-white overflow-hidden">
      {/* Header au-dessus du backdrop */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Backdrop (image + dégradé) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgSrc}
          alt="Bannière ULTex"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A30]/80 via-[#08111D]/70 to-[#050A12]" />
      </div>

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-6 xl:px-24 py-16">
        <div className="max-w-6xl">
          <div className="">
            <span className="text-lg">{eyebrow}</span>
            <span className="block text-3xl text-[#0159A3] font-bold md:text-4xl ">
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* Onglet bas trapézoïdal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 bottom-[-1px] z-30 flex justify-center"
      >
        <div
          className="
            h-8 sm:h-10 md:h-12
            w-[min(72%,520px)] sm:w-[min(60%,720px)] md:w-[min(45%,960px)] lg:w-[min(35%,1100px)]
            bg-white rounded-t-[50px] shadow-lg
            [clip-path:polygon(2%_100%,8%_18%,92%_18%,98%_100%)]
          "
        />
      </div>
    </section>
  );
}

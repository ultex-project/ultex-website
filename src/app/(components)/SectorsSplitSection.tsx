// src/components/SectorsSplitSection.tsx
"use client";

import Image from "next/image"; // ← ajuste le chemin si besoin
import QuoteCard from "@/app/(components)/QuoteCard"; // ← ajuste le chemin si besoin
import React from "react";
import SectorGridPanel from "@/app/(components)/SectorGridPanel";

type Sector = { title: string; imgSrc: string };

type RightImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

type Props = {
  /** LEFT: sectors grid */
  sectors: Sector[];
  bgImage: string;
  minHeight?: number;
  bottomSpace?: number;
  gradientBottom?: boolean;
  glowTopRight?: boolean;
  hoverZoom?: boolean;
  hoverScale?: number;
  hoverDurationMs?: number;
  gridClassName?: string;

  /** RIGHT: content */
  title: string;
  titleClassName?: string;
  rightImage?: RightImage;
  quoteText?: string;
  subHeading?: string;
  subHeadingClassName?: string;

  /** Layout */
  className?: string; // wrapper extra classes
  reverseOnLg?: boolean; // place text at left & grid at right on lg+
};

export default function SectorsSplitSection({
  // LEFT defaults
  sectors,
  bgImage,
  minHeight = 600,
  bottomSpace = 120,
  gradientBottom = true,
  glowTopRight = true,
  hoverZoom = true,
  hoverScale = 1.12,
  hoverDurationMs = 800,
  gridClassName = "grid grid-cols-2 sm:grid-cols-3 gap-6",

  // RIGHT defaults
  title,
  titleClassName = "text-4xl font-bold text-blue-900 mb-4",
  rightImage,
  quoteText,
  subHeading = "Parlons de Votre Secteur",
  subHeadingClassName = "text-3xl font-bold mt-7",

  // Layout
  className = "",
  reverseOnLg = false,
}: Props) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 ${className}`}>
      {/* LEFT column (grid panel) */}
      <div className={`${reverseOnLg ? "lg:order-2" : "lg:order-1"} order-2`}>
        <SectorGridPanel
          sectors={sectors}
          bgImage={bgImage}
          minHeight={minHeight}
          bottomSpace={bottomSpace}
          gradientBottom={gradientBottom}
          glowTopRight={glowTopRight}
          hoverZoom={hoverZoom}
          hoverScale={hoverScale}
          hoverDurationMs={hoverDurationMs}
          gridClassName={gridClassName}
        />
      </div>

      {/* RIGHT column (text & image) */}
      <div className={`${reverseOnLg ? "lg:order-1" : "lg:order-2"} order-1`}>
        <h3 className={titleClassName}>{title}</h3>

        {rightImage && (
          <Image
            src={rightImage.src}
            alt={rightImage.alt ?? "Illustration"}
            width={rightImage.width ?? 500}
            height={rightImage.height ?? 300}
            className={`rounded-lg py-10 ${rightImage.className ?? ""}`}
            priority
          />
        )}

        {quoteText && <QuoteCard text={quoteText} />}

        {subHeading && <h4 className={subHeadingClassName}>{subHeading}</h4>}
      </div>
    </div>
  );
}

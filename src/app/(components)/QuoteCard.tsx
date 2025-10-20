// src/app/(components)/QuoteCard.tsx
"use client";

import { useLocale } from "next-intl";

type QuoteCardProps = {
  text: string;
  className?: string;
};

export default function QuoteCard({ text, className }: QuoteCardProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const startPositionClass = isRtl ? "right-0" : "left-0";
  const endPositionClass = isRtl ? "left-0" : "right-0";
  const startRotationClass = isRtl ? "rotate-180" : "";
  const endRotationClass = isRtl ? "" : "rotate-180";

  return (
    <p
      className={`relative bg-[#FCEBAD] text-justify text-[#303236] px-6 py-8 ${
        isRtl ? "text-right" : ""
      } ${className ?? ""}`}
    >
      <img
        src="/images/cursor.svg"
        alt=""
        className={`pointer-events-none absolute h-10 ${startRotationClass} ${startPositionClass} top-0`}
        draggable={false}
      />
      {text}
      <img
        src="/images/cursor.svg"
        alt=""
        className={`pointer-events-none absolute h-10 ${endRotationClass} ${endPositionClass} bottom-0`}
        draggable={false}
      />
    </p>
  );
}

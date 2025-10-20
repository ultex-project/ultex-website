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

  return (
    <p
      className={`bg-[#FCEBAD] text-justify  text-[#303236] ${
        isRtl ? "text-right" : ""
      } ${className ?? ""}`}
      style={{ padding: "0 .15em" }}
    >
      {isRtl ? (
        <>
          <img
            src="/images/cursor.svg"
            alt=""
            className="inline-block rotate-180 h-10 relative"
            style={{ top: "-9px", marginInlineStart: "0px" }}
          />
          {text}
          <img
            src="/images/cursor.svg"
            alt=""
            className="inline-block h-10 relative"
            style={{ top: "9px" }}
          />
        </>
      ) : (
        <>
          <img
            src="/images/cursor.svg"
            alt=""
            className="inline-block h-10 relative"
            style={{ top: "-9px", marginInlineEnd: "-7px" }}
          />
          {text}
          <img
            src="/images/cursor.svg"
            alt=""
            className="inline-block rotate-180 h-10 relative"
            style={{ top: "9px" }}
          />
        </>
      )}
    </p>
  );
}

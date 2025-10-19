"use client";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function InfoButton({ text }: { text: string }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <button
      className={`group relative overflow-hidden flex items-center justify-center gap-2
                 border border-[#0159A3] text-[#0159A3] font-medium px-6 py-2 rounded-md
                 transition-all duration-500 ease-in-out ${isRtl ? "flex-row-reverse" : ""}`}
    >
      {/* --- Expanding Arrow Background --- */}
      <span
        className={`absolute top-0 h-full bg-[#0159A3] clip-path-arrow
                   transition-all duration-500 ease-in-out
                   group-hover:w-full ${isRtl ? "right-0" : "left-0"}`}
      />

      {/* --- Arrow Icon --- */}
      <Image
        src="/icons/arrow.svg"
        alt="arrow"
        width={18}
        height={18}
        className={`absolute z-10 transition-all duration-500 ease-in-out
                   group-hover:scale-[7] group-hover:opacity-0 ${
                     isRtl ? "right-4 rotate-180" : "left-4"
                   }`}
      />

      {/* --- Button Text --- */}
      <span
        className="relative z-10 font-medium transition-all duration-500 ease-in-out
                   group-hover:text-white group-hover:font-semibold"
      >
        {text}
      </span>
    </button>
  );
}

// src/components/TestimonialsTicker.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

type Testimonial = {
  name: string;
  text: string;
  // avatar?: string; // optional if you decide to show photos later
};

type Props = {
  testimonials: Testimonial[];
  durationSec?: number; // how long one full loop takes (default 35s)
  cardWidth?: number; // fixed card width in px (default 320)
  gapPx?: number; // gap between cards in px (default 24)
  pauseOnHover?: boolean; // pause animation on hover (default true)
  className?: string; // extra classes for wrapper
};

export default function TestimonialsTicker({
  testimonials,
  durationSec = 35,
  cardWidth = 320,
  gapPx = 24,
  pauseOnHover = true,
  className = "",
}: Props) {
  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div
      className="flex items-stretch"
      style={{ columnGap: `${gapPx}px` }}
      aria-hidden={ariaHidden}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={`${ariaHidden ? "dupe-" : ""}${i}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="relative shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1424] to-[#0E1626] border border-white/10 shadow-[0_20px_45px_-30px_rgba(2,6,23,0.8)]"
          style={{ width: `${cardWidth}px` }}
        >
          {/* Name pill */}
          <div className="absolute -top-3 left-6 z-10">
            <span className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800 text-gray-200 border border-white/10 shadow">
              {t.name}
            </span>
          </div>

          {/* Left blue strip with stars */}
          <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_35%)]" />
            <div className="flex flex-col items-center justify-center h-full text-white/95 gap-2">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          {/* Text */}
          <div className="pl-16 pr-6 py-5 text-sm text-gray-200 leading-relaxed">
            {t.text}
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div
      className={`relative group overflow-hidden ${className}`}
      style={
             { ["--duration" as string]: `${durationSec}s` } as React.CSSProperties
           }
    >
      {/* Edge fade (nice TV band feel) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#11131A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#11131A] to-transparent" />

      {/* Track: two identical rows for seamless loop */}
      <div
        className={[
          "flex w-max animate-[ticker_var(--duration)_linear_infinite]",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
        ].join(" ")}
      >
        <Row />
        <Row ariaHidden />
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          } /* shift by one row width */
        }
      `}</style>
    </div>
  );
}

/** Simple star icon to match your existing <StarIcon/> */
function StarIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

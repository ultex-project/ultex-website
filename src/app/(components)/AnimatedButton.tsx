"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroCTAButton({ isRtl = false }: { isRtl?: boolean }) {
    const tHero = useTranslations("hero");

    return (
        <Link
            href="/contact"
            className={`relative overflow-hidden inline-block group rounded-lg px-8 py-3 font-semibold text-white uppercase tracking-wider font-funnel-display
        border border-yellow-600 bg-[#0b0f17] shadow-[0_0_8px_rgba(255,215,0,0.25)]
        transform transition-all duration-300 hover:scale-105`}
        >
            {/* 🔆 Moving light gradient background */}
            <span
                className={`absolute inset-0 ${
                    isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-yellow-600 via-yellow-200 to-yellow-600 opacity-20 group-hover:opacity-40`}
                style={{
                    backgroundSize: "200% 100%",
                    animation: "moveLight 3s linear infinite",
                }}
            />

            {/* 🟡 Text layer */}
            <span className="relative z-10">{tHero("ctaLabel")}</span>

            {/* 🟠 Default border glow */}
            <span className="absolute inset-0 rounded-lg border border-yellow-700/70 pointer-events-none group-hover:border-yellow-400/90" />

            {/* ✨ Outer glowing ring on hover */}
            <span className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_25px_8px_rgba(255,215,0,0.5)]" />
        </Link>
    );
}

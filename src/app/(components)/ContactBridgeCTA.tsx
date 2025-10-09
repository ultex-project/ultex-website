// src/app/(components)/ContactBridgeCTA.tsx
"use client";

import Link from "next/link";

export default function ContactBridgeCTA() {
    return (
        <div className="relative py-16 md:py-20 text-white overflow-hidden">
            {/* subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1.2px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                {/*<div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(59,130,246,.25),transparent_70%)]" />*/}
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-center font-funnel-display">
                    Connectez Vos Ambitions au Monde du Commerce
                </h2>
                <p className="mt-3 text-center text-gray-300 max-w-3xl mx-auto">
                    Un seul clic pour démarrer une collaboration performante et booster votre logistique globale.
                </p>

                {/* center button with blue lines */}
                <div className="mt-8 flex items-center justify-center gap-6">
                    <span className="hidden sm:block h-[2px] w-32 md:w-64 bg-gradient-to-r from-transparent via-sky-600/70 to-transparent" />
                    <Link
                        href="#contact"
                        className="group rounded-xl border border-sky-600/70 px-5 py-3 font-semibold text-sky-300 hover:text-white hover:border-sky-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                    >
            <span className="inline-flex items-center gap-2">
              <span className="inline-block -translate-x-0.5 transition-transform group-hover:translate-x-0">
                ➜
              </span>
              Rendez-Vous
            </span>
                    </Link>
                    <span className="hidden sm:block h-[2px] w-32 md:w-64 bg-gradient-to-l from-transparent via-sky-600/70 to-transparent" />
                </div>
            </div>
        </div>
    );
}

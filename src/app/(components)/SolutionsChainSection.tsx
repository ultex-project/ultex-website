// src/components/SolutionsChainSection.tsx
"use client";

import Image from "next/image";
import { useRef } from "react";

export default function SolutionsChainSection() {
  const containerRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Sourcing et Relation Fournisseurs",
      description:
        "Nous identifions pour vous les fournisseurs fiables et compétitifs, adaptés à vos besoins d'importation.",
      image: "/images/sourcing.png",
      icon: "/icons/sourcing-icon.png",
      video: "/videos/sourcing.mp4", // ← NEW
    },
    {
      id: 2,
      title: "Contrôle Qualité et Conformité",
      description:
        "Nous inspectons vos marchandises pour garantir leur conformité aux normes et à vos critères de qualité.",
      image: "/images/quality.png",
      icon: "/icons/quality-icon.png",
    },
    {
      id: 3,
      title: "Transport et Logistique Globale",
      description:
        "Nous pilotons vos expéditions terrestres, maritimes et aériennes à l'échelle nationale et internationale.",
      image: "/images/transport.png",
      icon: "/icons/transport-icon.png",
    },
    {
      id: 4,
      title: "Stockage et Gestion de Marchandise",
      description:
        "Nous offrons des solutions de stockage sûres et une gestion optimale de vos flux de marchandises.",
      image: "/images/storage.png",
      icon: "/icons/storage-icon.png",
    },
    {
      id: 5,
      title: "Transit Douanier et Dédouanement",
      description:
        "Nous gérons vos formalités douanières avec rigueur, pour un import-export sécurisé, conforme et fluide.",
      image: "/images/customs.png",
      icon: "/icons/customs-icon.png",
    },
    {
      id: 6,
      title: "Suivi et Livraison des Cargaisons",
      description:
        "Nous assurons un suivi en temps réel et une livraison fiable, dans le respect des exigences clients.",
      image: "/images/tracking.png",
      icon: "/icons/tracking-icon.png",
    },
  ];

  return (
    <section className="py-20 bg-[#11131A] text-white" ref={containerRef}>
      <div className="container mx-auto max-w-6xl px-6 xl:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-funnel-display">
          Des Solutions Adaptées à Votre Chaîne Logistique
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          Découvrez l’ensemble des solutions logistiques et import-export
          proposées par ULTEX. Une gamme complète de services adaptés à chaque
          étape de votre chaîne logistique.
        </p>

        {/* Left cards + right sticky (right fixed width to avoid giant cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_500px] gap-3">
          {/* Cards – smaller, centered, portrait */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative w-[240px] sm:w-[260px] md:w-[280px]
                       overflow-hidden rounded-xl ring-1 ring-white/10
                       bg-[#0B0F17] hover:ring-white/20 hover:shadow-xl shadow-[-9px_11px_22px_rgba(1,89,163,0.30)] hover:shadow-cyan-500/10
                       transition-all duration-300"
              >
                <div className="relative w-full aspect-[3/4]">
                  {card.video ? (
                    <video
                      src={card.video}
                      poster={card.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-base md:text-lg font-bold font-funnel-display">
                      {card.title}
                    </h3>
                    <p className="mt-1  md:text-sm text-white/80 leading-snug">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full
                              bg-cyan-400/0 blur-3xl transition-opacity duration-300
                              group-hover:bg-cyan-400/15"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right sticky */}
          {/* Colonne droite sticky (tu gardes ton fond SVG) */}
          <div className="lg:col-span-1">
            {/*<img src={"/images/solutions-electro.svg"}/>*/}
            <div className="relative sticky top-24 p-4 overflow-hidden">
              <img
                src="/images/solutions-rc-cropped.svg"
                alt="background pattern"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

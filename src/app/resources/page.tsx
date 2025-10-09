// src/app/resources/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import HeroPage from "@/app/(components)/HeroPage";

type Resource = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const items: Resource[] = [
  {
    title:
      "Coupe du monde 2030: quel impact sur l’économie du Royaume et le transport international",
    excerpt:
      "La Coupe du Monde 2030 est un événement sportif d’envergure mondiale qui attire des millions de spectateurs et génère des…",
    image: "/images/world-cup.svg",
    href: "/resources/coupe-du-monde-2030-impact",
  },
  {
    title:
      "La transition vers des carburants plus écologiques dans le transport maritime européen offre des opportunités favorables au Maroc",
    excerpt:
      "Le Maroc se positionne comme un acteur clé dans la transition vers des carburants maritimes verts en Europe, ce qui…",
    image: "/images/ship-larg.svg",
    href: "/resources/transition-carburants-verts",
  },
  {
    title:
      "Les nouvelles réglementations douanières en 2024 : ce que vous devez savoir",
    excerpt:
      "En 2024, le monde des affaires au Maroc est en pleine effervescence avec l’entrée en vigueur de nouvelles…",
    image: "/images/douane.svg",
    href: "/resources/reglementations-douanieres-2024",
  },
  {
    title:
      "La conjoncture de la guerre de la mer rouge : Impact sur le transport international",
    excerpt:
      "Depuis plusieurs années, la région de la Mer Rouge est le théâtre de tensions géopolitiques, avec des répercussions…",
    image: "/images/ship-connected.svg",
    href: "/resources/mer-rouge-transport",
  },
  {
    title: "Les tendances de la supply chain pour 2024",
    excerpt:
      "Alors que nous avançons vers 2024, le paysage de la supply chain continue d’évoluer à un rythme rapide, façonné par…",
    image: "/images/logistic.svg",
    href: "/resources/tendances-supply-chain-2024",
  },
  {
    title: "Tanger Med: Le géant du commerce international",
    excerpt:
      "Le port Tanger Med, situé à la croisée des routes maritimes mondiales, constitue un hub majeur dans le réseau du…",
    image: "/images/mer.svg",
    href: "/resources/tanger-med-hub",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/solutions-hero.jpg"
        eyebrow="Resources"
        title="ULTex"
      />
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Titre + intro */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight font-funnel-display">
            Participations ULTEx aux Salons et Forums Logistiques
          </h1>
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            ULTEx participe activement aux grands événements du secteur
            logistique, de l’import-export et du commerce international. À
            travers des salons, forums et rencontres professionnelles, nous
            développons notre présence et notre réseau grâce à des partenariats
            stratégiques.
          </p>

          {/* Grille de cartes */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((r, i) => (
              <motion.article
                key={r.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_20px_50px_-25px_rgba(2,6,23,0.25)]"
              >
                {/* Smaller/taller media but overall compact card */}
                <div className="relative h-54 md:h-76">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 400px) 53vw, 100vw"
                    priority={i === 0}
                  />
                  {/* dotted overlay on the left */}
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-2/5 opacity-80
                                [mask-image:linear-gradient(to_right,black,transparent)]
                                [background:radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.9)_1.2px,transparent_1.6px)]
                                [background-size:10px_10px]"
                  />
                </div>

                <div className="px-4 pt-5 pb-5 flex-1 flex flex-col">
                  <h3 className="text-center text-[16px] md:text-[17px] font-bold text-gray-900 leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-center text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {r.excerpt}
                  </p>

                  <div className="mt-auto pt-4 flex justify-center">
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-3 rounded-2xl border-2 border-blue-600/90
                               px-4 py-2.5 text-blue-700 font-semibold hover:bg-blue-50
                               shadow-sm transition"
                    >
                      <span className="inline-grid place-items-center size-7 rounded-lg bg-blue-600 text-white">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 18l6-6-6-6" />
                          <path d="M3 12h12" />
                        </svg>
                      </span>
                      PLUS D&apos;INFO
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

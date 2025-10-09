// src/app/(components)/ResourcesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Resource = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const resources: Resource[] = [
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
      "En cette année 2024, le monde des affaires au Maroc est en pleine effervescence avant l’entrée en vigueur de nouvelles…",
    image: "/images/douane.svg",
    href: "/resources/reglementations-douanieres-2024",
  },
];

export default function ResourcesSection() {
  return (
    <section className="relative py-16 bg-[#F5F6F8] overflow-visible">
      {/* Bande noire sous les cartes (plein écran) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-[#0B0E13] z-0" />

      {/* Colonne gauche décor (carte du monde) */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:flex items-center z-[1]">
        {/* ajuste la largeur/position selon ton visuel */}
        <img
          src="/images/footer-bg.svg"
          alt="World map"
          className="max-h-[520px] w-auto opacity-90 -ml-4"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Titre + intro */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-funnel-display">
          Des Ressources Fiables Pour
          <br className="hidden md:block" />
          Apprendre et Progresser
        </h2>
        <p className="mt-4 max-w-4xl text-gray-600">
          Restez à la pointe des évolutions du secteur logistique et de
          l&apos;import-export. Découvrez nos ressources exclusives, nos
          analyses de marché et nos conseils pratiques pour optimiser vos
          opérations au quotidien, grâce à un contenu riche, actualisé et pensé
          pour soutenir votre croissance.
        </p>

        {/* Grille des cartes (au-dessus de la bande noire) */}
        <div className="relative mt-10">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <motion.article
                key={r.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[18px] overflow-hidden bg-white border border-[#C7D3E1] shadow-[0_20px_40px_-24px_rgba(2,6,23,0.25)] flex flex-col"
              >
                {/* Média haut — plus haut pour donner la sensation de carte “longue” */}
                <div className="relative h-56 md:h-72">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={i === 0}
                  />
                  {/* Overlay pointillé côté gauche, comme ton exemple */}
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-2/5 opacity-80
                                  [mask-image:linear-gradient(to_right,black,transparent)]
                                  [background:radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.9)_1.2px,transparent_1.6px)]
                                  [background-size:10px_10px]"
                  />
                </div>

                {/* Corps */}
                <div className="px-5 pt-6 pb-6 flex-1 flex flex-col">
                  <h3 className="text-center text-[17px] md:text-[18px] font-bold text-gray-900 leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-center text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {r.excerpt}
                  </p>

                  <div className="mt-auto pt-5 flex justify-center">
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-3 rounded-2xl border-2 border-blue-600/90
                                 px-5 py-3 text-blue-700 font-semibold hover:bg-blue-50
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
      </div>
    </section>
  );
}

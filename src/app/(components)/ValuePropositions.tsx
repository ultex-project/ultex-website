// src/components/ValuePropositions.tsx
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { Link } from "@/i18n";

const baseCards = [
  {
    id: 1,
    key: "reputation",
    image: "/images/reputation.png",
  },
  {
    id: 2,
    key: "global",
    image: "/images/global-map.svg",
    variant: "dark" as const,
  },
  {
    id: 3,
    key: "solutions",
    image: "/images/solutions.svg",
  },
  {
    id: 4,
    key: "expertise",
    image: "/images/expertise.svg",
  },
] as const;

export default function ValuePropositions() {
  const tSections = useTranslations("sections.valueProps");
  const cards = baseCards.map((card) => ({
    ...card,
    title: tSections(`cards.${card.key}.title`),
    description: tSections(`cards.${card.key}.description`),
    cta: card.key === "global" ? tSections(`cards.global.cta`) : undefined,
  }));
  const titleLines = [
    tSections("title.line1"),
    tSections.rich("title.line2", {
      brand: (chunk) => <span className="text-yellow-400">{chunk}</span>,
    }),
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 xl:px-24">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 font-funnel-display">
          {titleLines[0]}
          <br className="hidden md:block" />
          {titleLines[1]}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT — Small card */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-all bg-white"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={cards[0].image}
                  alt={cards[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge centré et parfaitement rond */}
                <div className="absolute inset-0 pointer-events-none grid place-items-center">
                  {/* Conteneur carré => cercle parfait avec rounded-full */}
                  <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 grid place-items-center">
                    <Image
                      src="/icons/reputation.png"
                      alt="Réputation"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-funnel-display">
                  {cards[0].title}
                </h3>
                <p className="text-sm text-gray-600">{cards[0].description}</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Big dark card with overlayed heading + CTA (matches Figma) */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-black"
            >
              {/* Background video */}
              <div className="relative h-[420px] w-full">
                {/* Vidéo de fond */}
                <video
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover object-[50%_60%] motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/global-map-poster.jpg"
                >
                  <source src="/videos/global-map.webm" type="video/webm" />
                  <source src="/videos/global-map.mp4" type="video/mp4" />
                </video>

                {/* Fallback image si reduce-motion ou si la vidéo ne charge pas */}
                <Image
                  src="/images/global-map-poster.jpg"
                  alt=""
                  fill
                  priority
                  className="object-cover hidden motion-reduce:block"
                />

                {/* Liseré doré fin */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-yellow-400/30" />

                {/* CONTENU OVERLAY (inchangé) */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                  <h3 className="text-white text-3xl md:text-4xl leading-snug font-funnel-display max-w-3xl">
                    {titleLines[0]}
                    <br className="hidden sm:block" />
                    {titleLines[1]}
                  </h3>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="text-white text-lg font-semibold underline underline-offset-4 hover:opacity-90"
                    >
                      {cards[1].cta}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM — as before */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={cards[2].image}
                  alt={cards[2].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none grid place-items-center">
                  {/* Conteneur carré => cercle parfait avec rounded-full */}
                  <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 grid place-items-center">
                    <Image
                      src="/icons/solution.png"
                      alt="Solutions badge"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-funnel-display">
                  {cards[2].title}
                </h3>
                <p className="text-sm text-gray-600">{cards[2].description}</p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={cards[3].image}
                  alt={cards[3].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none grid place-items-center">
                  {/* Conteneur carré => cercle parfait avec rounded-full */}
                  <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 grid place-items-center">
                    <Image
                      src="/icons/expertise.png"
                      alt="Expertise badge"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-funnel-display">
                  {cards[3].title}
                </h3>
                <p className="text-sm text-gray-600">{cards[3].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

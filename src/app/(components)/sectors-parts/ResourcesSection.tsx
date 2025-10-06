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
        image: "/images/world-cup.svg", // replace with your asset
        href: "/resources/coupe-du-monde-2030-impact",
    },
    {
        title:
            "La transition vers des carburants plus écologiques dans le transport maritime: de nouvelles opportunités au Maroc",
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
        <div className="py-16 bg-white relative overflow-hidden">
            {/* left decorative line/dots */}
            <div className=" absolute left-0 top-6 bottom-6 w-8">
                <img src={"/images/world-map.svg"}/>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-funnel-display">
                    Des Ressources Fiables Pour
                    <br className="hidden md:block" />
                    Apprendre et Progresser
                </h2>
                <p className="mt-4 max-w-4xl text-gray-600">
                    Restez à la pointe des évolutions du secteur logistique et de l&apos;import-export.
                    Découvrez nos ressources exclusives, nos analyses de marché et nos conseils
                    pratiques pour optimiser vos opérations au quotidien, grâce à un contenu riche,
                    actualisé et pensé pour soutenir votre croissance.
                </p>

                {/* Cards */}
                <div className="relative mt-10">
                    {/* soft dark halo behind cards */}
                    <div className="absolute inset-x-0 -bottom-8 h-24 rounded-[2rem] " />
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resources.map((r, i) => (
                            <motion.article
                                key={r.href}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="rounded-2xl overflow-hidden bg-white shadow-[0_25px_50px_-20px_rgba(2,6,23,0.2)] border border-gray-100"
                            >
                                <div className="relative h-40 md:h-48">
                                    <Image
                                        src={r.image}
                                        alt={r.title}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        priority={i === 0}
                                    />
                                </div>

                                <div className="px-5 pb-5 -mt-4">
                                    <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {r.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-3">
                                            {r.excerpt}
                                        </p>

                                        <div className="mt-4">
                                            <Link
                                                href={r.href}
                                                className="inline-flex items-center gap-2 rounded-xl border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
                                            >
                                                {/* button icon */}
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
                                                PLUS D&apos;INFO
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

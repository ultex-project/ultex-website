// src/components/SolutionsChainSection.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function SolutionsChainSection() {
    const containerRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: "Sourcing et Relation Fournisseurs",
            description: "Nous identifions pour vous les fournisseurs fiables et compétitifs, adaptés à vos besoins d'importation.",
            image: "/images/sourcing.png",
            icon: "/icons/sourcing-icon.png",
        },
        {
            id: 2,
            title: "Contrôle Qualité et Conformité",
            description: "Nous inspectons vos marchandises pour garantir leur conformité aux normes et à vos critères de qualité.",
            image: "/images/quality.png",
            icon: "/icons/quality-icon.png",
        },
        {
            id: 3,
            title: "Transport et Logistique Globale",
            description: "Nous pilotons vos expéditions terrestres, maritimes et aériennes à l'échelle nationale et internationale.",
            image: "/images/transport.png",
            icon: "/icons/transport-icon.png",
        },
        {
            id: 4,
            title: "Stockage et Gestion de Marchandise",
            description: "Nous offrons des solutions de stockage sûres et une gestion optimale de vos flux de marchandises.",
            image: "/images/storage.png",
            icon: "/icons/storage-icon.png",
        },
        {
            id: 5,
            title: "Transit Douanier et Dé douanement",
            description: "Nous gérons vos formalités douanières avec rigueur, pour un import-export sécurisé, conforme et fluide.",
            image: "/images/customs.png",
            icon: "/icons/customs-icon.png",
        },
        {
            id: 6,
            title: "Suivi et Livraison des Cargaisons",
            description: "Nous assurons un suivi en temps réel et une livraison fiable, dans le respect des exigences clients.",
            image: "/images/tracking.png",
            icon: "/icons/tracking-icon.png",
        },
    ];

    return (
        <section className="py-20 bg-[#11131A] text-white" ref={containerRef}>
            <div className="container mx-auto px-6 xl:px-24">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-funnel-display">
                    Des Solutions Adaptées à Votre Chaîne Logistique
                </h2>
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                    Découvrez l’ensemble des solutions logistiques et import-export proposées par ULTEX. Une gamme complète de services adaptés à chaque étape de votre chaîne logistique.
                </p>

                {/* Grid Layout - 3 Columns (2 cards + 1 sticky card) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: 3 Rows × 2 Cards Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                            >
                                {/* Card Image */}
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                        priority={index < 3} // Prioritize first row
                                    />
                                </div>

                                {/* White Text Panel (Rounded Bottom) */}
                                <div className="text-white p-6 rounded-b-xl">
                                    <h3 className="text-xl font-bold mb-2 font-funnel-display">{card.title}</h3>
                                    <p className="text-sm text-gray-600">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Scrolls with Page */}
                    {/* Right Column: Sticky Scroll Effect */}
                    <div className="lg:col-span-1">
                        <div
                            className="relative sticky top-24  p-10 overflow-hidden"
                        >
                            {/* 🔹 SVG background layer */}
                            <div className="">
                                <img
                                    src="/images/solutions-rc-cropped.svg" // 👉 replace with your SVG file path
                                    alt="background pattern"

                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
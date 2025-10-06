// src/components/ValuePropositions.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ValuePropositions() {
    const cards = [
        {
            id: 1,
            title: "Réputation Solide",
            description: "Une réputation fondée sur des partenariats durables, des résultats concrets et une confiance mutuelle.",
            image: "/images/reputation.png", // handshake
            variant: "light",
        },
        {
            id: 2,
            title: "Optimisez Vos Flux Logistiques et Exploitez les Opportunités du Marché Mondial Avec ULTEX.",
            description: "Make an appointment",
            image: "/images/global-map.svg", // globe with shipping routes
            variant: "dark",
            cta: true,
        },
        {
            id: 3,
            title: "Solutions Intégrées",
            description: "Une chaîne de services logistiques complète, conçue pour simplifier et optimiser vos opérations.",
            image: "/images/solutions.svg", // cargo ship/port
            variant: "light",
        },
        {
            id: 4,
            title: "Expertise Pointues",
            description: "Une parfaite maîtrise des processus, portée par un savoir-faire qui s'adapte à vos contraintes.",
            image: "/images/expertise.svg", // yellow warehouse/arrow
            variant: "light",
        },
    ];

    return (
        <section className="bg-white mt-10">
            <div className="container mx-auto px-6 xl:px-24 py-16">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 font-funnel-display">
                    Optimisez Vos Flux Logistiques et Exploitez les <br/> Opportunités du Marché Mondial Avec
                </h2>

                {/* Grid Layout - 2 rows */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* TOP ROW: Small Card + Large Card */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`rounded-xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-all ${
                                cards[0].variant === "dark" ? "bg-gray-900 text-white" : "bg-white"
                            }`}
                        >
                            {/* Card Image */}
                            <div className="relative h-80 w-full">
                                <Image
                                    src={cards[0].image}
                                    alt={cards[0].title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Floating Icon Badge */}
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <Image
                                            src="/icons/reputation.png"
                                            alt="Reputation badge"
                                            width={24}
                                            height={24}
                                            className="filter drop-shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className={`p-6 ${cards[0].variant === "dark" ? "bg-gray-900" : "bg-white"}`}>
                                <h3 className="text-xl font-bold mb-2 font-funnel-display">{cards[0].title}</h3>
                                <p className={`text-sm ${cards[0].variant === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                    {cards[0].description}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                                cards[1].variant === "dark" ? "bg-gray-900 text-white" : "bg-white"
                            }`}
                        >
                            {/* Card Image */}
                            <div className="relative h-96 w-full"> {/* Larger height for big card */}
                                <Image
                                    src={cards[1].image}
                                    alt={cards[1].title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {cards[1].cta && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <div className="text-center p-4 max-w-xs">
                                            <p className="text-yellow-400 text-sm uppercase font-medium mb-2">BUY IT</p>
                                            <p className="text-white text-lg font-bold">Make an appointment</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className={`p-6 ${cards[1].variant === "dark" ? "bg-gray-900" : "bg-white"}`}>
                                <h3 className="text-xl font-bold mb-2 font-funnel-display">{cards[1].title}</h3>
                                <p className={`text-sm ${cards[1].variant === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                    {cards[1].description}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* BOTTOM ROW: Two Equal Cards Spanning Full Width */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Card 3: Solutions Intégrées */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                                    cards[2].variant === "dark" ? "bg-gray-900 text-white" : "bg-white"
                                }`}
                            >
                                {/* Card Image */}
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={cards[2].image}
                                        alt={cards[2].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Floating Icon Badge */}
                                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <Image
                                                src="/icons/solution.png"
                                                alt="Solutions badge"
                                                width={24}
                                                height={24}
                                                className="filter drop-shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className={`p-6 ${cards[2].variant === "dark" ? "bg-gray-900" : "bg-white"}`}>
                                    <h3 className="text-xl font-bold mb-2 font-funnel-display">{cards[2].title}</h3>
                                    <p className={`text-sm ${cards[2].variant === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                        {cards[2].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Card 4: Expertise Pointues */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                                    cards[3].variant === "dark" ? "bg-gray-900 text-white" : "bg-white"
                                }`}
                            >
                                {/* Card Image */}
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={cards[3].image}
                                        alt={cards[3].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Floating Icon Badge */}
                                    <div className="absolute top-0 right-0 bg-white rounded-full p-2 shadow-md">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <Image
                                                src="/icons/expertise.png"
                                                alt="Expertise badge"
                                                width={24}
                                                height={24}
                                                className="filter drop-shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className={`p-6 ${cards[3].variant === "dark" ? "bg-gray-900" : "bg-white"}`}>
                                    <h3 className="text-xl font-bold mb-2 font-funnel-display">{cards[3].title}</h3>
                                    <p className={`text-sm ${cards[3].variant === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                        {cards[3].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
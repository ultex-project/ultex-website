// src/components/PasserelleSection.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import QuoteCard from "@/app/(components)/QuoteCard";
import InfoButton from "@/app/(components)/InfoButton";

export default function PasserelleSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 xl:px-24">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-funnel-display">
                    Votre Passerelle Logistique<br />
                    Vers le Commerce Mondial
                </h2>

                {/* Subheading */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
                    ULTEX accompagne les entreprises marocaines et étrangères dans leurs opérations logistiques et commerciales à l'import <br/> comme
                    à l'export. Notre savoir-faire repose sur la rigueur, la réactivité et une maîtrise des réglementations douanières et <br/> des
                    chaînes logistiques.
                </p>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Graphic */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/passerelle-graphic.png"
                            alt="Logistics network with ship, plane, and truck"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                            priority
                        />

                        {/* Overlay Buttons */}
                        <div className="absolute top-6 left-6 space-y-3">
                            <button className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
                                Offers Solutions
                            </button>
                            <button className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
                                E-Logistics ...
                            </button>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-6">
                        <h3 className="text-5xl font-bold font-funnel-display">
                            Tout Le Monde Vend<br />
                            Des Services, ULTEX Offre<br />
                            Des Solutions
                        </h3>

                        {/* Highlighted Text Block */}
                        <QuoteCard text={"Fondée pour répondre aux besoins logistiques et commerciaux des entreprises, ULTEX allie expertise métier et technologie afin de garantir des prestations optimisées et conformes. Nous     anticipons les contraintes douanières et les enjeux sectoriels, et innovons pour accélérer la croissance locale et internationale de nos clients, grâce à des solutions adaptées et évolutives."}/>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <InfoButton text={"PLUS D'INFO"}/>
                            <button className="text-gray-500 hover:text-gray-700 font-medium flex items-center gap-2">
                                <div className="w-1 h-6 bg-gray-300"></div>
                                Meilleure solution
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
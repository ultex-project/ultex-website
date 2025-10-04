// src/components/ServiceFlowSection.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceFlowSection() {
    const steps = [
        {
            id: 1,
            title: "Équipe Experte",
            description: "Des spécialistes qualifiés qui maîtrisent chaque aspect de la logistique et du commerce national et international.",
            icon: "/icons/team-icon.png",
        },
        {
            id: 2,
            title: "Service Global",
            description: "Une gestion complète de l'ensemble du processus et des opérations logistiques, du sourcing à la livraison finale.",
            icon: "/icons/global-icon.png",
        },
        {
            id: 3,
            title: "Prix Étudiés",
            description: "Un service d'import-export Intégral, à des tarifs étudiés et des formules flexibles adaptées à votre budget.",
            icon: "/icons/price-icon.png",
        },
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Main Flow */}
                <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Left Card: Amazing Service */}
                    <div className="lg:w-1/4">
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                                    <img src={"/images/amazing-serving.svg"} className={"w-full h-full"} />
                        </div>
                    </div>
                    {/* Steps Flow */}
                    <div className="lg:w-3/4 flex flex-col lg:flex-row items-center justify-between gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center max-w-xs"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={48}
                                        height={48}
                                        className="filter drop-shadow-sm"
                                    />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {step.description}
                                </p>


                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Footer Text */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-400 mb-4">
                        <div className="w-1 h-6 bg-gray-400"></div>
                        <span>Transformez Vos Défis Logistiques en Leviers de Croissance Grâce aux Solutions ULTEX.</span>
                    </div>
                    <h3 className="text-xl font-bold">Contactez Nos Experts</h3>
                </div>
            </div>
        </section>
    );
}
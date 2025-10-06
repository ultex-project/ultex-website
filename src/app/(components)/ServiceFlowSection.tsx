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
            description: "Une gestion complète de l&apos;ensemble du processus et des opérations logistiques, du sourcing à la livraison finale.",
            icon: "/icons/global-icon.png",
        },
        {
            id: 3,
            title: "Prix Étudiés",
            description: "Un service d&apos;import-export Intégral, à des tarifs étudiés et des formules flexibles adaptées à votre budget.",
            icon: "/icons/price-icon.png",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#04050F] to-[#090B1A] text-white">
            <div className="container mx-auto px-6">
                {/* Main Flow */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
                    {/* Left Card: Amazing Service */}
                    <div className="lg:w-[280px] flex justify-center">
                        <Image
                            src="/images/amazing-serving.svg"
                            alt="Amazing service illustration"
                            width={182}
                            height={216}
                            className="h-auto w-full max-w-[260px]"
                            priority
                        />
                    </div>

                    {/* Steps Flow */}
                    <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-stretch">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative flex-1 lg:-mr-16 lg:max-w-[360px] lg:last:mr-0"
                            >
                                <div className="relative flex h-full min-h-[210px] flex-col gap-6 overflow-hidden rounded-2xl bg-[#0F1A32]/90 px-8 py-10 text-left shadow-[0_20px_45px_-35px_rgba(12,66,129,0.6)] lg:px-10">
                                    <Image
                                        src="/images/arrow-step.svg"
                                        alt=""
                                        fill
                                        priority={index === 0}
                                        sizes="(min-width: 1024px) 33vw, 100vw"
                                        className="pointer-events-none select-none object-cover object-left hidden lg:block"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#131E32]/95 via-[#0E1626]/85 to-[#070D18]/80 lg:hidden" />
                                    <div className="relative z-10 flex flex-col gap-4 text-left lg:max-w-[280px]">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={48}
                                            height={48}
                                            className="h-12 w-12"
                                        />
                                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                        <p className="text-sm leading-relaxed text-gray-300">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Footer Text */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 text-sm text-gray-400">
                        <span className="inline-block h-10 w-[2px] bg-sky-400/60" />
                        <span className="max-w-2xl text-left leading-relaxed">
                            Transformez Vos Défis Logistiques en Leviers de Croissance Grâce aux Solutions ULTEX.
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">Contactez Nos Experts</h3>
                </div>
            </div>
        </section>
    );
}


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
                    <div className="lg:w-[280px]">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#102144] via-[#0C1633] to-[#030615] p-6 shadow-[0_30px_50px_-40px_rgba(50,143,255,0.8)]">
                            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(80,160,255,0.6), transparent 55%)" }} />
                            <div className="relative flex h-full flex-col justify-between gap-6">
                                <div className="space-y-2">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-sky-300">
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                                            <Image src="/icons/team-icon.png" alt="Service icon" width={28} height={28} />
                                        </span>
                                        Amazing service
                                    </span>
                                    <h3 className="text-2xl font-semibold leading-tight">Best-in-class support</h3>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-sm leading-relaxed text-gray-200">
                                        Des experts à l&apos;écoute de vos besoins 24/7 pour garantir une expérience fluide et adaptée à vos opérations logistiques.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between text-xs text-white/60">
                                    <span>Best Team</span>
                                    <span>Best Quality</span>
                                </div>
                            </div>
                        </div>
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
                                className="relative flex-1"
                            >
                                <div
                                    className="h-full rounded-2xl bg-[#0F1A32]/80 p-6 backdrop-blur"
                                    style={{
                                        clipPath:
                                            index === steps.length - 1
                                                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                                                : "polygon(0 0, calc(100% - 34px) 0, 100% 50%, calc(100% - 34px) 100%, 0 100%)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                                            <Image src={step.icon} alt={step.title} width={32} height={32} />
                                        </span>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {index !== steps.length - 1 && (
                                    <div className="absolute right-[-24px] top-1/2 hidden -translate-y-1/2 lg:block">
                                        <div className="h-[2px] w-12 bg-gradient-to-r from-sky-500/40 to-transparent" />
                                    </div>
                                )}
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

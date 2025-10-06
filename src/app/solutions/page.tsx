// src/app/solutions/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";

type BlockProps = {
    title: string;
    subtitle?: string;
    note: string;
    bullets?: string[];
    image: string;
    imageAlt: string;
    align?: "left" | "right";
};

function SolutionBlock({
                           title,
                           subtitle,
                           note,
                           bullets = [],
                           image,
                           imageAlt,
                           align = "left",
                       }: BlockProps) {
    const isLeft = align === "left";
    return (
        <section className="bg-black-400 py-12">
            <div
                className={`grid items-center gap-10 lg:gap-14 ${
                    isLeft ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
                }`}
            >
                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isLeft ? "" : "lg:order-2"}`}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_35px_80px_-40px_rgba(2,6,23,0.7)] border border-white/10 bg-gradient-to-br from-[#08111D] via-[#0A1524] to-[#0E1A2C]">
                        <div className="absolute -top-1 -right-1 w-16 h-16 rounded-full bg-yellow-400/90 blur-xl opacity-70" />
                        <div className="relative">
                            <Image
                                src={image}
                                alt={imageAlt}
                                width={920}
                                height={560}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isLeft ? "" : "lg:order-1"}`}
                >
                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                        {title}
                        {subtitle && (
                            <>
                                <br />
                                <span className="font-semibold">{subtitle}</span>
                            </>
                        )}
                    </h3>

                    {/* Yellow note with dots like your mock */}
                    <div className="relative mt-4 bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md text-gray-800">
                        {/* dots */}
                        <span className="absolute -left-3 top-4 w-2.5 h-2.5 rounded-full bg-gray-800" />
                        <span className="absolute -right-3 bottom-4 w-2.5 h-2.5 rounded-full bg-gray-800" />
                        <p className="leading-relaxed">{note}</p>
                    </div>

                    {/* Bullets */}
                    {bullets.length > 0 && (
                        <ul className="mt-5 space-y-2 text-gray-700">
                            {bullets.map((b, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="mt-2 h-[3px] w-6 bg-gray-300 inline-block" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Subtle helper link under bullets */}
                    <button className="mt-4 text-sm text-gray-500 hover:text-gray-700">
                        Meilleure solution
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default function SolutionsPage() {
    return (
        <main className="bg-white text-gray-900">
            {/* HERO */}
            <section className="relative bg-[#050A12] text-white overflow-hidden">
                <Header />

                {/* backdrop */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/solutions-hero.jpg" // change to your banner
                        alt="Solutions ULTex banner"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A30]/80 via-[#08111D]/70 to-[#050A12]" />
                </div>

                <div className="relative container mx-auto px-6 lg:px-12 py-16">
                    <div className="max-w-6xl">
                        <div className="text-blue-200/90 font-semibold">
                            <span className="text-lg">Solutions</span>
                            <span className="block text-2xl font-funnel-display">ULTex</span>
                        </div>


                    </div>
                </div>

                {/* Curved bottom edge */}
                {/*<div className="absolute -bottom-px left-0 right-0">*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        viewBox="0 0 1440 220"*/}
                {/*        className="w-full h-[90px] fill-white"*/}
                {/*        preserveAspectRatio="none"*/}
                {/*    >*/}
                {/*        <path d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,170.7C672,181,768,139,864,122.7C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,220L1392,220C1344,220,1248,220,1152,220C1056,220,960,220,864,220C768,220,672,220,576,220C480,220,384,220,288,220C192,220,96,220,48,220L0,220Z"></path>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </section>

            {/* CONTENT */}
            <div className="container mx-auto px-6 lg:px-12 py-14">
                <div className="container mx-auto text-center py-16">
                    <h1 className="mt-8 text-3xl md:text-5xl font-extrabold font-funnel-display leading-tight">
                        Solutions Logistique Globales
                        <br/>
                        et Import-Export Sur Mesure
                    </h1>

                    <p className="mt-4  text-gray-300">
                        ULTEx simplifie votre commerce international grâce à des services
                        et solutions complètes, fiables, agiles, sécurisées et évolutives,
                        du sourcing à la livraison finale. Nous veillons à la fluidité de
                        vos flux et à l’efficacité de vos opérations à chaque étape du
                        processus, avec une approche orientée résultats.
                    </p>
                </div>
                    <SolutionBlock
                        align="left"
                        title="Sourcing"
                        subtitle="et Relation Fournisseurs"
                        image="/images/solution-sourcing.jpg" // replace with your asset
                        imageAlt="Sourcing"
                        note="ULTEx identifie, évalue et sélectionne les fournisseurs les plus fiables et adaptés à vos besoins, afin de garantir la qualité, la conformité et la compétitivité de vos approvisionnements. Nous gérons les négociations, contrôlons les standards et optimisons les délais pour sécuriser vos partenariats stratégiques."
                        bullets={[
                            "Sélection rigoureuse des fournisseurs",
                            "Négociation et contractualisation",
                            "Suivi qualité et conformité produit",
                        ]}
                    />

                    <SolutionBlock
                        align="right"
                        title="Contrôle Qualité"
                        subtitle="et Conformité"
                        image="/images/solution-quality.jpg"
                        imageAlt="Contrôle qualité"
                        note="Nous assurons un contrôle rigoureux de la qualité de vos produits tout au long du processus d’import-export, en veillant à leur conformité avec les normes nationales et internationales. Des inspections sur-mesure, sur vos organisations et vos exigences spécifiques."
                        bullets={[
                            "Inspection avant expédition",
                            "Vérification des certificats",
                            "Gestion des non-conformités",
                        ]}
                    />

                    <SolutionBlock
                        align="left"
                        title="Sourcing"
                        subtitle="et Relation Fournisseurs"
                        image="/images/solution-sourcing.jpg" // replace with your asset
                        imageAlt="Sourcing"
                        note="ULTEx identifie, évalue et sélectionne les fournisseurs les plus fiables et adaptés à vos besoins, afin de garantir la qualité, la conformité et la compétitivité de vos approvisionnements. Nous gérons les négociations, contrôlons les standards et optimisons les délais pour sécuriser vos partenariats stratégiques."
                        bullets={[
                            "Sélection rigoureuse des fournisseurs",
                            "Négociation et contractualisation",
                            "Suivi qualité et conformité produit",
                        ]}
                    />

                    <SolutionBlock
                        align="right"
                        title="Contrôle Qualité"
                        subtitle="et Conformité"
                        image="/images/solution-quality.jpg"
                        imageAlt="Contrôle qualité"
                        note="Nous assurons un contrôle rigoureux de la qualité de vos produits tout au long du processus d’import-export, en veillant à leur conformité avec les normes nationales et internationales. Des inspections sur-mesure, sur vos organisations et vos exigences spécifiques."
                        bullets={[
                            "Inspection avant expédition",
                            "Vérification des certificats",
                            "Gestion des non-conformités",
                        ]}
                    />
                    <SolutionBlock
                        align="left"
                        title="Sourcing"
                        subtitle="et Relation Fournisseurs"
                        image="/images/solution-sourcing.jpg" // replace with your asset
                        imageAlt="Sourcing"
                        note="ULTEx identifie, évalue et sélectionne les fournisseurs les plus fiables et adaptés à vos besoins, afin de garantir la qualité, la conformité et la compétitivité de vos approvisionnements. Nous gérons les négociations, contrôlons les standards et optimisons les délais pour sécuriser vos partenariats stratégiques."
                        bullets={[
                            "Sélection rigoureuse des fournisseurs",
                            "Négociation et contractualisation",
                            "Suivi qualité et conformité produit",
                        ]}
                    />

                    <SolutionBlock
                        align="right"
                        title="Contrôle Qualité"
                        subtitle="et Conformité"
                        image="/images/solution-quality.jpg"
                        imageAlt="Contrôle qualité"
                        note="Nous assurons un contrôle rigoureux de la qualité de vos produits tout au long du processus d’import-export, en veillant à leur conformité avec les normes nationales et internationales. Des inspections sur-mesure, sur vos organisations et vos exigences spécifiques."
                        bullets={[
                            "Inspection avant expédition",
                            "Vérification des certificats",
                            "Gestion des non-conformités",
                        ]}
                    />
                </div>
            <Footer/>
        </main>
);
}

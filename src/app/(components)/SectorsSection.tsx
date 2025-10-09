"use client";

import Image from "next/image";
import SectorCard from "@/app/(components)/SectorCard";
import { motion } from "framer-motion";
import MarketPresenceSection from "@/app/(components)/sectors-parts/MarketPresenceSection";
import ResourcesSection from "@/app/(components)/sectors-parts/ResourcesSection";
import SectorGridPanel from "@/app/(components)/SectorGridPanel";
import QuoteCard from "@/app/(components)/QuoteCard";
import {useRef} from "react";
import SectorsSplitSection from "@/app/(components)/SectorsSplitSection";
import StatsBand from "@/app/(components)/StatsBand";
import ResourcesStrip, {Resource} from "@/app/(components)/ResourcesStrip";

export default function SectorsSection() {
    const containerRef = useRef(null);
    const sectors = [
        { title: "Agro-alimentaire et Nutrition", imgSrc: "/images/agro.svg" },
        { title: "Textile et Habillement", imgSrc: "/images/textile.svg" },
        { title: "Électronique et Électroménager", imgSrc: "/images/electro.svg" },
        { title: "Automobile et Mécanique", imgSrc: "/images/auto.svg" },
        { title: "Technologies et Innovation", imgSrc: "/images/tech.svg" },
        { title: "Cosmétique et Hygiène", imgSrc: "/images/cosmetic.svg" },
    ];
    function StarIcon({ className = "w-3 h-3" }) {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        );
    }

    type Testimonial = { name: string; text: string };
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
    const testimonials: Testimonial[] = [
        {
            name: "S. Ismail",
            text:
                "L’équipe d’ULTEX a su répondre à mes besoins avec efficacité et un grand sens du service. " +
                "Un accompagnement sérieux du début à la fin, je les recommanderai sans hésiter.",
        },
        {
            name: "B. Doha",
            text:
                "ULTEX s’est montrée disponible et attentive à chaque étape de notre collaboration. " +
                "Leur réactivité et leur approche humaine font vraiment la différence.",
        },
        {
            name: "S. Youssef",
            text:
                "Un service rigoureux, des délais respectés, et une équipe toujours impliquée. " +
                "Merci à ULTEX pour leur sérieux, et tous mes encouragements pour la suite !",
        }
    ];

    const stats = [
        { value: "236", labelTop: "Clients Satisfaits" },
        { value: "16", labelTop: "Partenaires Mondiaux" },
        { value: "316", labelTop: "Opérations Réalisées" },
        { value: "11", labelTop: "Opérations Annulées" },
    ];


    return (
        <section
            className="py-20 bg-white overflow-hidden relative"
            ref={containerRef}
        >
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#11131A] z-0"
                style={{height: "200px"}}
            />
            <div className="container mx-auto px-6 xl:px-24">
                {/* Header */}
                <div className="text-center lg:text-left max-w-3xl">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                        Une Maîtrise Transversale Pour <br/> Vos Ambitions Commerciales
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Notre connaissance des secteurs d&apos;activité et la maîtrise de
                        leurs exigences nous permettent de concevoir des solutions
                        logistiques adaptées à chaque filière. ULTEX transforme cette
                        expertise en un levier stratégique pour soutenir votre croissance
                        sur le marché mondial.
                    </p>
                </div>

                {/* Main content */}
                <div className="mt-12 flex flex-col lg:flex-row gap-8 items-start">
                    {/* LEFT: rail + sticky ship (même logique que sticky top-24 de ta section solutions) */}
                    <div className="relative hidden lg:block w-[110px] self-stretch">
                        {/* tube gris avec bords doux */}
                        <div
                            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-25   from-gray-80 bg-white to-gray-80 border border-gray-200 shadow-inner"/>


                        {/* le bateau qui “descend puis colle” sous la navbar */}
                        <div className="sticky top-[var(--navbar)] pt-6 flex justify-center">
                            <Image
                                src="/images/ship.svg"
                                alt="Cargo Ship"
                                width={92}
                                height={620}
                                className="object-contain drop-shadow-md"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT: cards + text */}
                    <div className="flex-1  items-start">
                        <SectorsSplitSection
                            sectors={sectors}
                            bgImage="/images/sectors-bg.svg"
                            minHeight={600}
                            bottomSpace={120}
                            hoverZoom
                            hoverScale={1.12}
                            hoverDurationMs={800}
                            gradientBottom
                            glowTopRight
                            title="L'Import-Export, au Cœur de Votre Secteur"
                            rightImage={{
                                src: '/images/import-export.svg',
                                alt: 'Import Export',
                                width: 500,
                                height: 300,
                                className: 'rounded-lg py-10',
                            }}
                            quoteText={
                                "Chaque secteur possède ses propres exigences, normes et spécificités logistiques. Grâce à notre polyvalence, ULTEX intervient dans des domaines stratégiques à forte portée nationale et internationale. Nous comprenons les réalités de votre industrie et adaptons services logistiques et import-export à votre filière pour vous garantir des solutions optimales à chaque phase."
                            }
                        />
                        {/* bloc suivant (titre témoignages) – gardé comme chez toi */}
                        <div className="max-w-3xl mt-25 mb-12">
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                                Des Témoignages Authentique <br/> et Des Relations Durables
                            </h2>
                            <p className="mt-4 text-gray-600">
                                La satisfaction de nos clients et la solidité de nos partenariats sont
                                au cœur de notre démarche. Les témoignages que nous <br/> recevons
                                reflètent la confiance bâtie sur la qualité de nos solutions logistiques
                                et la relation humaine que nous cultivons au <br/> quotidien.
                            </p>
                        </div>
                        <div></div>
                        <div className=" mx-auto ">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-funnel-display">
                                La Voix de Nos Clients, Notre Plus Belle Référence
                            </h3>

                            {/* Testimonials row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                {testimonials.map((t, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true, amount: 0.3}}
                                        transition={{duration: 0.5, delay: i * 0.08}}
                                        className="relative rounded-xl overflow-hidden"
                                    >
                                        <Image width={500} height={100} src={"/images/testimonials/ismail.svg"}
                                               alt={"ismail"}/>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Stats band */}
                            <StatsBand
                                stats={stats}
                                defaultCardBg="/images/stats-bg.svg"
                                // + proches
                                tightGaps
                                // cartes plus petites
                                cardSize={100}
                                cardSizeMd={120}
                                // expand carte + groupe au hover
                                cardHoverScale={1.08}
                                groupHoverScale={1.02}
                                // bande de fond (facultatif)
                                bandStyle={{
                                    backgroundImage:
                                        "radial-gradient(50% 80% at 10% 50%, rgba(99,102,241,.18), transparent 60%), radial-gradient(40% 60% at 90% 20%, rgba(59,130,246,.12), transparent 55%)",
                                }}
                            />
                            <MarketPresenceSection />
                            <ResourcesStrip className={"mt-20"} items={resources}/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

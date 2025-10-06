"use client";

import Image from "next/image";
import SectorCard from "@/app/(components)/SectorCard";
import { motion } from "framer-motion";
import MarketPresenceSection from "@/app/(components)/sectors-parts/MarketPresenceSection";
import ResourcesSection from "@/app/(components)/sectors-parts/ResourcesSection";

export default function SectorsSection() {
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
        },
    ];

    const stats = [
        { value: "236", labelTop: "Clients Satisfaits" },
        { value: "16", labelTop: "Partenaires Mondiaux" },
        { value: "316", labelTop: "Opérations Réalisées" },
        { value: "11", labelTop: "Opérations Annulées" },
    ];

    // Ajuste la hauteur du header ici si besoin (6rem = ~96px)
    const navOffset = "6rem";

    return (
        <section
            className="py-20 bg-white overflow-hidden relative"
            style={{ ["--navbar" as any]: navOffset }}
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center lg:text-left max-w-3xl">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Une Maîtrise Transversale Pour <br /> Vos Ambitions Commerciales
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
                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10  bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 border border-gray-200 shadow-inner" />

                        {/* point/arc décoratifs (optionnels) */}
                        <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-3 h-3 bg-sky-500 rounded-full shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
                        <svg
                            className="absolute bottom-[11%] left-[calc(50%+1.2rem)]"
                            width="140"
                            height="60"
                            viewBox="0 0 140 60"
                            fill="none"
                        >
                            <path
                                d="M2 58 C 45 58, 90 40, 138 2"
                                stroke="#60A5FA"
                                strokeOpacity="0.6"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>

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
                        <div className={"grid lg:grid-cols-2 gap-12"}>
                        {/* cards block */}
                        <div className="bg-[#010101] rounded-xl p-6 shadow-lg">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {sectors.map((s, i) => (
                                    <SectorCard key={i} title={s.title} imgSrc={s.imgSrc}/>
                                ))}
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    className="text-gray-300 text-sm border border-gray-700/70 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                                    E-Logistics …
                                </button>
                            </div>
                        </div>

                        {/* right column text */}
                        <div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                L&apos;Import-Export, au Cœur de Votre Secteur
                            </h3>
                            <Image
                                src="/images/import-export.svg"
                                alt="Import Export"
                                width={500}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 text-gray-700 mb-6">
                                <p>
                                    Chaque secteur possède ses propres exigences, normes et
                                    spécificités logistiques. Grâce à notre polyvalence, ULTEX
                                    intervient dans des domaines stratégiques à forte portée
                                    nationale et internationale. <br/>
                                    <br/>
                                    Nous comprenons les réalités de votre industrie et adaptons nos
                                    services logistiques et import-export à votre filière pour vous
                                    garantir des solutions optimales à chaque phase.
                                </p>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">
                                Parlons de Votre Secteur
                            </h4>
                        </div>
                        </div>
                        {/* bloc suivant (titre témoignages) – gardé comme chez toi */}
                        <div className="max-w-3xl mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
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
                            <div className=" mx-auto px-6 lg:px-12">
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
                                            className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1424] to-[#0E1626] border border-white/10 shadow-[0_20px_45px_-30px_rgba(2,6,23,0.8)]"
                                        >
                                            {/* Name pill */}
                                            <div className="absolute -top-3 left-6 z-10">
                                                <span
                                                    className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800 text-gray-200 border border-white/10 shadow">
                                                  {t.name}
                                                </span>
                                            </div>

                                            {/* Left blue strip with stars */}
                                            <div
                                                className="absolute inset-y-0 left-0 w-14 bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600">
                                                <div
                                                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_35%)]"/>
                                                <div
                                                    className="flex flex-col items-center justify-center h-full text-white/95 gap-2">
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                    <StarIcon/>
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <div className="pl-16 pr-6 py-5 text-sm text-gray-200 leading-relaxed">
                                                {t.text}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Small decorative blue pill on the right (desktop only) */}
                                    <div className="hidden md:block md:col-span-3">
                                        <div
                                            className="w-10 h-16 rounded-lg bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 ml-auto mr-2 -mt-4 opacity-90"/>
                                    </div>
                                </div>

                                {/* Stats band */}
                                <div
                                    className="mt-8 rounded-2xl p-6 md:p-8 bg-[#EFF3F6] border border-gray-200/70 relative overflow-hidden"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(50% 80% at 10% 50%, rgba(99,102,241,.18), transparent 60%), radial-gradient(40% 60% at 90% 20%, rgba(59,130,246,.12), transparent 55%)",
                                    }}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {stats.map((s, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{opacity: 0, y: 16}}
                                                whileInView={{opacity: 1, y: 0}}
                                                viewport={{once: true, amount: 0.3}}
                                                transition={{duration: 0.45, delay: i * 0.05}}
                                                className="rounded-2xl p-5 text-center shadow-lg border border-white/60 bg-white/70 backdrop-blur"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(150px 120px at 30% 30%, rgba(59,130,246,.12), transparent 60%), radial-gradient(120px 140px at 70% 70%, rgba(99,102,241,.16), transparent 65%)",
                                                }}
                                            >
                                                <div
                                                    className="text-4xl md:text-5xl font-extrabold text-gray-900 font-funnel-display">
                                                    {s.value}
                                                </div>
                                                <div
                                                    className="mt-1 text-sm text-gray-700 font-medium">{s.labelTop}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* subtle dotted pattern in the corner */}
                                    <div
                                        className="pointer-events-none absolute right-2 bottom-2 w-48 h-24 rounded-xl"
                                        style={{
                                            background:
                                                "radial-gradient(circle at 2px 2px, rgba(148,163,184,.35) 1px, transparent 1.5px)",
                                            backgroundSize: "12px 12px",
                                        }}
                                    />
                                </div>
                                <MarketPresenceSection/>
                                <ResourcesSection/>
                            </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

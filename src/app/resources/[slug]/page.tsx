// src/app/resources/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";

type Resource = {
    slug: string;
    title: string;
    intro: string;
    category: string;               // pour la légende sous l'image
    categories: string[];           // pour la sidebar
    tags: string[];                 // pills en bas
    image: string;
    recentThumb?: string;
    content: Array<{ heading?: string; p: string[] }>;
};

const RESOURCES: Resource[] = [
    {
        slug: "reglementations-douanieres-2024",
        title: "Les nouvelles réglementations douanières en 2024 : ce que vous devez savoir",
        intro:
            "En cette année 2024, le monde des affaires au Maroc est en pleine ébullition avec l’entrée en vigueur de nouvelles réglementations douanières. Ces changements, bien que nécessaires pour moderniser les processus de dédouanement, représentent un défi pour les entreprises du secteur.",
        category: "Transport Maritime",
        categories: ["Commerce International", "Logistique", "Transport Maritime"],
        tags: ["Commerce International", "Douane Maroc", "Import-Export", "Réglementations"],
        image: "/images/resource-3.jpg",
        recentThumb: "/images/resource-2.jpg",
        content: [
            {
                heading: "Des exigences plus strictes",
                p: [
                    "Ces réglementations douanières de 2024 imposent des exigences plus strictes en matière de documentation et de conformité, ce qui a un impact direct sur les opérations et nos clients. Dans ce contexte, nous nous engageons fermement à respecter rigoureusement ces lois et à veiller à servir au mieux nos clients dans ce nouveau cadre réglementaire.",
                    "Pour nous, cela signifie une adaptation rapide et efficace aux nouvelles exigences. En investissant dans des solutions technologiques de pointe et en renforçant nos processus internes, nous garantissons une conformité totale à chaque étape du processus de dédouanement. De plus, en travaillant en étroite collaboration avec nos clients, nous assurons une communication transparente et une assistance personnalisée pour garantir des expéditions sans heurts et sans retard.",
                    "Pour les entreprises marocaines, se conformer aux nouvelles réglementations douanières de 2024 est essentiel pour maintenir des opérations efficaces et pérennes dans un environnement commercial en évolution constante. Grâce à notre engagement envers l’excellence opérationnelle et à notre volonté de servir nos clients avec professionnalisme, nous sommes prêts à relever ce défi et à continuer de prospérer dans le paysage logistique dynamique du Maroc.",
                ],
            },
        ],
    },
    // exemples pour “Récents”
    {
        slug: "transition-carburants-verts",
        title:
            "La transition vers des carburants plus écologiques dans le transport maritime européen offre des opportunités favorables au Maroc",
        intro:
            "Le Maroc se positionne comme un acteur clé dans la transition vers des carburants maritimes verts en Europe.",
        category: "Transport Maritime",
        categories: ["Commerce International", "Logistique", "Transport Maritime"],
        tags: ["Transition Énergétique", "Maritime", "Carburants Verts"],
        image: "/images/resource-2.jpg",
        recentThumb: "/images/resource-2.jpg",
        content: [{ p: ["…"] }],
    },
    {
        slug: "coupe-du-monde-2030-impact",
        title:
            "Coupe du monde 2030: quel impact sur l’économie du Royaume et le transport international",
        intro:
            "Un événement d’envergure mondiale qui attire des millions de spectateurs et génère des opportunités.",
        category: "Commerce International",
        categories: ["Commerce International", "Logistique"],
        tags: ["Événements", "Economie", "Transport"],
        image: "/images/resource-1.jpg",
        recentThumb: "/images/resource-1.jpg",
        content: [{ p: ["…"] }],
    },
];

function getResourceBySlug(slug: string) {
    return RESOURCES.find((r) => r.slug === slug);
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
    const resource = getResourceBySlug(params.slug);
    if (!resource) return notFound();

    const { title, intro, category, categories, tags, image, content } = resource;

    // Pour la sidebar “posts récents” (les 3 autres items)
    const recents = RESOURCES.filter((r) => r.slug !== resource.slug).slice(0, 3);

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative bg-[#050A12] text-white overflow-hidden">
                <Header/>

                {/* backdrop */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/solutions-hero.jpg" // change to your banner
                        alt="Solutions ULTex banner"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A30]/80 via-[#08111D]/70 to-[#050A12]"/>
                </div>

                <div className="relative container mx-auto px-6 lg:px-12 py-16">
                    <div className="max-w-6xl">
                        <div className="text-blue-200/90 font-semibold">
                            <span className="text-lg">Resources</span>
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
            <section className="py-10">

                <div className="container mx-auto px-6 lg:px-12">
                    {/* Breadcrumb Pills */}
                    <nav className="flex flex-wrap gap-3 mb-6">
                        <Crumb href="/" label="Home"/>
                        <Crumb href="/resources" label="Ressources"/>
                        <Crumb href="/resources/categories" label="Categories"/>
                        <Crumb href={`/resources/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                               label={category} active/>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
                        {/* === Main article === */}
                        <article>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                {title}
                            </h1>
                            <p className="mt-3 text-gray-700 max-w-3xl">{intro}</p>

                            {/* Hero image card with caption */}
                            <div className="mt-6 rounded-2xl bg-white p-3 shadow-[0_25px_70px_-30px_rgba(2,6,23,0.25)]">
                                <div className="relative w-full h-[240px] md:h-[320px] rounded-xl overflow-hidden">
                                    <Image src={image} alt={title} fill className="object-cover" priority/>
                                </div>
                                <div className="py-3 text-center font-semibold text-gray-900">
                                    {category}
                                </div>
                            </div>

                            {/* Content blocks */}
                            <div className="mt-10 space-y-8">
                                {content.map((b, i) => (
                                    <section key={i}>
                                        {b.heading && (
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                                {b.heading}
                                            </h2>
                                        )}
                                        {b.p.map((para, k) => (
                                            <p key={k} className="text-gray-700 leading-7 mb-4">
                                                {para}
                                            </p>
                                        ))}
                                    </section>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {tags.map((t) => (
                                    <span
                                        key={t}
                                        className="px-4 py-2 rounded-xl bg-white border border-blue-200 text-blue-700 font-semibold shadow-sm"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </article>

                        {/* === Sidebar === */}
                        <aside className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900">Catégories</h3>
                                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                    {Array.from(new Set(categories)).map((c) => (
                                        <li key={c} className="flex items-center justify-between">
                                            <Link
                                                href={`/resources/categories/${c.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="hover:text-blue-600"
                                            >
                                                {c}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900">Recent Posts</h3>
                                <ul className="mt-4 space-y-4">
                                    {recents.map((r) => (
                                        <li key={r.slug} className="flex gap-3">
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                                <Image
                                                    src={r.recentThumb || r.image}
                                                    alt={r.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <Link
                                                href={`/resources/${r.slug}`}
                                                className="text-sm text-gray-800 hover:text-blue-600 leading-snug"
                                            >
                                                {r.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}

/* ---------- UI bits ---------- */

function Crumb({href, label, active = false}: { href: string; label: string; active?: boolean }) {
    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-xl border text-sm font-semibold ${
                active
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
            }`}
        >
            {label}
        </Link>
    );
}

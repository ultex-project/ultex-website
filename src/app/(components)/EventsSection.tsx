// src/app/(components)/EventsSection.tsx
"use client";

import Header from "@/app/(components)/Header";

type EventItem = {
    id: string;
    title: string;
    image: string;
    href: string;
    date?: string;
    location?: string;
    excerpt?: string;
};

export default function EventsSection({
                                          events,
                                          loading = false,
                                          count = 12,
                                      }: {
    events?: EventItem[];
    loading?: boolean;   // if true, show skeletons
    count?: number;      // how many skeletons to render
}) {
    const showSkeleton = loading || !events || events.length === 0;

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
                    Participations ULTex aux Salons et
                    <br className="hidden md:block" />
                    Forums Logistiques
                </h2>
                <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-center">
                    ULTex participe activement aux grands évènements du secteur logistique, de l&apos;import-export
                    et du commerce international. À travers des salons, forums et rencontres professionnelles,
                    nous développons notre présence et notre réseau grâce à des partenariats stratégiques.
                </p>

                {/* Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {showSkeleton
                        ? Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)
                        : events!.map((e) => <EventCard key={e.id} item={e} />)}
                </div>
            </div>
        </section>
    );
}

/* ---------- UI bits ---------- */

// Minimal skeleton matching your mock (plain grey rounded tiles)
function SkeletonCard() {
    return (
        <div className="h-48 md:h-56 rounded-xl bg-gray-200 animate-pulse" />
    );
}

// Optional real card if/when you have data
function EventCard({ item }: { item: EventItem }) {
    return (
        <a
            href={item.href}
            className="group block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-[0_18px_40px_-20px_rgba(2,6,23,0.2)]"
        >
            <div className="h-40 md:h-44 bg-gray-100">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-4">
                <div className="text-sm text-gray-500">
                    {[item.date, item.location].filter(Boolean).join(" • ")}
                </div>
                <h3 className="mt-1 text-[15px] font-semibold text-gray-900 group-hover:text-blue-600">
                    {item.title}
                </h3>
                {item.excerpt && (
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                )}
            </div>
        </a>
    );
}

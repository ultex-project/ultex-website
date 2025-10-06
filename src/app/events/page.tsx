// src/app/events/page.tsx
import EventsSection from "@/app/(components)/EventsSection";
import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import Image from "next/image";

export const metadata = {
    title: "Événements | ULTex",
    description:
        "Participations ULTex aux salons, forums et rencontres logistiques.",
};

export default function EventsPage() {
    return (
        <main className="bg-white">
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
            <EventsSection loading count={16} />
            <Footer/>
        </main>
    );
}

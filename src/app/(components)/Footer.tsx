// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import ContactBridgeCTA from "@/app/(components)/ContactBridgeCTA";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#11131A] w-full text-white pt-12 pb-6">
            {/* Centered background image */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <Image
                    src="/images/footer-bg.svg"        // <-- your centered bg image
                    alt=""
                    width={900}                         // size you want (scales down on small screens)
                    height={900}
                    sizes="(min-width:1024px) 900px, 80vw"
                    className="opacity-20 object-contain max-w-[90vw] md:max-w-[70vw]"
                    priority={false}
                />
            </div>

            {/* All content above the background */}
            <div className="relative z-10">
                <ContactBridgeCTA/>

                <div className="container mx-auto mt-[150px] px-6 xl:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <Image src="/images/logo.svg" alt="ULTEX Logo" width={150} height={50} />
                            <p className="mt-4 text-sm text-gray-400">
                                Acteur marocain stratégique en logistique et import-export, ULTEX déploie une présence active en Chine, en Turquie et dans d'autres hubs clés pour dynamiser vos projets à l'échelle mondiale.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Accès Rapide</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/">Accueil</Link></li>
                                <li><Link href="/about">À Propos</Link></li>
                                <li><Link href="/solutions">Solutions</Link></li>
                                <li><Link href="/events">Événements</Link></li>
                                <li><Link href="/resources">Ressources</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Médias Sociaux</h4>
                            <p className="text-sm text-gray-400">
                                Restez connecté à la communauté ULTEX et suivez nos dernières actualités sur les médias sociaux.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Service Client</h4>
                            <div className="space-y-2 text-sm">
                                <div>Casablanca<br />(+212) 522-862135</div>
                                <div>Marrakech<br />(+212) 674-755993</div>
                                <div>Tanger<br />(+212) 524-304462</div>
                                <div>Rabat<br />(+212) 774-004544</div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-[200px] pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">ULTEX © 2025 - Tous droits réservés.</p>
                        <p className="text-sm text-gray-400 mt-2 md:mt-0">Réalisation: © OneWeb</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

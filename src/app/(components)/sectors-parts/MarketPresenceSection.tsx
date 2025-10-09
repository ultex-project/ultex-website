// src/app/(components)/MarketPresenceSection.tsx
"use client";

export default function MarketPresenceSection() {
    return (
            <div className="my-5">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-5xl font-funnel-display">
                    Profitez de Notre Présence Sur les Marchés Stratégiques et
                    <br className="hidden md:block" />
                    Boostez Votre Commerce Vers L&apos;Excellence.
                </h2>
                <p className="mt-2 text-sm font-semibold text-gray-800">Demandez Votre Devis</p>

                {/* Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <Feature
                        icon={"/icons/hub.svg"}
                        title="Hubs Stratégiques"
                        desc="Grâce à ses antennes et ses représentants locaux, ULTEX intervient sur des marchés clés comme la Chine et la Turquie."
                    />
                    <Feature
                        icon={"/icons/partner.svg"}
                        title="Partenaires Certifiés"
                        desc="Un réseau mondial de collaborateurs spécialisés, pour garantir qualité, conformité et sécurité à chaque étape."
                    />
                    <Feature
                        icon={"/icons/services.svg"}
                        title="Services Sécurisés"
                        desc="Des protocoles et des mesures de sécurité élevées pour préserver vos produits dans le respect des normes internationales."
                    />
                </div>
            </div>
    );
}

/* --- Small building blocks --- */
function Feature({
                     icon,
                     title,
                     desc,
                 }: {
    icon: string;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="shrink-0"><img src={icon}/></div>
            <div>
                <h4 className="text-base font-semibold text-gray-900">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
        </div>
    );
}

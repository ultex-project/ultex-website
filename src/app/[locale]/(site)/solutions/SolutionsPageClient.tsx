// src/app/solutions/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import DeleteWithMovingCursor from "@/app/(components)/DeleteBackwardButton";
import Footer from "@/app/(components)/Footer";
import HeroPage from "@/app/(components)/HeroPage";
import QuoteCard from "@/app/(components)/QuoteCard";

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
          <h3 className="text-4xl  font-extrabold text-gray-900 leading-tight">
            {title}
            {subtitle && (
              <>
                <br />
                <span className="font-semibold">{subtitle}</span>
              </>
            )}
          </h3>
          <div className={"mt-[40px]"}>
            <QuoteCard text={note} />
          </div>
          {/* Bullets */}
          {bullets.length > 0 && (
            <ul className="mt-5 space-y-2 mb-5 text-gray-700">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-300 inline-block" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Subtle helper link under bullets */}
          <DeleteWithMovingCursor
            text="Meilleure solution"
            mode="delete"
            stepMs={90}
            loop
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function SolutionsPageClient() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/solutions-hero.jpg"
        eyebrow="Solutions"
        title="ULTex"
      />
      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 py-14">
        <div className="container mx-auto text-center py-16">
          <h1 className="mt-8 text-3xl md:text-5xl font-extrabold font-funnel-display leading-tight">
            Solutions Logistique Globales
            <br />
            et Import-Export Sur Mesure
          </h1>

          <p className="mt-4  text-gray-500">
            ULTEx simplifie votre commerce international grâce à des services et
            solutions complètes, fiables, agiles, sécurisées <br /> et
            évolutives, du sourcing à la livraison finale. Nous veillons à la
            fluidité de vos flux et à l’efficacité de vos opérations à <br />{" "}
            chaque étape du processus, avec une approche orientée résultats.
          </p>
        </div>
        <SolutionBlock
          align="left"
          title="Sourcing"
          subtitle="et Relation Fournisseurs"
          image="/images/solution-sourcing.svg" // replace with your asset
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
          image="/images/solution-quality.svg"
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
          image="/images/solution-sourcing.svg" // replace with your asset
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
          image="/images/solution-quality.svg"
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
          image="/images/solution-sourcing.svg" // replace with your asset
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
          image="/images/solution-quality.svg"
          imageAlt="Contrôle qualité"
          note="Nous assurons un contrôle rigoureux de la qualité de vos produits tout au long du processus d’import-export, en veillant à leur conformité avec les normes nationales et internationales. Des inspections sur-mesure, sur vos organisations et vos exigences spécifiques."
          bullets={[
            "Inspection avant expédition",
            "Vérification des certificats",
            "Gestion des non-conformités",
          ]}
        />
      </div>
      <Footer />
    </main>
  );
}

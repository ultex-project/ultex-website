// src/app/(components)/page.tsx
"use client";

import { useState } from "react";
import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import Image from "next/image";
import QuoteCard from "@/app/(components)/QuoteCard";
import DeleteWithMovingCursor from "@/app/(components)/DeleteBackwardButton";
import HeroPage from "@/app/(components)/HeroPage";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Le délai dépend principalement de deux variables :",
    a: "Le type de marchandise et l’itinéraire choisi (maritime, aérien, routier). Nous optimisons le transit en fonction de vos priorités coût/délai.",
  },
  {
    q: "Le délai dépend principalement de deux variables :",
    a: "Les procédures douanières requises et la période (haute saison, pics). Nous anticipons les goulots d’étranglement.",
  },
  {
    q: "Le délai dépend principalement de deux variables :",
    a: "La disponibilité des transporteurs et les contraintes portuaires. Nous proposons des plans B/C pour sécuriser l’échéance.",
  },
  {
    q: "Le délai dépend principalement de deux variables :",
    a: "La préparation documentaire et la conformité. Nous vous guidons pour éviter les retards au dédouanement.",
  },
  {
    q: "Le délai dépend principalement de deux variables :",
    a: "Les volumes (LCL/FCL) et les regroupements possibles. Nous ajustons la solution au meilleur ratio.",
  },
  {
    q: "Le délai dépend principalement de deux variables :",
    a: "Les assurances, contrôles qualité et inspections optionnelles. Nous planifions ces étapes sans perturber le lead time.",
  },
];

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact request:", data);
    alert(
      "Merci ! Votre demande a bien été reçue. Nous revenons vers vous rapidement.",
    );
    e.currentTarget.reset();
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        bgSrc="/images/solutions-hero.jpg"
        eyebrow="Resources"
        title="ULTex"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Titre principal */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Vous Êtes à un Clic de Solutions{" "}
              <br className="hidden md:block" />
              Logistiques Performantes
            </h2>
            <p className="mt-3 text-gray-600">
              ULTex vous aide à franchir les barrières logistiques, douanières
              et commerciales grâce à un accompagnement sur mesure et un réseau
              international solide. Avec ULTEX, vous bénéficiez d’une prise en
              charge fluide et d’un soutien stratégique pour aller plus loin,
              plus vite.
            </p>
          </div>

          {/* Grille Contact + FAQ */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Formulaire */}
            <div className="rounded-2xl bg-white p-5 border border-gray-200 shadow-[0_25px_60px_-35px_rgba(2,6,23,0.3)]">
              {/* Encadré jaune (note) */}
              <QuoteCard
                text={
                  "Chaque demande est analysée avec soin afin de vous orienter vers les solutions les plus adaptées à vos objectifs. Pour vous garantir une réponse rapide et précise, nous vous invitons à remplir tous les champs du formulaire."
                }
              />
              <DeleteWithMovingCursor
                text="Better Solution"
                mode="delete"
                stepMs={90}
                loop
              />

              {/* “Better Solution” badge */}

              <form onSubmit={onSubmit} className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="fullName" label="Nom Complet" required />
                  <Input name="industry" label="Secteur d’activité" />
                  <Input name="company" label="Société" />
                  <Input name="email" type="email" label="Email" required />
                  <Input name="location" label="Pays / Ville" />
                  <Input name="subject" label="Sujet de demande" />
                  <div className="sm:col-span-2">
                    <Textarea
                      name="message"
                      label="Message"
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md border border-blue-600 text-blue-600 px-5 py-2 font-semibold hover:bg-blue-50 transition"
                  >
                    ➤ ENVOYER
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Consultez les Réponses aux Questions Fréquentes
              </h3>
              <div className="space-y-3">
                {faqs.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={i}
                      className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-gray-900">
                          {item.q}
                        </span>
                        <Chevron open={isOpen} />
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-4 text-gray-600">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mini CTA bas de section */}
          <div className="mt-16 text-center">
            <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Faites Votre Premier Pas Vers une{" "}
              <br className="hidden md:block" />
              Logistique Sans Frontières
            </h4>

            {/* 3 atouts */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Feature
                icon={<IconFlex />}
                title="Des Solutions Fiables et Flexibles"
              />
              <Feature
                icon={<IconOffer />}
                title="Une Offre Détaillée et Sur-Mesure"
              />
              <Feature
                icon={<IconHandshake />}
                title="Une Relation de Partenariat Durable"
              />
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-blue-600 text-blue-600 px-5 py-2 font-semibold hover:bg-blue-50 transition"
              >
                ➤ Rendez-Vous
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- UI bits ---------- */

function Input({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
        placeholder={label}
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 5,
  required,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
        placeholder={label}
      />
    </label>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/* Icons (bleu) */
function IconFlex() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 text-blue-600 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <path d="M17.5 14.5l2 2-4 4-2-2z" />
    </svg>
  );
}
function IconOffer() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 text-blue-600 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h18M6 3h12M5 11h14M4 15h16M6 19h12" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 text-blue-600 mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12l5-5 4 4 4-4 5 5" />
      <path d="M8 17l4-4 4 4" />
    </svg>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="text-center">
      <div>{icon}</div>
      <div className="mt-2 text-sm font-semibold text-gray-900">{title}</div>
    </div>
  );
}

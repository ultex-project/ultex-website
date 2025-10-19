// src/components/ServiceFlowSection.tsx
"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

const stepConfig = [
  { key: "expert", icon: "/icons/team-icon.png" },
  { key: "global", icon: "/icons/global-icon.png" },
  { key: "pricing", icon: "/icons/price-icon.png" },
] as const;

export default function ServiceFlowSection() {
  const tSections = useTranslations("sections.serviceFlow");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const steps = stepConfig.map((step, index) => ({
    id: index + 1,
    title: tSections(`steps.${step.key}.title`),
    description: tSections(`steps.${step.key}.description`),
    icon: step.icon,
  }));
  const taglineLines = tSections("footer.tagline").split("\\n");

  return (
    <section className="py-20 bg-[#11131A] text-white">
      <div className="container mx-auto px-6">
        {/* Main Flow */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
          {/* Left Illustration */}
          <div className="lg:w-[280px] flex justify-center">
            <Image
              src="/images/amazing-serving.png"
              alt="Amazing service illustration"
              width={182}
              height={216}
              className="h-auto w-full max-w-[260px]"
              priority
            />
          </div>

          {/* Steps */}
          <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-stretch">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative flex-1 lg:max-w-[400px] rounded-2xl overflow-hidden ${
                  isRtl ? "text-right" : ""
                }`}
              >
                {/* Arrow as a background layer INSIDE the card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-0 hidden lg:block pointer-events-none"
                >
                  {/* Option A: as img */}
                  <img
                    src="/images/arrow-step.svg"
                    alt=""
                    className={`absolute top-0 h-full w-auto opacity-90 select-none ${
                      isRtl ? "left-0" : "right-0"
                    }`}
                    style={isRtl ? { transform: "scaleX(-1)" } : undefined}
                    draggable={false}
                  />
                  {/* Option B (lighter): as CSS bg image
    <div className="absolute inset-0 bg-[url('/images/arrow-step.svg')] bg-no-repeat bg-right bg-contain opacity-90" />
    */}
                </div>

                {/* Content (over the arrow) */}
                <div className="relative z-10 flex h-full min-h-[210px] flex-col gap-6 rounded-2xl px-8 py-10 lg:px-10">
                  {/* Keep a subtle gradient for readability on all sizes (tuned to let arrow show) */}
                  <div className="absolute inset-0 rounded-2xl " />
                  <div className={`relative z-10 flex flex-col gap-4 lg:max-w-[280px] ${isRtl ? "lg:ml-auto" : ""}`}>
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <div
            className={`inline-flex items-center gap-3 text-meduim text-gray-400 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <img
              src={"/images/cursor.svg"}
              className={
                isRtl
                  ? "inline-block h-10 text-white relative top-[-9px] right-[-7px] rotate-180"
                  : "inline-block h-10 text-white relative top-[-9px] left-[-7px]"
              }
              alt=""
            />
            {taglineLines.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </div>
          <h3 className="mt-6 text-2xl text-white font-semibold">
            {tSections("footer.cta")}
          </h3>
        </div>
      </div>
    </section>
  );
}

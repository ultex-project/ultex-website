// src/app/(components)/MarketPresenceSection.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";

export default function MarketPresenceSection() {
  const tSections = useTranslations("sections.marketPresence");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div className={`my-5 ${isRtl ? "text-right" : ""}`}>
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-5xl font-funnel-display">
        {tSections("heading.line1")}
        <br className="hidden md:block" />
        {tSections("heading.line2")}
      </h2>
      <p className="mt-2 text-sm font-semibold text-gray-800">
        {tSections("subtitle")}
      </p>

      {/* Features */}
      <div className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 ${isRtl ? "md:text-right" : ""}`}>
        <Feature
          icon={"/icons/hub.svg"}
          title={tSections("features.hubs.title")}
          desc={tSections("features.hubs.description")}
          isRtl={isRtl}
        />
        <Feature
          icon={"/icons/partner.svg"}
          title={tSections("features.partners.title")}
          desc={tSections("features.partners.description")}
          isRtl={isRtl}
        />
        <Feature
          icon={"/icons/services.svg"}
          title={tSections("features.services.title")}
          desc={tSections("features.services.description")}
          isRtl={isRtl}
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
  isRtl,
}: {
  icon: string;
  title: string;
  desc: string;
  isRtl: boolean;
}) {
  return (
    <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
      <div className="shrink-0">
        <img src={icon} alt="" />
      </div>
      <div className={isRtl ? "text-right" : ""}>
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

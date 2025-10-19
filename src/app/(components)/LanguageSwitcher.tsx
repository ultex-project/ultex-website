"use client";

import { useLocale } from "next-intl";

import { AppLocale } from "@/i18n";

const options: Array<{ locale: AppLocale; label: string }> = [
  { locale: "fr", label: "🇫🇷 FR" },
  { locale: "en", label: "🇬🇧 EN" },
  { locale: "ar", label: "🇸🇦 AR" },
];

export default function LanguageSwitcher() {
  const currentLocale = useLocale() as AppLocale;

  return (
    <div className="flex items-center gap-2">
      {options.map(({ locale, label }) => {
        const isActive = locale === currentLocale;

        return (
          <a
            key={locale}
            href={`/${locale}`}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
              isActive
                ? "bg-white text-black shadow-sm"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}

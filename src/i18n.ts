import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["ar", "fr", "en"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "fr";
export const localePrefix = "always" as const;

export const rtlLocales: readonly AppLocale[] = ["ar"];

export function getLocaleDirection(locale: string): "ltr" | "rtl" {
  return rtlLocales.includes(locale as AppLocale) ? "rtl" : "ltr";
}

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

async function loadMessages(locale: AppLocale) {
  const [common, nav, footer, hero, sections, meta] = await Promise.all([
    import(`./locales/${locale}/common.json`),
    import(`./locales/${locale}/nav.json`),
    import(`./locales/${locale}/footer.json`),
    import(`./locales/${locale}/hero.json`),
    import(`./locales/${locale}/sections.json`),
    import(`./locales/${locale}/meta.json`),
  ]);

  return {
    common: common.default,
    nav: nav.default,
    footer: footer.default,
    hero: hero.default,
    sections: sections.default,
    meta: meta.default,
  } as const;
}

export default getRequestConfig(async ({
  requestLocale,
}: {
  requestLocale: Promise<string | undefined>;
}) => {
  const localeFromRequest = await requestLocale;
  const resolvedLocale = locales.includes(localeFromRequest as AppLocale)
    ? (localeFromRequest as AppLocale)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: await loadMessages(resolvedLocale),
  };
});

import type { MetadataRoute } from "next";

import { SITE_ORIGIN, ROUTE_PATHS } from "@/config/site";
import { defaultLocale, locales } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  Object.values(ROUTE_PATHS).forEach((path) => {
    const suffix = path === "" ? "" : path;
    const canonical = `${SITE_ORIGIN}/${defaultLocale}${suffix}`;
    const languages = locales.reduce<Record<string, string>>((acc, locale) => {
      acc[locale] = `${SITE_ORIGIN}/${locale}${suffix}`;
      return acc;
    }, {});

    entries.push({
      url: canonical,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages,
      },
    });
  });

  return entries;
}

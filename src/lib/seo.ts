import type { Metadata } from "next";

import { SITE_ORIGIN, ROUTE_PATHS, type RouteKey } from "@/config/site";
import { AppLocale, defaultLocale, locales } from "@/i18n";

const FALLBACK_OG_IMAGE = "/images/hero-bg.png";

function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

type RouteMeta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  keywords?: string[];
};

type MetaJson = {
  site: RouteMeta;
  routes: Record<RouteKey, RouteMeta>;
};

async function loadMeta(locale: AppLocale): Promise<MetaJson> {
  switch (locale) {
    case "ar":
      return (await import("@/locales/ar/meta.json")) as MetaJson;
    case "en":
      return (await import("@/locales/en/meta.json")) as MetaJson;
    case "fr":
    default:
      return (await import("@/locales/fr/meta.json")) as MetaJson;
  }
}

function buildAlternates(locale: AppLocale, path: string) {
  const suffix = path === "" ? "" : path;
  const languages: Record<string, string> = {};

  locales.forEach((loc) => {
    languages[loc] = `${SITE_ORIGIN}/${loc}${suffix}`;
  });

  return {
    canonical: `${SITE_ORIGIN}/${locale}${suffix}`,
    languages,
  };
}

function resolveRouteMeta(meta: MetaJson, route: RouteKey) {
  const site = meta.site ?? {};
  const page = meta.routes?.[route] ?? {};
  return {
    title: page.title ?? site.title ?? "",
    description: page.description ?? site.description ?? "",
    ogTitle: page.ogTitle ?? page.title ?? site.ogTitle ?? site.title ?? "",
    ogDescription:
      page.ogDescription ?? page.description ?? site.ogDescription ?? site.description ?? "",
    ogImage: toAbsoluteUrl(page.ogImage ?? site.ogImage ?? FALLBACK_OG_IMAGE),
    twitterTitle:
      page.twitterTitle ?? page.ogTitle ?? page.title ?? site.ogTitle ?? site.title ?? "",
    twitterDescription:
      page.twitterDescription ?? page.ogDescription ?? page.description ?? site.description ?? "",
    keywords: page.keywords ?? site.keywords,
  };
}

export async function buildPageMetadata({
  locale,
  route,
}: {
  locale: AppLocale;
  route: RouteKey;
}): Promise<Metadata> {
  const meta = await loadMeta(locale);
  const resolved = resolveRouteMeta(meta, route);
  const path = ROUTE_PATHS[route];
  const alternates = buildAlternates(locale, path);
  const url = alternates.canonical;

  const metadata: Metadata = {
    title: resolved.title,
    description: resolved.description,
    alternates,
    openGraph: {
      title: resolved.ogTitle,
      description: resolved.ogDescription,
      url,
      siteName: meta.site.title ?? "ULTEX",
      locale,
      type: "website",
      images: [
        {
          url: resolved.ogImage,
          alt: resolved.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolved.twitterTitle,
      description: resolved.twitterDescription,
      images: [resolved.ogImage],
    },
  };

  if (resolved.keywords?.length) {
    metadata.keywords = resolved.keywords;
  }

  return metadata;
}

type SiteMetaOptions = {
  locale: AppLocale;
};

export async function buildSiteMetadata({ locale }: SiteMetaOptions): Promise<Metadata> {
  const meta = await loadMeta(locale);
  const site = resolveRouteMeta(meta, "home");
  const alternates = buildAlternates(locale, ROUTE_PATHS.home);
  const url = alternates.canonical;

  const metadata: Metadata = {
    title: site.title,
    description: site.description,
    alternates,
    openGraph: {
      title: site.ogTitle,
      description: site.ogDescription,
      url,
      siteName: meta.site.title ?? site.title,
      locale,
      type: "website",
      images: [
        {
          url: site.ogImage,
          alt: site.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.twitterTitle,
      description: site.twitterDescription,
      images: [site.ogImage],
    },
  };

  if (site.keywords?.length) {
    metadata.keywords = site.keywords;
  }

  return metadata;
}

export function buildRobotsEntries() {
  return {
    host: SITE_ORIGIN.replace(/^https?:\/\//, ""),
    sitemap: [`${SITE_ORIGIN}/sitemap.xml`],
  };
}

export function getCanonicalUrl(locale: AppLocale, route: RouteKey): string {
  const path = ROUTE_PATHS[route];
  const suffix = path === "" ? "" : path;
  return `${SITE_ORIGIN}/${locale}${suffix}`;
}

export function getDefaultLocale(): AppLocale {
  return defaultLocale;
}

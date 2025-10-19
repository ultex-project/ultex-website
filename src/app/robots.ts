import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const host = SITE_ORIGIN.replace(/^https?:\/\//, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${SITE_ORIGIN}/sitemap.xml`],
    host,
  };
}

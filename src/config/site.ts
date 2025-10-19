export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ultex.com";

export const ROUTE_PATHS = {
  home: "",
  about: "/about",
  solutions: "/solutions",
  events: "/events",
  resources: "/resources",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTE_PATHS;

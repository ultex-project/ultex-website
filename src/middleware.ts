import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n";

export default createMiddleware({
  ...routing,
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

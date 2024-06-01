import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";
export default createMiddleware({
  // A list of all locales that are supported
  localePrefix,
  locales,

  // Used when no locale matches
  defaultLocale: "zh-hant",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(zh-hant|en)/:path*"],
};

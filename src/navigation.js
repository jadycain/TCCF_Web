import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["zh-hant", "en"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

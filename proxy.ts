import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, hasLocale, localeCookie, locales } from "@/i18n/config";

function preferredLocale(request: NextRequest) {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && hasLocale(saved)) return saved;

  // Georgian if the browser lists it anywhere; English otherwise.
  const accepted = request.headers.get("accept-language") ?? "";
  return /(^|,)\s*ka\b/i.test(accepted) ? "ka" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasPrefix) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any path with a file extension (images, CV, icons).
  matcher: ["/((?!_next|.*\\..*).*)"],
};

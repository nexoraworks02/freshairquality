import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Country block: visitors from these countries get a 403 page.
// Uses Vercel's geo header, so it only works when hosted on Vercel.
const BLOCKED_COUNTRIES = new Set(["PK"]);

// Search engines and link-preview bots always get through (SEO + share previews).
const ALLOWED_BOTS =
  /Googlebot|AdsBot-Google|Google-InspectionTool|Bingbot|DuckDuckBot|Applebot|facebookexternalhit|Meta-ExternalAgent|WhatsApp|Twitterbot|LinkedInBot|Slackbot/i;

const BLOCKED_PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Not available in your region</title>
<style>
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: system-ui, sans-serif; background: #f4f7fb; color: #032a5b; }
  main { padding: 24px; text-align: center; }
  h1 { font-size: 1.5rem; margin: 0 0 12px; }
  p { margin: 0; color: #4a5a72; }
</style>
</head>
<body>
<main>
  <h1>Not available in your region</h1>
  <p>Sorry, this website is not available in your region.</p>
</main>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");

  // Fail open: no header (local dev, unknown location) → let it through.
  if (!country || !BLOCKED_COUNTRIES.has(country.trim().toUpperCase())) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (ALLOWED_BOTS.test(userAgent)) {
    return NextResponse.next();
  }

  return new NextResponse(BLOCKED_PAGE, {
    status: 403,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export const config = {
  // Everything except Next.js static files, image optimisation, robots.txt and sitemap.xml.
  matcher: ["/((?!_next/static|_next/image|robots\\.txt|sitemap\\.xml).*)"],
};

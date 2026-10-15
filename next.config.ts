import type { NextConfig } from "next";

// Old WordPress URL shapes → new pages. permanent: true issues a 308 so users
// and Google carry over cleanly. Province pages keep their exact WordPress
// URLs (/ontario/, /alberta/, …) so they need no redirect.
const wordpressRedirects = [
  { source: "/index.php", destination: "/" },
  { source: "/index.php/:path*", destination: "/:path*" },
  { source: "/sitemap_index.xml", destination: "/sitemap.xml" },
  { source: "/page-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/wp-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/home", destination: "/" },
  { source: "/contact", destination: "/#contact" },
  { source: "/about", destination: "/#about" },
  // The GTA is now part of the Ontario page (and its city pages).
  { source: "/greater-toronto-area", destination: "/ontario/" },
  { source: "/greater-toronto-area/:city", destination: "/ontario/:city/" },
].map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = {
  // WordPress URLs end in "/" — keep the same shape for SEO continuity.
  trailingSlash: true,
  images: {
    // AVIF first (sharpest per byte), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Next 16 only allows listed qualities: 75 = default, 90 = large photos.
    qualities: [75, 90],
  },
  async redirects() {
    return wordpressRedirects;
  },
};

export default nextConfig;

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
].map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = {
  // WordPress URLs end in "/" — keep the same shape for SEO continuity.
  trailingSlash: true,
  async redirects() {
    return wordpressRedirects;
  },
};

export default nextConfig;

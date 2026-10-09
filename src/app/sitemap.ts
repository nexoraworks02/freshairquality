import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { serviceDetails } from "@/config/services";
import { provincePages } from "@/config/service-areas";

const siteUrl = site.url;

// Every URL ends with "/" to match next.config trailingSlash (and the old
// WordPress URLs).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = Object.keys(serviceDetails).map(
    (slug) => ({
      url: `${siteUrl}/services/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const provinceLandingPages: MetadataRoute.Sitemap = provincePages.map((p) => ({
    url: `${siteUrl}/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/service-areas/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...provinceLandingPages,
    ...servicePages,
  ];
}

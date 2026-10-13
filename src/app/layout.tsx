import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Heebo } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MetaPixel } from "@/components/MetaPixel";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Heebo for body + headings (matches the reference design).
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const siteUrl = site.url;

export const metadata: Metadata = {
  title: {
    default: `Fresh Air Quality | Air Duct Cleaning Services | Free Quote!`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  keywords: [
    "air duct cleaning Canada",
    "duct cleaning near me",
    "dryer vent cleaning",
    "furnace cleaning",
    "HVAC cleaning",
    "air duct cleaning Toronto",
    "air duct cleaning GTA",
    "HRV cleaning",
    "Fresh Air Quality",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `Air Duct Cleaning Services | ${site.name}`,
    description: site.description,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `Air Duct Cleaning Services | ${site.name}`,
    description: site.description,
  },
  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.name,
  description: site.description,
  url: siteUrl,
  telephone: site.defaultPhone,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Colborne Street",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  image: `${siteUrl}/opengraph-image`,
  sameAs: [site.facebookUrl, site.instagramUrl].filter(Boolean),
  areaServed: [
    ...[
      "Ontario",
      "Alberta",
      "Quebec",
      "British Columbia",
      "Manitoba",
      "Saskatchewan",
      "Nova Scotia",
      "New Brunswick",
      "Prince Edward Island",
      "Newfoundland and Labrador",
    ].map((name) => ({ "@type": "State", name })),
    { "@type": "Country", name: "Canada" },
  ],
  makesOffer: [
    "Air Duct Cleaning",
    "Furnace Cleaning",
    "Dryer Vent Cleaning",
    "Air Conditioning Coil Cleaning",
    "HRV Cleaning",
    "Central Vacuum Cleaning",
    "Brush Cleaning",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink pb-16 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MetaPixel />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <MobileCTABar />
        <WhatsAppButton />
      </body>
      {/* GA4 loads only once a real Measurement ID is set in site config */}
      {site.gaMeasurementId && <GoogleAnalytics gaId={site.gaMeasurementId} />}
    </html>
  );
}

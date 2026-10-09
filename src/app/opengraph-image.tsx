import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Social share card shown when the site is shared on Facebook, WhatsApp, X, etc.
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #0A1120 0%, #10203A 55%, #0A1120 100%)",
          fontFamily: "sans-serif",
          padding: "72px",
        }}
      >
        {/* Emblem — drawn inline so it needs no asset */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 150,
            height: 150,
            borderRadius: 40,
            background: "linear-gradient(135deg, #2F7AD8 0%, #22407a 100%)",
            border: "3px solid rgba(174,191,214,0.7)",
            marginBottom: 34,
          }}
        >
          <svg width="90" height="90" viewBox="0 0 48 48" fill="none">
            <g stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round">
              <path d="M12 18c8 0 14 0 18-2.5a4.2 4.2 0 1 0-4.2-4.2" />
              <path d="M12 24.5h16.5a4 4 0 1 1-4 4" stroke="#F7A14A" />
              <path d="M12 31c7 0 12 0 15.5 2a3.6 3.6 0 1 1-3.6 3.6" />
            </g>
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 6,
            color: "#F7A14A",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Certified Duct Cleaning · Canada
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            marginTop: 18,
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{ display: "flex", fontSize: 38, color: "#C3CEDD", marginTop: 20 }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            color: "#F7A14A",
            marginTop: 34,
          }}
        >
          {site.defaultPhone}
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

import { getSiteConfig } from "@/lib/content";

export const alt = "Dima Markus portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const site = getSiteConfig();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.35), transparent 34%), #0b1120",
          color: "#e5e7eb",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(148,163,184,0.16)",
            borderRadius: "28px",
            background: "rgba(15,23,42,0.74)",
            padding: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "14px",
                  width: "14px",
                  borderRadius: "999px",
                  background: "#60a5fa",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: "22px",
                  color: "#93c5fd",
                  textTransform: "uppercase",
                  letterSpacing: "0.24em",
                }}
              >
                Standalone portfolio
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "920px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "68px",
                  fontWeight: 700,
                  lineHeight: 1.05,
                }}
              >
                {site.name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "34px",
                  lineHeight: 1.3,
                  color: "#cbd5e1",
                }}
              >
                {site.title}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "28px",
                  lineHeight: 1.45,
                  color: "#94a3b8",
                  maxWidth: "820px",
                }}
              >
                {site.summary}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "24px",
              color: "#94a3b8",
            }}
          >
            <div style={{ display: "flex" }}>{site.location}</div>
            <div style={{ display: "flex", color: "#e5e7eb" }}>{site.siteUrl}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

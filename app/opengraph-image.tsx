import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Goga Danelia Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "center",
          background:
            "linear-gradient(180deg, #050816 0%, #0f172a 100%)",
          padding: "80px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: "rgba(34,211,238,0.18)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#22d3ee",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1,
            maxWidth: "850px",
          }}
        >
          Goga Danelia
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#94a3b8",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Building modern dashboards, authentication systems,
          scalable interfaces, and production-ready web apps
          with Next.js, React, TypeScript, and Tailwind CSS.
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 48,
          }}
        >
          {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
            (item) => (
              <div
                key={item}
                style={{
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
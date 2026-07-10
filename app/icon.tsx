import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const COLORS = {
  canvas: "#000000",
  ink: "#ffffff",
  mBlueDark: "#1c69d4",
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.canvas,
          borderRadius: "50%",
          border: `2px solid ${COLORS.mBlueDark}`,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: COLORS.ink,
            fontFamily: "sans-serif",
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size }
  );
}
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const DEFAULT_IMAGE = "https://avatars.githubusercontent.com/u/70329467?v=4";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://jkominovic.vercel.app";

export function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const imageUrl = searchParams.get("imageUrl");

    const imageSrc = imageUrl ? `${BASE_URL}${imageUrl}` : DEFAULT_IMAGE;

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "black",
            backgroundImage:
              "linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(13,13,13,1) 100%)",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "left",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "column",
              flexWrap: "nowrap",
              maxWidth: "50%",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontStyle: "normal",
                fontWeight: 900,
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                letterSpacing: "-0.025em",
                color: "white",
                marginTop: 30,
                padding: "0 60px",
                lineHeight: 1,
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 300,
                color: "#444",
                fontStyle: "normal",
                letterSpacing: "-0.025em",
                marginTop: 30,
                lineClamp: 3,
                padding: "0 60px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </div>
          </div>
          <img
            src={imageSrc}
            alt="Julian Kominovic profile pic"
            style={{
              maxWidth: "40%",
              position: imageUrl ? "absolute" : "relative",
              right: imageUrl ? "-20%" : "0",
              objectFit: "contain",
              borderRadius: imageUrl ? "24px" : "50%",
              overflow: "hidden",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

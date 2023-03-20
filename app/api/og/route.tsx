import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return new ImageResponse(
      (
        <div
          style={{
            padding: "0 120px",
            backgroundColor: "black",
            backgroundImage:
              "linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(13,13,13,1) 100%)",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <img
            src={`https://avatars.githubusercontent.com/u/70329467?v=4`}
            width={200}
            height={200}
            alt="Julian Kominovic profile pic"
            style={{
              aspectRatio: "1/1",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              display: "flex",
              textAlign: "left",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "column",
              flexWrap: "nowrap",
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontStyle: "normal",
                fontWeight: 900,
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                letterSpacing: "-0.025em",
                color: "white",
                marginTop: 30,
                padding: "0 120px",
                lineHeight: 1,
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 300,
                maxWidth: "80%",
                color: "#444",
                fontStyle: "normal",
                letterSpacing: "-0.025em",
                marginTop: 30,
                padding: "0 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </div>
          </div>
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

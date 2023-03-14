import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export type OGType = {
  title: string;
  description: string;
  image: {
    height: number | null;
    type: string;
    url: string;
    width: number | null;
  };
  error?: boolean;
  favicon?: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url)
    return new NextResponse("No url provided", {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  try {
    const options = { url };
    const { error, result, response } = await ogs(options);
    const {
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      favicon,
    } = result;
    const finalImage = Array.isArray(image) ? image[0] : image;
    return new NextResponse(
      JSON.stringify({
        title,
        description,
        image: finalImage,
        error,
        favicon,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        error: true,
        title: null,
        description: null,
        image: null,
        favicon: null,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

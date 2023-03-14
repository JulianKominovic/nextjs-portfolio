import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function POST(request: Request) {
  try {
    console.log("SAVING LAYOUT....");
    const layout = await request.json();
    await fs.writeFile("./public/layout.json", JSON.stringify(layout));
    return new NextResponse(JSON.stringify({ status: "OK" }));
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

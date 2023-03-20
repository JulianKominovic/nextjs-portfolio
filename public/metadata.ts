import { Metadata } from "next";

const DEFAULT_TITLE = "Julian E. Kominovic - Frontend Developer";
const DEFAULT_DESCRIPTION =
  "Julian Ezequiel Kominovic Frontend Developer at Koin. Blog, projects and more.";

export const buildImageUrl = (
  title: string,
  description: string,
  imageUrl: string
) => {
  if (process.env.NODE_ENV === "development")
    return `http://localhost:3000/api/og?title=${title}&description=${description}&imageUrl=${imageUrl}`;
  return `https://jkominovic.vercel.app/api/og?title=${title}&description=${description}&imageUrl=${imageUrl}`;
};

export const COMMON_METADATA: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  viewport: "width=device-width, initial-scale=1",
  keywords:
    "Julian Kominovic, Julian Ezequiel Kominovic, Julian E. Kominovic, Julian, Kominovic, Frontend Developer, Frontend, Developer, Koin, Blog, Projects, Portfolio, Next.js, React, Typescript, Javascript, Javascript Developer, Typescript Developer, React Developer, Next.js Developer, Next.js Developer, Next.js, Next.js Blog, Next.js Portfolio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jkominovic.vercel.app/",
    countryName: "Argentina",
    images: [
      {
        url: buildImageUrl(DEFAULT_TITLE, DEFAULT_DESCRIPTION),
      },
    ],
  },
};

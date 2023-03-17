import fs from "fs/promises";
import Navbar from "@/components/navbar/Navbar";
import { cookies } from "next/headers";
import path from "path";
import { readPostContent, readPostsMetadata } from "@/lib/posts.server";
import MiniSearch from "minisearch";
import join from "@/lib/join";
import { COMMON_METADATA } from "../public/metadata";
import "./globals.css";

export const metadata = { ...COMMON_METADATA };

const buildIndexes = async () => {
  let miniSearch = new MiniSearch({
    idField: "filename",
    fields: ["title", "tags", "description", "content"], // fields to index for full-text search
    storeFields: ["title", "description", "tags"], // fields to return with search results,
  });
  const indexExists = await fs
    .lstat(path.join("tmp", "indexes.json"))
    .then(() => true)
    .catch(() => false);

  if (indexExists) {
    const idx = await fs.readFile(path.join("tmp", "indexes.json"), "utf-8");

    return idx;
  }

  const postMetadata = await readPostsMetadata();
  const results = await Promise.all(
    postMetadata.map(async ({ filename, ...rest }) => {
      const rawContent = await readPostContent(filename.slice(0, -3));
      const regex = /# (.*)/g;
      const content = [];
      let acc;

      do {
        acc = regex.exec(rawContent);
        if (acc) {
          content.push(acc[1]);
        }
      } while (acc);

      return {
        ...rest,
        content,
        filename: filename.slice(0, -3),
      };
    })
  );

  miniSearch.addAll(results);
  const index = JSON.stringify(miniSearch.toJSON());

  await fs.writeFile(path.join(process.cwd(), "public", "indexes.json"), index);

  return index;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value || "dark";
  return (
    <html lang="es" className={join("scroll-smooth", theme as string)}>
      <body className="min-h-screen py-12 antialiased sm:py-24 bg-primary text-light-primary bg-texture dark:text-neutral-100">
        <Navbar
          indexes={await buildIndexes()}
          initialTheme={cookies().get("theme")?.value || "dark"}
        />
        {children}
      </body>
    </html>
  );
}

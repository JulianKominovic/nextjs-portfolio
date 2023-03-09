import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MdxContent } from "../../../components/markdown/MarkdownRender";
import path from "path";
type Frontmatter = {
  title: string;
  date: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  const raw = await fs.readFile(filepath, "utf-8");

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    serialized,
  };
}

export default async function Home({ params }: any) {
  const { slug } = params;
  const { serialized, frontmatter } = await getPost(
    path.join(process.cwd(), "static", "posts", slug + ".mdx")
  );

  return (
    <article className="mx-auto prose">
      <h1>{frontmatter.title}</h1>
      <p>Published {frontmatter.date}</p>
      <MdxContent source={serialized} />
    </article>
  );
}

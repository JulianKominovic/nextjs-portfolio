import fs from "fs/promises";
import path from "path";
import grayMatter from "gray-matter";

export type PostMetadata = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  filename: string;
  ogImage: string;
};

export async function readLastPosts(): Promise<PostMetadata[]> {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "public", "posts")
  );
  const postsMetadata = await Promise.all(
    filenames.slice(0, 2).map(async (filename) => {
      const postTextContent = await fs.readFile(
        path.join(process.cwd(), "public", "posts", filename),
        "utf-8"
      );
      const { data } = grayMatter(postTextContent);
      return { ...data, filename } as PostMetadata;
    })
  );

  return postsMetadata;
}

export async function readPostsMetadata(): Promise<PostMetadata[]> {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "public", "posts")
  );
  const postsMetadata = await Promise.all(
    filenames.map(async (filename) => {
      const postTextContent = await fs.readFile(
        path.join(process.cwd(), "public", "posts", filename),
        "utf-8"
      );
      const { data } = grayMatter(postTextContent);
      return { ...data, filename } as PostMetadata;
    })
  );

  return postsMetadata;
}

export async function readPostContent(postId: string) {
  const postTextContent = await fs.readFile(
    path.join(process.cwd(), "public", "posts", `${postId}.md`),
    "utf-8"
  );
  const { content } = grayMatter(postTextContent);
  return content;
}
export async function readPost(postId: string) {
  const postTextContent = await fs.readFile(
    path.join(process.cwd(), "public", "posts", `${postId}.md`),
    "utf-8"
  );
  const { content, data } = grayMatter(postTextContent);
  return { content, ...data } as PostMetadata & { content: string };
}

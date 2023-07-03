import BlogList from "@/components/blog/List";
import BlogPost from "@/components/BlogPost";
import { readPostsMetadata } from "@/lib/posts.server";

export default async function PostsPage() {
  const posts = await readPostsMetadata();
  const allTags = new Set(posts.flatMap((post) => post.tags));
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return <BlogList posts={posts} allTags={[...allTags]} />;
}

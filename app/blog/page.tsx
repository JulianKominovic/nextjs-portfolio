import BlogList from "@/components/blog/List";
import BlogPost from "@/components/BlogPost";
import { readPostsMetadata } from "@/lib/posts.server";

export default async function PostsPage() {
  const posts = await readPostsMetadata();
  const allTags = new Set(posts.flatMap((post) => post.tags));

  return <BlogList posts={posts} allTags={[...allTags]} />;
}

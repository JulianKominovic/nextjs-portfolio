import BlogPost from "@/components/BlogPost";
import { readPostsMetadata } from "@/lib/posts.server";

export default async function PostsPage() {
  const posts = await readPostsMetadata();
  return posts.map(BlogPost);
}

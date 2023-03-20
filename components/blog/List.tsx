"use client";
import join from "@/lib/join";
import { PostMetadata } from "@/lib/posts.server";
import { useState } from "react";
import { motion } from "framer-motion";
import BlogPost from "../BlogPost";

type BlogListProps = {
  posts: PostMetadata[];
  allTags: string[];
};

export default function BlogList({ posts, allTags }: BlogListProps) {
  const [tags, setTags] = useState<string[]>([]);
  const filteredPosts =
    tags && tags.length > 0
      ? posts.filter((post) => {
          return tags.every((tag) => post.tags?.includes(tag));
        })
      : posts;
  const filteredTags =
    tags && tags.length > 0
      ? [
          ...new Set(
            filteredPosts
              .flatMap((post) =>
                post.tags?.some((tag) => tags?.includes(tag)) ? post.tags : []
              )
              .filter(Boolean)
          ),
        ]
      : allTags;
  return (
    <>
      <motion.div className="flex flex-wrap gap-2 " layoutRoot>
        {filteredTags.map(
          (tag, index) =>
            tag && (
              <motion.button
                layout
                className={join(
                  "px-2 border rounded-lg hover:bg-neutral-700 border-neutral-800 ",
                  tags?.includes(tag) ? "bg-black" : "bg-neutral-800"
                )}
                key={tag}
                onClick={() => {
                  if (tags?.includes(tag)) {
                    setTags(tags.filter((t) => t !== tag));
                  } else {
                    setTags(Array.isArray(tags) ? [...tags, tag] : [tag]);
                  }
                }}
              >
                {tag}
              </motion.button>
            )
        )}
      </motion.div>
      {filteredPosts.map((post) => (
        <BlogPost {...post} key={post.title + Math.random()} />
      ))}
    </>
  );
}

import BlogPostSkeleton from "@/components/skeletons/BlogPostSkeleton";

export default function Loading() {
  return (
    <>
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            className="w-24 bg-gray-300 rounded-lg h-9 dark:bg-neutral-800 animate-pulse"
            key={"blog-tag" + i}
          />
        ))}
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <BlogPostSkeleton key={"blog-post-skel" + i} />
      ))}
    </>
  );
}

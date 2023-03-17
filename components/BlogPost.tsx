import { PostMetadata } from "@/lib/posts.server";
import Link from "next/link";

export default function BlogPost({
  date,
  description,
  filename,
  tags,
  title,
}: PostMetadata) {
  return (
    <Link
      className="my-2 no-underline border border-transparent "
      key={title + "as"}
      href={`/blog/${filename.slice(0, -3)}`}
    >
      <article
        className="p-4 transition-all border line-clamp-2 rounded-xl border-neutral-50 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-bl from-white to-neutral-100 hover:transition-all hover:border-neutral-200 active:scale-95 active:translate-y-0 active:shadow-none active:transition-all dark:from-black dark:to-neutral-900 dark:border-neutral-800 hover:dark:shadow-neutral-800"
        key={title}
      >
        <h3 className="m-0 line-clamp-2">{title}</h3>
        {date ? (
          <p className="m-0 text-sm line-line-clamp-2 text-neutral-500 ">
            {Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(date))}
          </p>
        ) : null}
        <div>
          {tags?.map((tag) => (
            <span
              className="px-2 py-1 m-0 text-sm border rounded-lg border-neutral-200 bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:border-neutral-800"
              key={title + tag}
            >
              #{tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>

        <p className="m-0 mt-4 line-clamp-4 text-neutral-700 dark:text-neutral-400">
          {description}
        </p>
      </article>
    </Link>
  );
}

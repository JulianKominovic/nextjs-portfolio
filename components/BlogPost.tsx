import { PostMetadata } from "@/lib/posts.server";
import { buildImageUrl } from "@/public/metadata";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({
  date,
  description,
  filename,
  tags,
  title,
}: PostMetadata) {
  const onlyFilename = filename.slice(0, -3);
  return (
    <Link
      className="my-2 no-underline border border-transparent "
      key={title + "as"}
      href={`/blog/${onlyFilename}`}
    >
      <article className="overflow-hidden transition-all border rounded-xl border-neutral-200 hover:shadow-xl hover:shadow-neutral-200 hover:-translate-y-1 bg-gradient-to-tr from-white to-neutral-100 hover:transition-all hover:border-neutral-200 active:scale-95 active:translate-y-0 active:shadow-none active:transition-all dark:from-neutral-900 dark:to-neutral-800 dark:border-neutral-800 hover:dark:shadow-black">
        <Image
          src={"/images/" + onlyFilename + "/small-blog-item.png"}
          width={800}
          height={400}
          alt={title}
          className="object-cover object-center w-full m-0 mb-4 "
        />

        <h1 className="px-4 m-0 text-3xl line-clamp-2">{title}</h1>
        {date ? (
          <p className="px-4 m-0 text-sm line-line-clamp-2 text-neutral-500 ">
            {Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(date))}
          </p>
        ) : null}
        <div className="flex flex-wrap px-4 mt-2 gap-x-2 gap-y-1">
          {tags?.map((tag) => (
            <span
              className="px-2 py-1 m-0 text-sm border rounded-lg border-neutral-200 bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:border-neutral-800"
              key={title + tag}
            >
              #{tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>

        <p className="px-4 m-0 mt-4 mb-4 line-clamp-4 text-neutral-700 dark:text-neutral-400">
          {description}
        </p>
      </article>
    </Link>
  );
}

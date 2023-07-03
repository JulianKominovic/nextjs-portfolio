import ArrowUp from "@/assets/icons/ArrowUp";
import ExternalLinkArrow from "@/assets/icons/ExternalLink";
import BlogPost from "@/components/BlogPost";
import SmallProject from "@/components/SmallProject";
import { readLastPosts } from "@/lib/posts.server";
import { CURRENT_JOB_LINK, LINKS } from "@/public/links";
import { SMALL_PROJECTS } from "@/public/projects";
import Experience from "@/sections/Experience";
import Techs from "@/sections/Techs";
import Image from "next/image";
import Link from "next/link";
import ProfilPic from "../assets/images/pic.jpeg";

export default async function Home() {
  const posts = await readLastPosts();
  return (
    <main className="w-full p-6 mx-auto overflow-x-hidden prose prose-lg dark:prose-invert">
      <header className="flex flex-col ">
        <Image
          src={ProfilPic}
          width={80}
          height={80}
          alt="Julian Kominovic foto de perfil"
          className="m-0 my-4 rounded-full"
        />
        <h1 className="m-0">Julian Kominovic</h1>
        <p className="m-0 mb-4">
          Frontend developer at
          <a
            href={CURRENT_JOB_LINK}
            className="ml-2 inline-flex items-center [&:hover>svg]:-translate-y-0.5 [&:hover>svg]:translate-x-0.5 [&:hover>svg]:transition-transform [&>svg]:transition-transform"
          >
            Koin
            <ExternalLinkArrow />
          </a>
        </p>
        <div className="flex gap-4">
          {LINKS.map(({ name, url }) => (
            <a
              key={url}
              href={url}
              className="flex items-center gap-1 [&:hover>svg]:-translate-y-0.5 [&:hover>svg]:translate-x-0.5 [&:hover>svg]:transition-transform [&>svg]:transition-transform "
            >
              {name}
              <ExternalLinkArrow />
            </a>
          ))}
        </div>
      </header>
      <section className="flex flex-col mb-4">
        <h2>Blog</h2>
        {posts.map(BlogPost)}
      </section>
      <Link
        href="/blog"
        className="px-4 [&:hover__svg]:transition-transform [&__svg]:transition-transform [&:hover__svg]:translate-x-2 "
      >
        I want to see more <span>🧐</span>{" "}
        <ArrowUp className="inline-block rotate-90" />
      </Link>
      <Techs />
      <section>
        <h2 className="" id="small-projects">
          Proyectos pequeños
        </h2>
        <p>
          Estos son algunos de los proyectos que he hecho en mi tiempo libre, la
          mayoría fueron discontinuados.
        </p>
        <div>
          {SMALL_PROJECTS.map((project) => {
            return <SmallProject key={project.title} {...project} />;
          })}
        </div>
      </section>
    </main>
  );
}

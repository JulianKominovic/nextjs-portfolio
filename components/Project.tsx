import Image from "next/image";
import { TECH_ICONS } from "../static/icons";
import type { PROJECTS } from "../static/projects";
import RenderSimpleIcon from "./icons/RenderSimpleIcon";
import TechBadge from "./TechBadge";

export default function Project(props: typeof PROJECTS[0]) {
  const { description, images, urls, techs, title } =
    props as typeof PROJECTS[0];
  return (
    <div className="flex flex-col w-full px-5 pt-12 mx-auto mb-10">
      <div className="mx-auto overflow-hidden shadow-xl shadow-indigo-50 rounded-xl project__card">
        <div className="rounded-lg md:h-[300px] w-full overflow-visible object-contain">
          <Image
            alt={title + " banner"}
            className="object-contain object-center w-full mx-auto"
            height={600}
            width={1200}
            src={images.banner.src}
          />
        </div>
        <div className="flex flex-col p-3 pt-8 bg-white border border-gray-200 sm:flex-row md:mt-10 bg-opacity-20 backdrop-blur-3xl rounded-b-xl md:pt-0">
          <div className="flex text-center sm:w-1/3 sm:pr-8 sm:py-8">
            <div className="flex flex-col items-center justify-center w-full text-center">
              {images.logo?.src ? (
                <Image
                  height={80}
                  width={80}
                  src={images.logo.src}
                  alt={title + " logo"}
                />
              ) : (
                <div className="bg-gradient-to-r from-indigo-300 to-purple-400 w-[80px] h-[80px] rounded-xl" />
              )}
              <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                {title}
              </h2>
              <div className="w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded"></div>
              <ul className="flex flex-wrap justify-center gap-2">
                {techs.map((tech) => (
                  <TechBadge key={tech + title} tech={tech} />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-4 mt-4 font-normal text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
            <p className="mb-4 leading-relaxed text-gray-800">{description}</p>
            <footer>
              <a
                href={urls.github}
                className="inline-flex items-center justify-center gap-2 text-lg text-indigo-500"
              >
                Ver repo
                <RenderSimpleIcon svgPath={TECH_ICONS.Github.path} />
              </a>
              <span className="inline-block mx-2 w-0.5 bg-gray-400 h-6 align-middle"></span>
              {urls.demo && (
                <a
                  href={urls.demo}
                  className="inline-flex items-center justify-center gap-2 text-lg text-indigo-500"
                >
                  Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2px"
                    viewBox="0 0 24 24"
                    height="18px"
                    width="18px"
                  >
                    <path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" />
                    <path d="M7 13h8" />
                    <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" />
                    <>
                      <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                      <path d="M15 3l6 6" />
                    </>
                  </svg>
                </a>
              )}
              {urls.demo && (
                <span className="inline-block mx-2 w-0.5 bg-gray-400 h-6 align-middle" />
              )}

              <a
                href={`/projects/${title}`}
                className="inline-flex items-center justify-center gap-2 text-lg text-indigo-500"
              >
                Ver más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

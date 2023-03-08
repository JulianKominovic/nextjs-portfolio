import type { EXPERIENCE_LIST } from "../static/experience";
import Image from "next/image";
import Tick from "./icons/Tick";
import TechBadge from "./TechBadge";

type Props = typeof EXPERIENCE_LIST[0];
export default function TimelineItem(props: Props) {
  const {
    startDate,
    endDate,
    exprienceAdquired,
    technologiesUsed,
    tldrDescriptions,
    imageSrcName,
    title,
    role,
  } = props as Props;

  return (
    <div className="flex relative sm:items-center md:h-[740px] sm:h-[1000px] flex-col sm:flex-row w-full justify-center">
      <div className="min-w-[140px] md:mb-10 flex-row sm:flex-col mt-10 sm:mt-0 inline-flex items-center justify-center text-white relative font-medium text-sm h-full before:h-full before:w-1 before:bg-gray-200 before:sm:block before:hidden after:h-full after:w-1 after:bg-gray-200 after:sm:block after:hidden text-center">
        <p className="relative z-10 block px-2 py-1 bg-indigo-500 rounded-full w-max">
          {startDate}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          strokeWidth="2px"
          viewBox="0 0 24 24"
          height="60px"
          width="60px"
          className="box-content p-2 rotate-90 bg-white sm:rotate-180 stroke-indigo-500"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M10 7l4 -4l4 4"></path>
          <path d="M14 3v4.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v2.394"></path>
        </svg>
        <p className="relative z-10 block px-2 py-1 bg-indigo-500 rounded-full w-max">
          {endDate}
        </p>
      </div>
      <div className="flex flex-col items-start pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full self-baseline">
          <Image width={40} height={40} src={imageSrcName} alt={title} />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 max-w-[60ch]">
          <h2 className="text-xl font-medium text-gray-900 title-font">
            {title}
          </h2>
          <h4 className="mb-2 text-gray-500">{role}</h4>
          {tldrDescriptions.map((tldrDescription) => (
            <p key={title + tldrDescription} className="mb-2 leading-relaxed ">
              {tldrDescription}
            </p>
          ))}
          <ul className="flex flex-wrap gap-4 my-8">
            {exprienceAdquired.map((experience) => (
              <li className="flex items-center" key={title + experience}>
                <Tick />
                <p className="leading-relaxed">{experience}</p>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-4">
            {technologiesUsed.map((tech) => {
              return <TechBadge tech={tech} key={title + tech} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

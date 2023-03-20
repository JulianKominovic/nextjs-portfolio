import join from "@/lib/join";
import type { ReducedProject } from "../public/projects";
export default function SmallProject(props: ReducedProject) {
  return (
    <a
      href={props.urls?.github}
      className={join(
        " flex flex-col items-start sm:text-left border bg-gradient-to-tr from-neutral-50 via-slate-100 to-indigo-100 dark:from-neutral-900 dark:to-indigo-900 backdrop-blur-sm border-gray-200 px-6 rounded-xl relative  hover:shadow-xl  hover:shadow-indigo-50 transition-shadow hover:transition-shadow  no-underline p-4 w-full my-4 dark:border-neutral-900 overflow-visible dark:hover:shadow-black",
        "[&:hover>div>svg__.movable]:transform-gpu [&:hover>div>svg__.movable]:translate-x-1  [&:hover>div>svg__.movable]:-translate-y-1  [&:hover>div>svg__.movable]:transition-transform [&>div>svg__.movable]:transition-transform"
      )}
    >
      <div className="flex justify-between w-full">
        <h2 className="m-0 text-lg font-medium text-neutral-900 dark:text-neutral-50 title-font">
          {props.title}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          className="overflow-visible dark:stroke-indigo-400 stroke-indigo-700"
          strokeWidth="2px"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
          <line
            className="origin-center scale-75 movable"
            y2="4"
            x2="20"
            y1="14"
            x1="10"
          ></line>
          <polyline
            className="origin-center scale-75 movable"
            points="15 4 20 4 20 9"
          ></polyline>
        </svg>
      </div>
      <p className="m-0 mt-2 font-normal text-neutral-600 dark:text-neutral-400">
        {props.description}
      </p>
    </a>
  );
}

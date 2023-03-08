import type { ReducedProject } from "../static/projects";
export default function SmallProject(props: ReducedProject) {
  return (
    <a
      href={props.urls?.github}
      className="py-4 flex flex-col items-start sm:text-left border bg-gradient-to-tr from-neutral-50 via-slate-100 to-indigo-100 backdrop-blur-sm border-gray-200 px-6 rounded-xl relative overflow hover:shadow-xl hover:shadow-indigo-100 transition-shadow [&:hover>div>svg]:transform-gpu [&:hover>div>svg]:translate-x-2 [&:hover>div>svg]:scale-110 [&:hover>div>svg]:-translate-y-2 [&>div>svg]:transition-transform"
    >
      <div className="flex justify-between w-full">
        <h2 className="text-lg font-medium text-gray-900 title-font">
          {props.title}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          stroke="#9672f8"
          strokeWidth="2px"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
          <line y2="4" x2="20" y1="14" x1="10"></line>
          <polyline points="15 4 20 4 20 9"></polyline>
        </svg>
      </div>
      <p className="mt-2">{props.description}</p>
    </a>
  );
}

import { TECH_ICONS } from "../static/icons";
import type {
  BACKEND_TECH_LIST,
  FRONTEND_TECH_LIST,
  TESTING_AUTOMATION_TECH_LIST,
  TOOLS_TECH_LIST,
} from "../static/techs";
import RenderSimpleIcon from "./icons/RenderSimpleIcon";

type TechBadgeProps = {
  tech:
    | FRONTEND_TECH_LIST
    | BACKEND_TECH_LIST
    | TOOLS_TECH_LIST
    | TESTING_AUTOMATION_TECH_LIST;
};

export default function TechBadge(props: TechBadgeProps) {
  const { tech } = props as {
    tech:
      | FRONTEND_TECH_LIST
      | BACKEND_TECH_LIST
      | TOOLS_TECH_LIST
      | TESTING_AUTOMATION_TECH_LIST;
  };

  return (
    <li className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-4 text-indigo-800 bg-indigo-100 rounded-full">
      {TECH_ICONS[tech]?.path && (
        <RenderSimpleIcon svgPath={TECH_ICONS[tech]?.path} />
      )}
      {tech}
    </li>
  );
}

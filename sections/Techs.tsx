import type { SimpleIcon } from "simple-icons";
import H2 from "../components/headings/H2";
import List from "../components/List";
import { TECH_ICONS } from "../static/icons";
import {
  BACKEND_TECH_LIST,
  FRONTEND_TECH_LIST,
  TOOLS_TECH_LIST,
  TESTING_AUTOMATION_TECH_LIST,
} from "../static/techs";
const techsMapper = (
  techs: Record<string, string>
): { text: string; svgPath: string }[] => {
  return Object.entries(techs).map(([key, tech]: [string, string]) => ({
    text: tech,
    svgPath: ((TECH_ICONS as any)[tech] as SimpleIcon)?.path || "",
  }));
};

export default function Techs() {
  return (
    <section className="text-gray-600 body-font bg-secondary">
      <div className="container px-5 py-24 ">
        <div className="mb-12 text-center">
          <H2 id="techs">Stack tecnológico</H2>
          <p>
            Tecnologías que uso en el día a día activamente en mi trabajo y en
            mis side-projects.
          </p>
        </div>
        <div className="flex flex-wrap">
          <List items={techsMapper(FRONTEND_TECH_LIST)} title="Frontend" />
          <List items={techsMapper(TOOLS_TECH_LIST)} title="Herramientas" />
          <List
            items={techsMapper(TESTING_AUTOMATION_TECH_LIST)}
            title="Testing y Automation"
          />
          <List items={techsMapper(BACKEND_TECH_LIST)} title="Backend" />
        </div>
      </div>
    </section>
  );
}

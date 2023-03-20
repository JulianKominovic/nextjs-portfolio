import type { SimpleIcon } from "simple-icons";
import H2 from "../components/headings/H2";
import List from "../components/List";
import { TECH_ICONS } from "../public/icons";
import {
  BACKEND_TECH_LIST,
  FRONTEND_TECH_LIST,
  TOOLS_TECH_LIST,
  TESTING_AUTOMATION_TECH_LIST,
} from "../public/techs";
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
    <section className="mt-16">
      <h2 id="techs">Tech stack</h2>
      <p>
        Tecnologías que uso en el día a día activamente en mi trabajo y en mis
        side-projects.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <List items={techsMapper(FRONTEND_TECH_LIST)} title="Frontend" />
        <div>
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

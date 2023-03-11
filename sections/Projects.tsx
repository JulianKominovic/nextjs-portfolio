import H2 from "../components/headings/H2";
import Project from "../components/Project";
import SmallProject from "../components/SmallProject";
import { PROJECTS, SMALL_PROJECTS } from "../public/projects";
// <!-- TODO: Cada vez que entra algun proyecto al viewport ambientar todo el portfolio para que matchee con cada proyecto -->
export default function Projects() {
  return (
    <>
      <H2 id="projects">Proyectos</H2>

      <section className="max-w-[1200px] mx-auto">
        {PROJECTS.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </section>

      <section className="text-gray-600 body-font max-w-[1200px] mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <H2>Proyectos pequeños</H2>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Estos son algunos de los proyectos que he hecho en mi tiempo
              libre, la mayoría fueron discontinuados.
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
            {SMALL_PROJECTS.map((project) => {
              return <SmallProject key={project.title} {...project} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

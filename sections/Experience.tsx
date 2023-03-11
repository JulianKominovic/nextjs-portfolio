import H2 from "../components/headings/H2";
import TimelineItem from "../components/TimelineItem";
import { EXPERIENCE_LIST } from "../public/experience";

export default function Experience() {
  return (
    <section className="text-gray-600 body-font">
      <H2 id="experience">Experiencia</H2>

      <div className="container flex flex-col flex-wrap items-center w-full px-4 py-10 mx-auto my-10 ">
        {EXPERIENCE_LIST.map((props) => (
          <TimelineItem key={props.title + props.startDate} {...props} />
        ))}
      </div>
    </section>
  );
}

import RenderSimpleIcon from "./icons/RenderSimpleIcon";

type Props = {
  items: Array<{
    text: string;
    svgPath: string;
  }>;
  title: string;
};

export default function List(props: Props) {
  const { items, title } = props as Props;
  return (
    <div className="w-full p-4 lg:w-1/4 sm:w-1/2">
      <h2 className="mb-4 text-sm font-medium tracking-widest text-center text-gray-900 sm:text-left">
        {title}
      </h2>
      <ul className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2 sm:text-left text-center space-y-2.5 sm:justify-start lg:flex-col">
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.text + title}>
            {item.svgPath && <RenderSimpleIcon svgPath={item.svgPath} />}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

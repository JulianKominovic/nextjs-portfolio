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
    <div className="w-full">
      <h2 className="mt-0 mb-4 text-sm font-medium text-gray-900 dark:text-neutral-50">
        {title}
      </h2>
      <ul className="flex flex-col flex-wrap items-baseline justify-center p-0">
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.text + title}>
            {item.svgPath && (
              <RenderSimpleIcon
                svgPath={item.svgPath}
                className="text-lg text-indigo-800 dark:text-indigo-300"
              />
            )}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

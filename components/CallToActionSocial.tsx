import RenderSimpleIcon from "./icons/RenderSimpleIcon";

type Props = {
  link: string;
  subtitle: string;
  title: string;
  svgPath?: string;
};

export default function CallToActionSocial(props: Props) {
  return (
    <a
      href={props.link}
      className="inline-flex items-center px-5 py-3 transition-colors duration-150 ease-in-out bg-indigo-500 border border-indigo-700 bg-tertiary text-primary hover:bg-darker-primary hover:text-secondary rounded-xl focus:outline-none hover:bg-indigo-700 text-neutral-100"
    >
      {props.svgPath ? (
        <RenderSimpleIcon
          className="fill-neutral-200"
          svgPath={props.svgPath}
        />
      ) : null}
      <span className="flex flex-col items-start ml-4 leading-none">
        <span className="text-xs">{props.subtitle}</span>
        <span className="font-medium title-font">{props.title}</span>
      </span>
    </a>
  );
}

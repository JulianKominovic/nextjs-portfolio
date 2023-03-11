type Props = {
  svgPath: string;
  className?: string;
};

export default function RenderSimpleIcon(props: Props) {
  const { svgPath, ...rest } = props as Props;
  return (
    <svg
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className={`${rest.className || "fill-indigo-500"}  mx-1`}
      {...rest}
    >
      <path fill="currentColor" d={svgPath}></path>
    </svg>
  );
}

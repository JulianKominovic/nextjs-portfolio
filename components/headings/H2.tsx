export default function H2(props: any) {
  return (
    <h2
      {...props}
      className="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font"
    >
      {props.children}
    </h2>
  );
}

import Prism from "react-syntax-highlighter/dist/esm/prism";

type SyntaxHighlighterProps = {
  children: string;
  styles: any;
  langMatched: string;
};

export default function SyntaxHighlighter({
  children,
  styles,
  langMatched,
  ...props
}: SyntaxHighlighterProps) {
  return (
    <Prism
      showLineNumbers
      wrapLines
      customStyle={{
        margin: 0,
      }}
      PreTag="div"
      style={{ ...styles, margin: 0 }}
      language={langMatched}
      {...(props as any)}
    >
      {children}
    </Prism>
  );
}

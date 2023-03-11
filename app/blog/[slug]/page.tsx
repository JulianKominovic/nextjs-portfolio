import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs/promises";
import path from "path";
import rehypePrism from "rehype-prism-plus";
import "../../../styles/themes/base.css";
import "../../../styles/themes/prism-night-owl.css";
import "../../../styles/template/plugin-line-numbers.css";
import LivePreviewLinks from "@/components/markdown/LivePreviewLinks";

function getPostInfo(id: string) {
  return fs.readFile(
    path.join(process.cwd(), "public", "posts", `${id}.mdx`),
    "utf-8"
  );
}

function textContentAsID(textContent: string) {
  return textContent.replace(/ /g, "-").toLocaleLowerCase();
}

export default async function Page({ params }: any) {
  const { slug } = params;
  const content = await getPostInfo(slug);
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      //https://github.com/PrismJS/prism-themes
      rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}
      components={{
        a: LivePreviewLinks,
        h1: (props: any) => (
          <h1 {...props} id={textContentAsID(String(props.children))} />
        ),
        h2: (props: any) => (
          <h2 {...props} id={textContentAsID(String(props.children))} />
        ),
        h3: (props: any) => (
          <h3 {...props} id={textContentAsID(String(props.children))} />
        ),
        h4: (props: any) => (
          <h4 {...props} id={textContentAsID(String(props.children))} />
        ),
        h5: (props: any) => (
          <h5 {...props} id={textContentAsID(String(props.children))} />
        ),
        h6: (props: any) => (
          <h6 {...props} id={textContentAsID(String(props.children))} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

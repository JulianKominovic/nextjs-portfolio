import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "../../../styles/themes/base.css";
import "../../../styles/themes/prism-night-owl.css";
import "../../../styles/template/plugin-line-numbers.css";
import LivePreviewLinks from "@/components/markdown/LivePreviewLinks";
import { readPost, readPostContent } from "@/lib/posts.server";
import CustomElement from "@/components/markdown/CustomElements";
import AutoHighlightedWord from "@/components/AutoHightlightedWord";

function textContentAsID(textContent: string) {
  return textContent.replace(/ /g, "-").toLocaleLowerCase();
}

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const highlightedWord = searchParams["highlight"];
  const { content, title, date, description, tags } = await readPost(slug);
  return (
    <>
      <h1>{title}</h1>
      <p>
        <small>
          {Intl.DateTimeFormat(undefined, {
            dateStyle: "long",
            timeStyle: "long",
          }).format(new Date(date))}
        </small>
      </p>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        //https://github.com/PrismJS/prism-themes
        rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}
        components={{
          a: LivePreviewLinks,
          p: CustomElement,
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
      {highlightedWord && (
        <AutoHighlightedWord highlightedWord={highlightedWord} />
      )}
    </>
  );
}

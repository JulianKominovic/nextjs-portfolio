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
import Image from "next/image";
import { buildImageUrl, COMMON_METADATA } from "@/public/metadata";
import { Metadata } from "next";

function textContentAsID(textContent: string) {
  return textContent.replace(/ /g, "-").toLocaleLowerCase();
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;
  const { title, description, ogImage } = await readPost(slug);
  console.log(buildImageUrl(title, description, ogImage));

  return {
    ...COMMON_METADATA,
    title,
    description,
    openGraph: {
      ...COMMON_METADATA.openGraph,
      title,
      description,
      images: [{ url: buildImageUrl(title, description, ogImage) }],
    },
  };
}

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const highlightedWord = searchParams["highlight"];
  const { content, title, date, description, tags, ogImage } = await readPost(
    slug
  );
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
          img: (props) => (
            <a href={props.src} target="_blank">
              <Image
                {...props}
                width={600}
                height={400}
                className="relative transition-transform rounded-md cursor-pointer hover:scale-105 hover:transition-transform "
              />
            </a>
          ),
          h1: (props: any) => {
            const childrenAsText = textContentAsID(String(props.children));
            return (
              <a href={"#" + childrenAsText} className="no-underline">
                <h1 {...props} id={childrenAsText} />
              </a>
            );
          },
          h2: (props: any) => {
            const childrenAsText = textContentAsID(String(props.children));
            return (
              <a href={"#" + childrenAsText} className="no-underline">
                <h2 {...props} id={childrenAsText} />
              </a>
            );
          },
          h3: (props: any) => {
            const childrenAsText = textContentAsID(String(props.children));
            return (
              <a href={"#" + childrenAsText} className="no-underline">
                <h3 {...props} id={childrenAsText} />
              </a>
            );
          },
          h4: (props: any) => {
            const childrenAsText = textContentAsID(String(props.children));
            return (
              <a href={"#" + childrenAsText} className="no-underline">
                <h4 {...props} id={childrenAsText} />
              </a>
            );
          },
          h5: (props: any) => {
            const childrenAsText = textContentAsID(String(props.children));
            return (
              <a href={"#" + childrenAsText} className="no-underline">
                <h5 {...props} id={childrenAsText} />
              </a>
            );
          },
          h6: (props: any) => {
            const childrenAsText = textContentAsID(String(props.children));
            return (
              <a href={"#" + childrenAsText} className="no-underline">
                <h6 {...props} id={childrenAsText} />
              </a>
            );
          },
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

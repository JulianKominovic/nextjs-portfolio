"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import SyntaxHighlighter from "./SyntaxHighlights";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <MDXRemote
      {...source}
      components={{
        code: (props) => {
          console.log(props);
          return <SyntaxHighlighter {...props} />;
        },
      }}
    />
  );
}

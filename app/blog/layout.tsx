import { COMMON_METADATA, buildImageUrl } from "@/public/metadata";
type Props = {
  children: React.ReactNode;
};

export const metadata = {
  ...COMMON_METADATA,
  openGraph: {
    ...COMMON_METADATA.openGraph,
    images: [{ url: buildImageUrl("Julian Kominovic - Blog", "") }],
  },
};

const PostsLayout = ({ children }: Props) => {
  return (
    <div
      id="post-content"
      className="relative px-4 py-20 mx-auto overflow-x-hidden prose prose-lg dark:prose-invert"
    >
      {children}
    </div>
  );
};

export default PostsLayout;

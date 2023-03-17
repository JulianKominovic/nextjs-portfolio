type Props = {
  children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
  return (
    <div
      id="post-content"
      className="relative px-4 py-8 mx-auto overflow-x-hidden prose dark:prose-invert"
    >
      {children}
    </div>
  );
};

export default PostsLayout;

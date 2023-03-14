type Props = {
  children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
  return (
    <div
      id="post-content"
      className="relative px-4 mx-auto overflow-x-hidden prose"
    >
      {children}
    </div>
  );
};

export default PostsLayout;

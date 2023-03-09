type Props = {
  children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
  return (
    <div>
      layout
      {children}
    </div>
  );
};

export default PostsLayout;

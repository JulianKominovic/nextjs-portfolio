type Props = {
  children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
  return (
    <div className="px-4 mx-auto prose">
      layout
      {children}
    </div>
  );
};

export default PostsLayout;

import DynamicIsland from "@/components/markdown/DynamicIsland";

type Props = {
  children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <DynamicIsland />
    </>
  );
};

export default PostsLayout;

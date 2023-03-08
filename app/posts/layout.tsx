type Props = {};

const PostsLayout = (props: Props) => {
  return (
    <div>
      layout
      <slot />
    </div>
  );
};

export default PostsLayout;

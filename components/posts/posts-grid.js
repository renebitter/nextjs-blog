import PostItem from './post-item';
import classes from './posts-grid.module.css';

const PostGrid = (props) => {
  const { posts } = props;
  console.log(posts);
  if (posts !== null && posts !== undefined) {
    return (
      <ul className={classes.grid}>
        {posts.map((post) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
    );
  } else {
    return <div className={classes.grid}>No posts to show</div>;
  }
};
export default PostGrid;

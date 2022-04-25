import Image from 'next/image';
import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest} id='featured'>
      <div className={classes.posts}>
        <h2>Featured Posts</h2>{' '}
        <div className={classes.imageWrapper}>
          <div className={classes.image}>
            <img src='/images/typewriter-tape.png' alt='typewriter' />
          </div>
        </div>
        <PostGrid posts={props.posts} />
      </div>
    </section>
  );
};
export default FeaturedPosts;

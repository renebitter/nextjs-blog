import Image from 'next/image';
import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest} id='featured'>
      <div className={classes.posts}>
        <h2>Featured Posts</h2>
        <PostGrid posts={props.posts} />
      </div>
      {/* <img src='/images/typewriter.png' alt='typewriter' /> */}
      <div className={classes.imageWrapper}>
        <div className={classes.image}>
          <img src='/images/typewriter-tape.png' alt='typewriter' />
          {/* <Image
          src='/images/typewriter-tape.png'
          alt='Profile pic'
          width={1900}
          height={100}
        /> */}
        </div>
      </div>
    </section>
  );
};
export default FeaturedPosts;

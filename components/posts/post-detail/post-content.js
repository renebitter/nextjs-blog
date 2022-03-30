import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POSTS = {
  slug: 'slug-nextjs',
  title: 'Title Nextjs',
  image: 'image.jpg',
  date: '2022-01-01',
  content: '# First Post', //Markdown text
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  const title = DUMMY_POSTS.title;
  const content = DUMMY_POSTS.content;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      {content}
    </article>
  );
};
export default PostContent;

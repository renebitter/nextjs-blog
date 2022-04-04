import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../util/posts-util';

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Blog Posts</title>
        <meta name='description' content='List of all blog posts' />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;

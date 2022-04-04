import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedPosts from '../components/home/featured-posts';
import { getFeaturedPosts } from '../util/posts-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name='description'
          content='Blog about web development & suicide attempts while debugging'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;

import Head from 'next/head';
import Background from '../components/home/background';
import Hero from '../components/home/hero';
import Separator from '../components/layout/separator';
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
      <Background>
        <Hero />
        <FeaturedPosts posts={props.posts} />
        <Separator />
      </Background>
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

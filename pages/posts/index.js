import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'slug-nextjs',
    title: 'Title Nextjs',
    image: 'image.jpg',
    excerpt: 'Excerpt lorem ipsum',
    date: '2022-01-01',
  },
  {
    slug: 'slug-nextjs-2',
    title: 'Title Nextjs',
    image: 'image.jpg',
    excerpt: 'Excerpt lorem ipsum',
    date: '2022-01-01',
  },
  {
    slug: 'slug-nextjs-3',
    title: 'Title Nextjs',
    image: 'image.jpg',
    excerpt: 'Excerpt lorem ipsum',
    date: '2022-01-01',
  },
  {
    slug: 'slug-nextjs-4',
    title: 'Title Nextjs',
    image: 'image.jpg',
    excerpt: 'Excerpt lorem ipsum',
    date: '2022-01-01',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};
export default AllPostsPage;

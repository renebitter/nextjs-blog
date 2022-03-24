import Link from 'next/link';
import classes from './post-item.module.css';

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div>
            <h3>{title}</h3>
            <time>July 13th 2022</time>
            <p>The excerpt</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
export default PostItem;
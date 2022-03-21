import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/profilepic.jpeg'
          alt='Profile pic'
          width={300}
          height={300}
        />
      </div>

      <h1>Blog</h1>
      <p>Here you can find posts about web development</p>
      <br />
      <p>
        <small>
          The intention of this content is to allow some kind of
          <strong> TLDR</strong> resource instead of a deep/thorough study of a
          given subject.
        </small>
      </p>
    </section>
  );
};
export default Hero;

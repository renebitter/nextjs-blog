import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* TODO: implement fallback for external images */}
        <Image
          src='https://images.unsplash.com/photo-1630320778004-ffd02f18f93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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

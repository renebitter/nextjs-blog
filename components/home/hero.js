import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.overlay}>
        <div className={classes.hero}>
          <h1>Markdown Blog</h1>
          <p>
            <small>Web Development • Javascript • React • Next • Node</small>
          </p>
          <a type='button' className='button' href='#featured'>
            Read
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;

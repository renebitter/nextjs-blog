import classes from './background.module.css';

const Background = (props) => {
  return <div className={classes.background}>{props.children}</div>;
};
export default Background;

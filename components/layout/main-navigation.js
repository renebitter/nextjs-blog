import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/posts'>POSTS</Link>
            </li>
            <li>
              <Link href='/contact'>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default MainNavigation;

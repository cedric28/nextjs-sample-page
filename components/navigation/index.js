import Link from 'next/link';

import Logo from './logo';
import classes from '../../styles/navigation/main-navigation.module.css';

const Index = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Index;
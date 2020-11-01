import React from 'react';
import Link from 'next/link'
import styles from './nav.module.css';

interface NavProps {
  title: string;
}

const Nav: React.FC<NavProps> = props => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>{props.title}</a>
      </Link>
    </nav>
  )
}

export default Nav;

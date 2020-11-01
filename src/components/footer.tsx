import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Copyright © 2020</p>
        <div className={styles.link}>
          <p>Created by </p>
          <a href="https://twitter.com/Ooooosugiiiiii" target="_blank">@ohsugi5532</a>
        </div>
        <p>This site uses Google Analiytics</p>
      </div>
    </footer>
  );
};

export default Footer;

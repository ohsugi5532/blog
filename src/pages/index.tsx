import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

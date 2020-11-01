import Header from './header';
import Nav from './nav';
import Footer from './footer';

const title = "johnny.blog";

const Layout = ({ children, home }) => {
  return (
    <>
      <Header title={title} />
      <Nav title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

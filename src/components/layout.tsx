import Header from './header';
import Nav from './nav';
import Footer from './footer';

const title = "johnny.blog";

type LayoutProps = {
  children: any;
  home: any;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
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

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <div className="container">
        <>{children}</>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

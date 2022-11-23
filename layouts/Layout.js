import Header from "../components/Header";
import Footer from "../components/Footer";

//import "../assets/css/Layout.less";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

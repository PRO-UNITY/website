/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
const Layout = ({ children, title }) => {
  return (
    <div style={{ background: "yellow" }} className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

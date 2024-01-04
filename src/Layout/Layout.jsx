/* eslint-disable react/prop-types */
import { Footer, Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <div style={{ background: "yellow" }} className="home">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

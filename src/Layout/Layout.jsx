/* eslint-disable react/prop-types */
import { Footer, Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

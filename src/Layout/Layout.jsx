/* eslint-disable react/prop-types */
import { Footer, Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <div style={{ background: "yellow" }}>
      <Navbar />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

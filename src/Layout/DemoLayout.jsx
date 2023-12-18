/* eslint-disable react/prop-types */
import { useState } from "react";
import DemoNavbar from "../pages/Products/Delivery/Demo/Navbar";
import DemoSidebar from "../pages/Products/Delivery/Demo/Sidebar";

const DemoLayout = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false  );
  return (
    <div className="bg-light vh-100 overflow-auto d-flex ">
        <DemoSidebar showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
        <div className="d-flex flex-column">
            <DemoNavbar setshowSidebar={setshowSidebar} />
            <main className="">{children}</main>
        </div>
        <div className="">salom</div>
    </div>
  );
};

export default DemoLayout;

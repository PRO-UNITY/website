/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../pages/Products/Hrms/docomentation/Navbar";
import Sidebar from "../pages/Products/Hrms/docomentation/Sidebar";

const HrmsDocumentationLayout = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div
      className="overflow-auto  products-doc"
      style={{ background: "rgb(248, 246, 252)" }}
    >
      <Navbar setshowSidebar={setshowSidebar} />
      <div className="d-flex bg-white container-lg h-100 p-0">
        <Sidebar showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
        <main className="w-100">{children}</main>
      </div>
    </div>
  );
};

export default HrmsDocumentationLayout;

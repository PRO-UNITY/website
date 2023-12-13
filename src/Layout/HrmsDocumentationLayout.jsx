/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../pages/Products/Hrms/docomentation/Navbar";
import Sidebar from "../pages/Products/Hrms/docomentation/Sidebar";

const HrmsDocumentationLayout = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(true);
  return (
    <div className="bg-light vh-100 overflow-auto  ">
      <Navbar setshowSidebar={setshowSidebar} />
      <div className="d-flex bg-white">
        <Sidebar showSidebar={showSidebar} />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default HrmsDocumentationLayout;

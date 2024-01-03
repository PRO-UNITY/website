/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../pages/Products/Delivery/docomentation/Navbar";
import Sidebar from "../pages/Products/Delivery/docomentation/Sidebar";

const DeliveryDocumentationLayout = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="bg-light vh-100 overflow-auto  ">
      <Navbar setshowSidebar={setshowSidebar} />
      <div className="d-flex bg-white container-lg p-0">
        <Sidebar showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
        <main className="w-100">{children}</main>
      </div>
    </div>
  );
};

export default DeliveryDocumentationLayout;

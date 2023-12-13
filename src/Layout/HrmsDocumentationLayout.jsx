/* eslint-disable react/prop-types */
import Navbar from "../pages/Products/Hrms/docomentation/Navbar";
import Sidebar from "../pages/Products/Hrms/docomentation/Sidebar";

const HrmsDocumentationLayout = ({ children }) => {
  return (
    <div className="bg-light vh-100  w-100">
      <Navbar />
      <div className="d-flex bg-white">
        <Sidebar />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default HrmsDocumentationLayout;

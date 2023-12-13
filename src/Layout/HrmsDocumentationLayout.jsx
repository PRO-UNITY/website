/* eslint-disable react/prop-types */
import Navbar from "../pages/Products/Hrms/docomentation/Navbar";
import Sidebar from "../pages/Products/Hrms/docomentation/Sidebar";

const HrmsDocumentationLayout = ({ children }) => {
  return (
    <div className="bg-light vh-100">
      <Navbar />
      <div className="d-flex vh-100 bg-white w-100">
        <Sidebar />
        <main className="h-100   ">{children}</main>
      </div>
    </div>
  );
};

export default HrmsDocumentationLayout;

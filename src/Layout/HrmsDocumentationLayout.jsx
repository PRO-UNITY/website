/* eslint-disable react/prop-types */

import Sidebar from "../pages/Products/Hrms/docomentation/Sidebar";

const HrmsDocumentationLayout = ({ children }) => {
  return (
    <div className="d-flex vh-100 bg-white w-100">
      <Sidebar />
      <main className="h-100 b w-100 px-5 mx-5">{children}</main>
    </div>
  );
};

export default HrmsDocumentationLayout;

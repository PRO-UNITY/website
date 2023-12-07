/* eslint-disable react/prop-types */

import { HrmsDashNavbar } from "../components";
import { HrmsAdminSidebar } from "../pages";

const HrmsAdminLayout = ({ children }) => {
  return (
    <div className="d-flex hrms-dash vh-100 w-100">
      <HrmsAdminSidebar />
      <div className="w-100">
        <HrmsDashNavbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default HrmsAdminLayout;

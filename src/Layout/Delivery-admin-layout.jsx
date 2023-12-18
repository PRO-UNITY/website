/* eslint-disable react/prop-types */

import DeliveryDashNavbar from "../components/Delivery-dash-navbar/Delivery-dash-navbar";
import { HrmsAdminSidebar } from "../pages";
import DeliverySidebar from "../pages/Products/Delivery/admin/Delivery-sidebar/Delivery-sidebar";

const DeliveryAdminLayout = ({ children }) => {
  return (
    <div className="d-flex hrms-dash vh-100 w-100">
      <DeliverySidebar />
      <div className="w-100"> 
        <DeliveryDashNavbar />
        <div className="px-md-3 ">{children}</div>
      </div>
    </div>
  );
};

export default DeliveryAdminLayout;

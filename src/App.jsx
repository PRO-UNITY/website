import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  AuthorizedTutorial,
  Contact,
  Coworking,
  Delivery,
  Home,
  Hrms,
  HrmsAdminHome,
  HrmsAdminHomeEditProfile,
  HrmsDocInstallation,
  HrmsDocUser,
  HrmsDocumentation,
  HrmsNotification,
  HrmsServices,
  HrmsSignIn,
  HrmsSignUp,
  HrmsStatistic,
  HrmsTaskList,
  ITScholl,
  OpenCourse,
  PageNotFound,
  ProCommunity,
  Services,
  SoftwareDevelopenent,
  TeamDetails,
  DeliverySignIn,
  DeliverySignUp,
  DeliveryAdminHomeEditProfile,
  DeliveryStatistic,
  DeliveryTaskList,
  DeliveryServices,
  DeliveryNotification,
  DeliveryDocumentation,
  DeliveryDocUser,
  DeliveryDocInstallation,
} from "./pages";
import { ActiveNavContext } from "./context/ActiveNav";
import { useState } from "react";
import DeliveryHome from "./pages/Products/Delivery/admin/Delivery-home/Delivery-home";

// const optimizely = createInstance({
//   sdkKey: "YOUR_OPTIMIZELY_SDK_KEY", // Optimizely SDK key
// });
function App() {
  const [activeNav, setactiveNav] = useState(1);
  const [activeHrmsDash, setActiveHrmsDash] = useState(1);
  return (
    <>
      <ActiveNavContext.Provider
        value={{ activeNav, setactiveNav, activeHrmsDash, setActiveHrmsDash }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/softwareDevelopenent"
            element={<SoftwareDevelopenent />}
          />
          <Route exact path="/services/IT-school" element={<ITScholl />} />
          <Route
            path="/services/authorized-tutorial"
            element={<AuthorizedTutorial />}
          />
          <Route path="/services/coworking" element={<Coworking />} />
          <Route path="/services/pro-community" element={<ProCommunity />} />
          <Route path="/services/opencourse" element={<OpenCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/delivery" element={<Delivery />} />
          <Route path="/user/:id" element={<TeamDetails />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Hrms */}
          <Route path="/products/hrms" element={<Hrms />} />
          <Route path="products/hrms/documentation" element={<HrmsDocumentation />} />
          <Route path="products/hrms/documentation/users" element={<HrmsDocUser />} />
          <Route path="products/hrms/documentation/installation" element={<HrmsDocInstallation />} />
          <Route
            path="/products/hrms/admin/auth/sign-in"
            element={<HrmsSignIn />}
          />
          <Route
            path="/products/hrms/admin/auth/sign-up"
            element={<HrmsSignUp />}
          />
          <Route path="/products/hrms/admin" element={<HrmsAdminHome />} />
          <Route
            path="/products/hrms/admin/edit-profile"
            element={<HrmsAdminHomeEditProfile />}
          />
          <Route path="/products/hrms/statistic" element={<HrmsStatistic />} />
          <Route path="/products/hrms/task-list" element={<HrmsTaskList />} />
          <Route path="/products/hrms/services" element={<HrmsServices />} />
          <Route
            path="/products/hrms/notification"
            element={<HrmsNotification />}
          />
          {/* Delivery */}
          <Route path="/products/delivery" element={<Delivery />} />
          <Route path="products/delivery/documentation" element={<DeliveryDocumentation />} />
          <Route path="products/delivery/documentation/users" element={<DeliveryDocUser />} />  
          <Route path="products/delivery/documentation/installation" element={<DeliveryDocInstallation />} />
          <Route
            path="/products/delivery/admin/auth/sign-in"
            element={<DeliverySignIn />}
          />
          <Route
            path="/products/delivery/admin/auth/sign-up"
            element={<DeliverySignUp />}
          />
          <Route path="/products/delivery/admin" element={<DeliveryHome />} />
          <Route
            path="/products/delivery/admin/edit-profile"
            element={<DeliveryAdminHomeEditProfile />}
          />
          <Route path="/products/delivery/statistic" element={<DeliveryStatistic />} />
          <Route path="/products/delivery/task-list" element={<DeliveryTaskList />} />
          <Route path="/products/delivery/services" element={<DeliveryServices />} />
          <Route
            path="/products/delivery/notification"
            element={<DeliveryNotification />}
          />
        </Routes>
      </ActiveNavContext.Provider>
    </>
  );
}

export default App;

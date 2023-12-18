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
  HrmsDocKitchen,
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
  HrmsDocFoods,
  HrmsDocDeliveryman,
  HrmsDocManager,
  HrmsDocOrders,
  Products,
  DeliveryDocKitchen,
  DeliveryDocFoods,
  DeliveryDocDeliveryman,
  DeliveryDocManager,
  DeliveryDocOrders,
  DemoHome,
  Dashboard,
} from "./pages";
import { ActiveNavContext } from "./context/ActiveNav";
import { getRoleUser } from "./pages/Products/Delivery/functions";
import { useState, useEffect } from "react";
import DeliveryHome from "./pages/Products/Delivery/admin/Delivery-home/Delivery-home";
import HrmsCalendar from "./pages/Products/Hrms/admin/Hrms-calendar/HrmsCalendar";
import Jobs from "./pages/Products/Hrms/demo/jobs/Jobs";
import JobDetails from "./pages/Products/Hrms/demo/jobs/JobDetails";

// const optimizely = createInstance({
//   sdkKey: "YOUR_OPTIMIZELY_SDK_KEY", // Optimizely SDK key
// });

function App() {
  const [activeNav, setactiveNav] = useState(1);
  const [activeHrmsDash, setActiveHrmsDash] = useState(1);
  const [role, setRole] = useState("");
  //
  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRoleUser();
      setRole(role);
    };
    fetchRole();
  }, []);
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
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/delivery" element={<Delivery />} />
          <Route path="/user/:id" element={<TeamDetails />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Hrms */}
          <Route path="/products/hrms/demo" element={<Jobs />} />
          <Route path="/products/hrms/demo/job-details/:id" element={<JobDetails />} />
          <Route path="/products/hrms" element={<Hrms />} />
          <Route
            path="products/hrms/documentation"
            element={<HrmsDocumentation />}
          />
          <Route
            path="products/hrms/documentation/users"
            element={<HrmsDocUser />}
          />
          <Route
            path="products/hrms/documentation/kitchen"
            element={<HrmsDocKitchen />}
          />
          <Route
            path="products/hrms/documentation/foods"
            element={<HrmsDocFoods />}
          />
          <Route
            path="products/hrms/documentation/deliveryman"
            element={<HrmsDocDeliveryman />}
          />
          <Route
            path="products/hrms/documentation/manager"
            element={<HrmsDocManager />}
          />
          <Route
            path="products/hrms/documentation/orders"
            element={<HrmsDocOrders />}
          />

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
          <Route path="/products/hrms/calendar" element={<HrmsCalendar />} />
          <Route
            path="/products/hrms/notification"
            element={<HrmsNotification />}
          />
          {/* Delivery */}
          <Route path="/products/delivery" element={<Delivery />} />
          <Route
            path="products/delivery/documentation"
            element={<DeliveryDocumentation />}
          />
          <Route
            path="products/delivery/documentation/users"
            element={<DeliveryDocUser />}
          />
          <Route
            path="products/delivery/documentation/installation"
            element={<DeliveryDocInstallation />}
          />
          <Route path="products/delivery/documentation" element={<DeliveryDocumentation />} />
          <Route path="products/delivery/documentation/users" element={<DeliveryDocUser />} />
          <Route path="products/delivery/documentation/kitchen" element={<DeliveryDocKitchen />} />
          <Route path="products/delivery/documentation/foods" element={<DeliveryDocFoods />} />
          <Route path="products/delivery/documentation/deliveryman" element={<DeliveryDocDeliveryman />} />
          <Route path="products/delivery/documentation/manager" element={<DeliveryDocManager />} />
          <Route path="products/delivery/documentation/orders" element={<DeliveryDocOrders />} />
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
          <Route
            path="/products/delivery/statistic"
            element={<DeliveryStatistic />}
          />
          <Route
            path="/products/delivery/task-list"
            element={<DeliveryTaskList />}
          />
          <Route
            path="/products/delivery/services"
            element={<DeliveryServices />}
          />
          <Route
            path="/products/delivery/notification"
            element={<DeliveryNotification />}
          />
          {/* Demo Delivery */}
          <Route path="/products/delivery/demo" element={<DemoHome />} />
          <Route path="/products/delivery/demo/dashboard" element={<Dashboard />} />
          {/* <Route path="/products/delivery/demo" element={<DemoSidebar/>} /> */}

        </Routes>
      </ActiveNavContext.Provider>
    </>
  );
}

export default App;

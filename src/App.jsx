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
} from "./pages";
import { ActiveNavContext } from "./context/ActiveNav";
import { useState } from "react";

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
          <Route path="/services/softwareDevelopenent" element={<SoftwareDevelopenent />}/>
          <Route exact path="/services/IT-school" element={<ITScholl />} />
          <Route path="/services/authorized-tutorial" element={<AuthorizedTutorial />} />
          <Route path="/services/coworking" element={<Coworking />} />
          <Route path="/services/pro-community" element={<ProCommunity />} />
          <Route path="/services/opencourse" element={<OpenCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/delivery" element={<Delivery />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Hrms */}
          <Route path="/products/hrms" element={<Hrms />} />
          <Route path="/products/hrms/admin/auth/sign-in" element={<HrmsSignIn />} />
          <Route path="/products/hrms/admin/auth/sign-up" element={<HrmsSignUp />} />
          <Route path="/products/hrms/admin" element={<HrmsAdminHome />} />
          <Route path="/products/hrms/admin/edit-profile" element={<HrmsAdminHomeEditProfile />} />
          <Route path="/products/hrms/statistic" element={<HrmsStatistic />} />
          <Route path="/products/hrms/task-list" element={<HrmsTaskList />} />
          <Route path="/products/hrms/services" element={<HrmsServices />} />
          <Route path="/products/hrms/notification" element={<HrmsNotification />}
          />
        </Routes>
      </ActiveNavContext.Provider>
    </>
  );
}

export default App;

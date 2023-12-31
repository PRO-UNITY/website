import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  AuthorizedTutorial,
  Contact,
  Coworking,
  Home,
  Hrms,
  HrmsDocUser,
  HrmsDocumentation,
  ITScholl,
  OpenCourse,
  PageNotFound,
  ProCommunity,
  Services,
  SoftwareDevelopenent,
  TeamDetails,
  DeliveryDocumentation,
  DeliveryDocUser,
  Products,
  DeliveryDocKitchen,
  DeliveryDocFoods,
  DeliveryDocDeliveryman,
  DeliveryDocManager,
  DeliveryDocOrders,
  HrmsDocJob,
  HrmsDocResume,
  HrmsDocCompany,
  HeroWidgets,
  Delivery,
} from "./pages";
import { ActiveNavContext } from "./context/ActiveNav";
import { AsideScrollActiveProvider } from "./context/AsideScrollActive";

function App() {
  const [activeNav, setactiveNav] = useState(1);
  const [activeHrmsDash, setActiveHrmsDash] = useState(1);
  const [activeHrmsdoc, setActiveHrmsdoc] = useState(null);
  return (
    <>
      <AsideScrollActiveProvider>
        <ActiveNavContext.Provider
          value={{
            activeNav,
            setactiveNav,
            activeHrmsDash,
            setActiveHrmsDash,
            activeHrmsdoc,
            setActiveHrmsdoc,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/widgets/:id" element={<HeroWidgets />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/softwareDevelopenent" element={<SoftwareDevelopenent />} />
            <Route exact path="/services/IT-school" element={<ITScholl />} />
            <Route path="/services/authorized-tutorial" element={<AuthorizedTutorial />} />
            <Route path="/services/coworking" element={<Coworking />} />
            <Route path="/services/pro-community" element={<ProCommunity />} />
            <Route path="/services/opencourse" element={<OpenCourse />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<TeamDetails />} />
            <Route path="*" element={<PageNotFound />} />
            {/* Hrms */}
            <Route path="/products/hrms" element={<Hrms />} />
            <Route path="products/hrms/documentation" element={<HrmsDocumentation />} />
            <Route path="products/hrms/documentation/users" element={<HrmsDocUser />} />
            <Route path="products/hrms/documentation/job" element={<HrmsDocJob />} />
            <Route path="products/hrms/documentation/resume" element={<HrmsDocResume />} />
            <Route path="products/hrms/documentation/company" element={<HrmsDocCompany />} />
            {/* Delivery */}
            <Route path="/products/delivery" element={<Delivery />} />
            <Route path="products/delivery/documentation" element={<DeliveryDocumentation />} />
            <Route path="products/delivery/documentation/users" element={<DeliveryDocUser />} />
            <Route path="products/delivery/documentation" element={<DeliveryDocumentation />} />
            <Route path="products/delivery/documentation/users" element={<DeliveryDocUser />} />
            <Route path="products/delivery/documentation/kitchen" element={<DeliveryDocKitchen />} />
            <Route path="products/delivery/documentation/foods" element={<DeliveryDocFoods />} />
            <Route path="products/delivery/documentation/deliveryman" element={<DeliveryDocDeliveryman />} />
            <Route path="products/delivery/documentation/manager" element={<DeliveryDocManager />} />
            <Route path="products/delivery/documentation/orders" element={<DeliveryDocOrders />} />
          </Routes>
        </ActiveNavContext.Provider>
      </AsideScrollActiveProvider>
    </>
  );
}

export default App;

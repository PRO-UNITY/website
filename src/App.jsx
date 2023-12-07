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
  ITScholl,
  OpenCourse,
  PageNotFound,
  ProCommunity,
  Services,
  SoftwareDevelopenent,
} from "./pages";
import { Footer, Navbar } from "./components";
import { ActiveNavContext } from "./context/ActiveNav";
import { useState } from "react";

function App() {
  const [activeNav, setactiveNav] = useState(1);
  return (
    <>
      <ActiveNavContext.Provider value={{ activeNav, setactiveNav }}>
        <Navbar />
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
          <Route path="/products/hrms" element={<Hrms />} />
          <Route path="/products/delivery" element={<Delivery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ActiveNavContext.Provider>
    </>
  );
}

export default App;

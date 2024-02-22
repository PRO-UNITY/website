import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
    About,
    AuthorizedTutorial,
    Contact,
    Coworking,
    Home,
    Hrms,
    ITScholl,
    OpenCourse,
    PageNotFound,
    ProCommunity,
    Services,
    SoftwareDevelopenent,
    TeamDetails,
    Products,
    Delivery,
    Students,
    ExpertDevlopers,
    License,
    PrivacyPolicy,
    Advertise,
    ClinicApp,
    ChatApp,
    TodoApp,
    SpaApp,
    Authentication,
    PaymentSucces,
    Store,
    RealEstate,
    QRApp,
} from "./pages";
import { ActiveNavContext } from "./context/ActiveNav";
import { AsideScrollActiveProvider } from "./context/AsideScrollActive";

function App() {
    const [activeHrmsDash, setActiveHrmsDash] = useState(1);
    const [activeHrmsdoc, setActiveHrmsdoc] = useState(null);
    return (
        <>
            <AsideScrollActiveProvider>
                <ActiveNavContext.Provider
                    value={{
                        activeHrmsDash,
                        setActiveHrmsDash,
                        activeHrmsdoc,
                        setActiveHrmsdoc,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/students" element={<Students />} />
                        <Route
                            path="/expert-devlopers"
                            element={<ExpertDevlopers />}
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/license" element={<License />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route path="/advertise" element={<Advertise />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                            path="/services/softwareDevelopenent"
                            element={<SoftwareDevelopenent />}
                        />
                        <Route
                            exact
                            path="/services/IT-school"
                            element={<ITScholl />}
                        />
                        <Route
                            path="/services/authorized-tutorial"
                            element={<AuthorizedTutorial />}
                        />
                        <Route
                            path="/services/coworking"
                            element={<Coworking />}
                        />
                        <Route
                            path="/services/pro-community"
                            element={<ProCommunity />}
                        />
                        <Route
                            path="/services/opencourse"
                            element={<OpenCourse />}
                        />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/user/:id" element={<TeamDetails />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="/products/hrms" element={<Hrms />} />
                        <Route
                            path="/products/chat-app"
                            element={<ChatApp />}
                        />
                        <Route
                            path="/products/todo-app"
                            element={<TodoApp />}
                        />
                        <Route
                            path="/products/delivery"
                            element={<Delivery />}
                        />
                        <Route
                            path="products/clinic-app"
                            element={<ClinicApp />}
                        />
                        <Route path="products/spa-app" element={<SpaApp />} />
                        <Route
                            path="products/authentication"
                            element={<Authentication />}
                        />
                        <Route path="products/store" element={<Store />} />
                        <Route
                            path="/payment_successful"
                            element={<PaymentSucces />}
                        />
                        <Route
                            path="products/real-estate"
                            element={<RealEstate />}
                        />
                        <Route path="products/qr-app" element={<QRApp />} />
                    </Routes>
                </ActiveNavContext.Provider>
            </AsideScrollActiveProvider>
        </>
    );
}

export default App;

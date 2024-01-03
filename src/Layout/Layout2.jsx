/* eslint-disable react/prop-types */
// import i18next from "i18next";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logotogether.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { followUsLinks } from "../constants";

const Footerlinks = {
  ServicesLink: [
    {
      name: "Web Developement ",
      path: "/",
    },
    {
      name: "Backend Developement ",
      path: "/",
    },
    {
      name: "Data Science",
      path: "/",
    },
    {
      name: "Web and Graphic design",
      path: "/",
    },
    {
      name: "Architect",
      path: "/",
    },
  ],
  QuickLinks: [
    {
      name: "Events ",
      path: "/home2/events",
    },
    {
      name: "About",
      path: "/home2/about2",
    },
    {
      name: "Products",
      path: "/home2/products2",
    },
    {
      name: "Blog",
      path: "/home2/blog",
    },
    {
      name: "Contant",
      path: "/home2/contact2",
    },
  ],
};

const Layout2 = ({ children }) => {
  const { t } = useTranslation();
  const [navListShow, setNavListShow] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className="home2">
      {/* Navbar */}
      <div className="navbar-wrapp">
        <nav className="navbar-home container-lg  p-0  ">
          <div className="container-fluid d-flex justify-content-between">
            <Link
              to={"/home2"}
              className={"navbar-brand d-flex align-items-center "}
            >
              <img src={Logo} alt="" width={150} className="" />
            </Link>
            <div
              className="menu-bars"
              onClick={() => setNavListShow((prev) => !prev)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div
              className={`navbar-res d-flex flex-column px-3  py-4 flex-lg-row justify-content-between align-items-lg-center  w-100  ms-lg-5 ${
                navListShow ? "show" : ""
              }`}
            >
              <ul className="d-flex  mx-0 mx-lg-auto align-items-lg-center justify-content-between flex-column p-0  h-100 flex-lg-row m-0 pb-4 pb-lg-0">
                <li>
                  <Link
                    to={"/home2"}
                    className={`nav-link  ${
                      pathname === "/home2" ? "text-decoration-underline" : ""
                    }`}
                  >
                    {t("navbar.home")}
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    to={"/home2/services"}
                    className={`nav-link  ${
                      pathname === "/home2/services"
                        ? "text-decoration-underline"
                        : ""
                    }`}
                  >
                    {t("navbar.service")}
                  </Link>
                  <div className="dropdown-item border-top ">
                    <ul className="p-0">
                      <li>
                        <Link
                          to={"/home2/services-detail"}
                          className="nav-link"
                        >
                          Web Developement
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to={"/home2/events"}
                    className={`nav-link  ${
                      pathname === "/home2/events"
                        ? "text-decoration-underline"
                        : ""
                    }`}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/home2/about2"}
                    className={`nav-link  ${
                      pathname === "/home2/about2"
                        ? "text-decoration-underline"
                        : ""
                    }`}
                  >
                    {t("navbar.about")}
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    to={"/home2/products2"}
                    className={`nav-link  ${
                      pathname === "/home2/products2"
                        ? "text-decoration-underline"
                        : ""
                    }`}
                  >
                    {t("navbar.products")}
                  </Link>
                  <div className="dropdown-item border-top ">
                    <ul className="p-0">
                      <li>
                        <Link to={"/home2/products2/hrms"} className="nav-link">
                          Hrms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/home2/products2/delivery"}
                          className="nav-link"
                        >
                          Delivery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to={"/home2/blog"}
                    className={`nav-link  ${
                      pathname === "/home2/blog"
                        ? "text-decoration-underline"
                        : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/home2/contact2"}
                    className={`nav-link  ${
                      pathname === "/home2/contact2"
                        ? "text-decoration-underline"
                        : ""
                    }`}
                  >
                    {t("navbar.contact")}
                  </Link>
                </li>
                {/* <li className="dropdown">
                  <Link to={"/"} className="nav-link">
                    {t("navbar.language")}
                  </Link>
                  <div className="dropdown-item border-top ">
                    <ul className="p-0">
                      <li
                        className="nav-link cursor"
                        onClick={() => {
                          i18next.changeLanguage("en");
                        }}
                      >
                        En
                      </li>
                      <li
                        className="nav-link cursor"
                        onClick={() => {
                          i18next.changeLanguage("ru");
                        }}
                      >
                        Ru
                      </li>
                      <li
                        className="nav-link cursor"
                        onClick={() => {
                          i18next.changeLanguage("uz");
                        }}
                      >
                        Uz
                      </li>
                    </ul>
                  </div>
                </li> */}
              </ul>
              <div className="d-flex gap-3">
                <button className="btn btn-outline-dark rounded-3 border-2 py-1">
                  Login
                </button>
                <button className="btn  btn-gold  rounded-3 border-2 py-1">
                  Start studying
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar end */}
      <main className="min-h-[100vh]">{children}</main>
      {/* Footer */}
      <footer className="footer bg-section-prymary py-5">
        <div className="container">
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-4 ">
              <h3 className="text-light font-primary mb-4">
                {t("footer.address")}
              </h3>
              <ul className="p-0">
                <li>
                  <a href="tel:+998-33-899-50-00">
                    +998 33 899 50 00{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>

                <li className="">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:prounity.uz@gmail.com"
                  >
                    prounity.uz@gmail.com{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li className="mt-1 location ">
                  <a href="#">
                    {t("topbar.location")}{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
              <div className="d-flex pt-2">
                {followUsLinks.map((item) => (
                  <a
                    key={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none btn btn-light btn-social rounded-circle"
                    href={item.link}
                  >
                    <img width={17} src={item.icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <h3 className="text-light mb-3 font-primary">
                {t("footer.services.title")}
              </h3>
              <ul className="p-0">
                {Footerlinks.ServicesLink.map((item, i) => (
                  <li key={i} className="mb-1">
                    <Link to={"/home2/services-detail"}>
                      {item.name} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <h3 className="font-primary text-light mb-3">
                {t("footer.quicklinks.title")}
              </h3>
              <ul className="p-0">
                {Footerlinks.QuickLinks.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path}>
                      {item.name} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className=" copyright text-light text-center fs-5 text-md-center mb-3 mb-md-0">
                © Pro Unity, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end*/}
    </div>
  );
};

export default Layout2;

import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logotogether.png";
import Topbar from "../Topbar/Topbar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { useState } from "react";

const MyNavbar = () => {
  const { t } = useTranslation();
  const [activeLang, setactiveLang] = useState("en");
  const { pathname } = useLocation();
  const changeLang = (lang) => {
    i18next.changeLanguage(lang);
    setactiveLang(document.cookie.split("=")[1] || "en");
  };

  return (
    <>
      <Topbar />
      <Navbar
        style={{ backgroundColor: "yellow" }}
        expand="lg"
        className="sticky-top navbar"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/home" className="logo">
            <img className="ml-0 " src={Logo} alt="prounity-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0 align-items-center">
              <NavLink
                className={`${pathname.includes("/home") ? "active" : ""} py-0`}
                as={Link}
                to="/home"
              >
                {t("navbar.home")}
              </NavLink>
              <NavLink
                as={Link}
                to="/about"
                className={`${pathname.includes("/about") && "active"} py-0`}
              >
                {t("navbar.about")}
              </NavLink>
              <Nav.Link
                as={Link}
                to="/services"
                className={`${pathname.includes("/services") && "active"} py-0`}
              >
                {t("navbar.service")}
              </Nav.Link>
              <div className="nav-item dropdown">
                <NavLink
                  as={Link}
                  to={"/products"}
                  className={`py-0 nav-link dropdown-toggle ${
                    pathname.includes("/products") && "active"
                  }`}
                >
                  {t("navbar.products")}
                </NavLink>
                <div className="dropdown-menu  rounded px-3 mt-2">
                  <Link
                    to={"/products/hrms"}
                    className={`dropdown-item px-0 ${
                      pathname === "/products/hrms"
                        ? "dropdown-item-active"
                        : ""
                    }`}
                  >
                    Hrms
                  </Link>
                  <Link
                    to={"/products/delivery"}
                    className={`dropdown-item px-0 ${
                      pathname === "/products/delivery"
                        ? "dropdown-item-active"
                        : ""
                    }`}
                  >
                    Delivery
                  </Link>
                  <Link
                    to={"/products/chat-app"}
                    className={`dropdown-item px-0 ${
                      pathname === "/products/chat-app"
                        ? "dropdown-item-active"
                        : ""
                    }`}
                  >
                    Chat App
                  </Link>
                  <Link
                    to={"/products/clinic-app"}
                    className={`dropdown-item px-0 ${
                      pathname === "/products/clinic-app"
                        ? "dropdown-item-active"
                        : ""
                    }`}
                  >
                    Clinic App
                  </Link>
                  <Link
                    to={"/products/todo-app"}
                    className={`dropdown-item px-0 ${
                      pathname === "/products/clinic-app"
                        ? "dropdown-item-active"
                        : ""
                    }`}
                  >
                    Todo
                  </Link>
                </div>
              </div>

              <Nav.Link
                as={Link}
                to="/contact"
                className={`${pathname.includes("/contact") && "active"} py-0 `}
              >
                {t("navbar.contact")}
              </Nav.Link>
              <div className="nav-item dropdown ">
                <a href="#" className={`py-0 nav-link dropdown-toggle`}>
                  {t("navbar.language")}
                </a>
                <div className="dropdown-menu lang-menu  rounded pb-3  px-3 mt-2">
                  <span
                    className={`dropdown-item px-0 ${
                      activeLang === "en" ? "dropdown-item-active " : ""
                    } `}
                    onClick={() => changeLang("en")}
                  >
                    En
                  </span>
                  <span
                    className={`dropdown-item px-0 ${
                      activeLang === "ru" ? "dropdown-item-active " : ""
                    } `}
                    onClick={() => changeLang("ru")}
                  >
                    Ru
                  </span>
                  <span
                    className={`dropdown-item px-0 ${
                      activeLang === "uz" ? "dropdown-item-active " : ""
                    } `}
                    onClick={() => changeLang("uz")}
                  >
                    Uz
                  </span>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default MyNavbar;

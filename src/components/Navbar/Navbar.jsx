import { Link } from "react-router-dom";
import Logo from "../../assets/logotogether.png";
import Topbar from "../Topbar/Topbar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import "./Navbar.css";

const MyNavbar = () => {
  const { t } = useTranslation();
  const [activeNav, setactiveNav] = useState(1);
  const [activeProduct, setactiveProduct] = useState(0);
  const [activeLang, setactiveLang] = useState("en");
  return (
    <>
      <Topbar />
      <Navbar
        style={{ backgroundColor: "yellow" }}
        expand="lg"
        className="sticky-top navbar wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/" className="logo">
            <img className="ml-0 " src={Logo} alt="prounity-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0 align-items-center">
              <Nav.Link
                className={`${activeNav === 1 ? "active" : ""} py-0`}
                onClick={() => setactiveNav(1)}
                as={Link}
                to="/"
              >
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`${activeNav === 2 ? "active" : ""} py-0`}
                onClick={() => setactiveNav(2)}
              >
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className={`${activeNav === 3 ? "active" : ""} py-0`}
                onClick={() => setactiveNav(3)}
              >
                {t("navbar.service")}
              </Nav.Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className={`${
                    activeNav === 4 ? "active" : ""
                  } py-0 nav-link dropdown-toggle `}
                  onClick={() => setactiveNav(4)}
                >
                  Products
                </a>
                <div className="dropdown-menu  rounded px-3 mt-2">
                  <Link
                    to={"/products/hrms"}
                    className={`dropdown-item    px-0 ${
                      activeProduct === 1 ? "dropdown-item-active " : ""
                    }`}
                    onClick={() => setactiveProduct(1)}
                  >
                    Hrms
                  </Link>
                  <Link
                    to={"/products/delivery"}
                    className={`dropdown-item    px-0 ${
                      activeProduct === 2 ? "dropdown-item-active " : ""
                    }`}
                    onClick={() => setactiveProduct(2)}
                  >
                    Delivery
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown ">
                <a
                  href="#"
                  className={`${
                    activeNav === 5 ? "active" : ""
                  } py-0 nav-link dropdown-toggle `}
                  onClick={() => setactiveNav(5)}
                >
                  En
                </a>
                <div className="dropdown-menu  rounded pb-3  px-3 mt-2">
                  <span
                    className={`dropdown-item px-0 ${
                      activeLang === "en" ? "dropdown-item-active " : ""
                    } `}
                    onClick={() => {
                      i18next.changeLanguage("en");
                      setactiveLang("en");
                    }}
                  >
                    En
                  </span>
                  <span
                    className={`dropdown-item px-0 ${
                      activeLang === "ru" ? "dropdown-item-active " : ""
                    } `}
                    onClick={() => {
                      i18next.changeLanguage("ru");
                      setactiveLang("ru");
                    }}
                  >
                    Ru
                  </span>
                  <span
                    className={`dropdown-item px-0 ${
                      activeLang === "uz" ? "dropdown-item-active " : ""
                    } `}
                    onClick={() => {
                      i18next.changeLanguage("uz");
                      setactiveLang("uz");
                    }}
                  >
                    Uz
                  </span>
                </div>
              </div>
              <Nav.Link
                as={Link}
                to="/contact"
                className={`${activeNav === 6 ? "active" : ""} py-0 `}
                onClick={() => setactiveNav(6)}
              >
                {t("navbar.contact")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default MyNavbar;

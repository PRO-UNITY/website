import { Link } from "react-router-dom";
import Logo from "../../assets/logotogether.png";
import Topbar from "../Topbar/Topbar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useState } from "react";
import "./Navbar.css";

const MyNavbar = () => {
  const { t } = useTranslation();
  const [activeNav, setactiveNav] = useState(1);
  // const Navs = [
  //   { id: 1, name: t("navbar.home") },
  //   { id: 2, name: t("navbar.about") },
  //   { id: 3, name: t("navbar.service") },
  //   { id: 4, name: "Products", child: [{ id: 1, name: "Hrms" }] },
  //   {
  //     id: 5,
  //     name: "En",
  //     child: [
  //       { id: 1, name: "En" },
  //       { id: 2, name: "Ru" },
  //       { id: 3, name: "Uz" },
  //     ],
  //   },
  //   { id: 6, name: "Contact" },
  // ];
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
              <NavDropdown
                title={"Products"}
                id="product"
                className={`${activeNav === 4 ? "active" : ""} `}
                onClick={() => setactiveNav(4)}
              >
                <NavDropdown.Item className="dropdown-menu rounded-0 rounded-bottom m-0">
                  Hrms
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-menu rounded-0 rounded-bottom m-0">
                  Hrms
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="En"
                id="language-dropdown"
                className={activeNav === 5 ? "active" : ""}
                onClick={() => setactiveNav(5)}
              >
                <NavDropdown.Item onClick={() => i18next.changeLanguage("en")}>
                  En
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18next.changeLanguage("ru")}>
                  Ru
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18next.changeLanguage("uz")}>
                  Uz
                </NavDropdown.Item>
              </NavDropdown>
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

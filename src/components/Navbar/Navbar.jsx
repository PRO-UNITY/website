import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Logo from "../../assets/logotogether.png";
import Topbar from "../Topbar/Topbar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <Navbar
        style={{ backgroundColor: "yellow" }}
        expand="lg"
        className="sticky-top wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/">
            <img
              className="ml-0"
              style={{ width: 200, height: 100, objectFit: "cover" }}
              src={Logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0">
              <Nav.Link as={Link} to="/" className="nav-link active">
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link">
                {t("navbar.service")}
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="nav-link">
                {t("navbar.products")}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                {t("navbar.contact")}
              </Nav.Link>
              <NavDropdown title="En" id="language-dropdown">
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
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default MyNavbar;

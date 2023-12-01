import { Link } from "react-router-dom";
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
        className="sticky-top navbar wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/" className="logo">
            <img className="ml-0 " src={Logo} alt="prounity-logo" />
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
              <div className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Products
                </span>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    Hrms
                  </a>
                </div>
              </div>
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
              <Nav.Link as={Link} to="/contact" className="nav-link">
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

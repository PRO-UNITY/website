import { Link } from "react-router-dom";
import Logo from "../../assets/logotogether.png";
import Topbar from "../Topbar/Topbar";
const Navbar = () => {
  return (
    <>
      <Topbar />
      <nav
        style={{ backgroundColor: "yellow" }}
        className="navbar navbar-expand-lg navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link
          to={"/"}
          className="navbar-brand d-flex px-2 align-items-center pt-3 pb-4"
        >
          <img
            className=" ml-0"
            style={{ width: 200, height: 100, objectFit: "cover" }}
            src={Logo}
            alt
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to={"/"} className="nav-item nav-link active">
              Home
            </Link>
            <Link to={"/about"} className="nav-item nav-link">
              About
            </Link>
            <Link to={"/services"} className="nav-item nav-link">
              Service
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Products
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  Hrms
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                En
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="uz.html" className="dropdown-item">
                  Uz
                </a>
                <a href="ru.html" className="dropdown-item">
                  Ru
                </a>
              </div>
            </div>
            <Link to={"/contact"} className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

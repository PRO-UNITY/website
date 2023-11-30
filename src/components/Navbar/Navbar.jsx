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
        <a
          href="index.html"
          className="navbar-brand d-flex px-2 align-items-center pt-3 pb-4"
        >
          <img
            className=" ml-0"
            style={{ width: 250, height: 150, objectFit: "contain" }}
            src={Logo}
            alt
          />
        </a>
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
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Products
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="feature.html" className="dropdown-item">
                  Feature
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Doctor
                </a>
                <a href="appointment.html" className="dropdown-item">
                  Appointment
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
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
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a
            href="appointment.html"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Appointment
            <i className="fa fa-arrow-right ms-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { followUsLinks } from "../../constants";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/oz5im3ic1GM48FfL6"
              className="mb-2 text-decoration-none text-white d-block"
            >
              <i className="fa fa-map-marker-alt me-3" />
              Islom Karimov 1 Street, Bukhara, Uzbekistan
            </a>
            <a
              href="tel:+998-33-899-50-00 "
              className="mb-2 text-decoration-none text-white d-block"
            >
              <i className="fa fa-phone-alt me-3" />
              +998 33 899 50 00
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:prounity.uz@gmail.com"
              className="mb-2 text-decoration-none text-white"
            >
              <i className="fa fa-envelope me-3" />
              prounity.uz@gmail.com
            </a>
            <div className="d-flex pt-2">
              {followUsLinks.map((item) => (
                <a
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none btn btn-outline-light btn-social rounded-circle"
                  href={item.link}
                >
                  <img width={16} src={item.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Services</h5>
            <a className="btn btn-link" href>
              Software Development
            </a>
            <a className="btn btn-link" href>
              IT School
            </a>
            <a className="btn btn-link" href>
              Authorized Tutorials
            </a>
            <a className="btn btn-link" href>
              Coworking
            </a>
            <a className="btn btn-link" href>
              Open Source
            </a>
            <a className="btn btn-link" href>
              Pro Community
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <Link to={"/about"} className="btn btn-link">
              About Us
            </Link>
            <Link to={"contact"} className="btn btn-link">
              Contact Us
            </Link>
            <Link to={"/services"} className="btn btn-link">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © Pro Unity, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

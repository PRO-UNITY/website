import { Link } from "react-router-dom";
import { followUsLinks } from "../../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <p className="fs-5 fw-semibold text-light mb-4">
              {t("footer.address")}
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/oz5im3ic1GM48FfL6"
              className="mb-2 text-decoration-none  d-block btn btn-link"
            >
              <i className="fa fa-map-marker-alt me-3" />
              {t("topbar.location")}
            </a>
            <a
              href="tel:+998-33-899-50-00 "
              className="mb-2 text-decoration-none  d-block btn btn-link"
            >
              <i className="fa fa-phone-alt me-3" />
              +998 33 899 50 00
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:prounity.uz@gmail.com"
              className="mb-2 text-decoration-none btn btn-link text-lowercase"
            >
              <i className="fa fa-envelope me-3" />
              prounity.uz@gmail.com
            </a>
            <div className="d-flex pt-2">
              {followUsLinks.map((item) => (
                <a
                  aria-label="Pro Unity social links"
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none btn btn-light btn-social rounded-circle"
                  href={item.link}
                >
                  <img width={16} height={16} src={item.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <p className="fs-5 fw-semibold text-light mb-4">
              {t("footer.services.title")}
            </p>
            <Link
              to={"/services/softwareDevelopenent"}
              className="btn btn-link"
            >
              {t("footer.services.link1")}
            </Link>
            <Link to={"/services/IT-school"} className="btn btn-link">
              {t("footer.services.link2")}
            </Link>
            <Link to={"/services/authorized-tutorial"} className="btn btn-link">
              {t("footer.services.link3")}
            </Link>
            <Link to={"/services/coworking"} className="btn btn-link">
              {t("footer.services.link4")}
            </Link>
            <Link to={"/services/opencourse"} className="btn btn-link">
              {t("footer.services.link5")}
            </Link>
            <Link to={"/services/pro-community"} className="btn btn-link">
              {t("footer.services.link6")}
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <p className="fs-5 fw-semibold text-light mb-4">
              {t("footer.quicklinks.title")}
            </p>
            <Link to={"/about"} className="btn btn-link">
              {t("footer.quicklinks.link1")}
            </Link>
            <Link to={"contact"} className="btn btn-link">
              {t("footer.quicklinks.link2")}
            </Link>
            <Link to={"/services"} className="btn btn-link">
              {t("footer.quicklinks.link3")}
            </Link>
            <Link to={"/advertise"} className="btn btn-link">
              {t("footer.quicklinks.link4")}
            </Link>
            <Link to={"/privacy-policy"} className="btn btn-link">
              {t("footer.quicklinks.link5")}
            </Link>
            <Link to={"/license"} className="btn btn-link">
              {t("footer.quicklinks.link6")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" copyright text-center text-md-center mb-3 mb-md-0">
          {t("footer.footer-bottom")}
        </div>
      </div>
    </div>
  );
};

export default Footer;

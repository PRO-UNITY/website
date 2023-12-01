import { Link } from "react-router-dom";
import { followUsLinks } from "../../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">{t("footer.address")}</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/oz5im3ic1GM48FfL6"
              className="mb-2 text-decoration-none text-white d-block"
            >
              <i className="fa fa-map-marker-alt me-3" />
              {t("topbar.location")}
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
            <h5 className="text-light mb-4">{t("footer.services.title")}</h5>
            <Link
              to={"/services/softwareDevelopenent"}
              className="btn btn-link"
              href
            >
              {t("footer.services.link1")}
            </Link>
            <Link to={"/services/IT-school"} className="btn btn-link" href>
              {t("footer.services.link2")}
            </Link>
            <Link
              to={"/services/authorized-tutorial"}
              className="btn btn-link"
              href
            >
              {t("footer.services.link3")}
            </Link>
            <Link to={"/services/coworking"} className="btn btn-link" href>
              {t("footer.services.link4")}
            </Link>
            <Link to={"/services/opencourse"} className="btn btn-link" href>
              {t("footer.services.link5")}
            </Link>
            <Link to={"/services/pro-community"} className="btn btn-link" href>
              {t("footer.services.link6")}
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">{t("footer.quicklinks.title")}</h5>
            <Link to={"/about"} className="btn btn-link">
              {t("footer.quicklinks.link1")}
            </Link>
            <Link to={"contact"} className="btn btn-link">
              {t("footer.quicklinks.link2")}
            </Link>
            <Link to={"/services"} className="btn btn-link">
              {t("footer.quicklinks.link3")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" copyright text-center text-md-center mb-3 mb-md-0">
          © Pro Unity, All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

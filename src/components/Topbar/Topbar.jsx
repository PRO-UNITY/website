import { useTranslation } from "react-i18next";
import { followUsLinks } from "../../constants";

const Topbar = () => {
  const { t } = useTranslation();
  return (
    <div
      className="container-fluid p-0 wow fadeIn topbar "
      data-wow-delay="0.1s"
    >
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://maps.app.goo.gl/oz5im3ic1GM48FfL6"
            className="h-100 d-inline-flex align-items-center py-3 me-4 text-decoration-none  text-dark"
          >
            <small className="fa fa-map-marker-alt pro-text-primary me-2" />
            <small>{t("topbar.location")}</small>
          </a>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock pro-text-primary me-2" />
            <small>{t("topbar.time")}</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <a
            href="tel:+998-33-899-50-00"
            className="h-100 d-inline-flex align-items-center py-3 me-4 text-decoration-none text-dark"
          >
            <small className="fa fa-phone-alt pro-text-primary me-2" />
            <small>+998 33 899 50 00</small>
          </a>
          <div className="h-100 d-inline-flex align-items-center">
            {followUsLinks.map((item) => (
              <a
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links text-decoration-none btn-sm-square rounded-circle bg-white  me-1"
                href={item.link}
              >
                <img width={16} src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

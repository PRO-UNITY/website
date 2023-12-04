import creator from "../../assets/creater.jpg";
import albomPro from "../../assets/albompro.jpg";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid rounded w-75 align-self-end img-lider"
                src={creator}
                alt
              />
              <img
                className="img-animation img-fluid rounded w-50 bg-white cursor"
                src={albomPro}
                alt
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("aboutsection.aboutbutton")}
            </p>
            <h1 className="mb-4">{t("herosection.title")}</h1>
            <p>{t("aboutsection.text")}</p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              {t("aboutsection.list1")}
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              {t("aboutsection.list2")}
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              {t("aboutsection.list3")}
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              {t("aboutsection.list4")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import "./Sevisec.css";

const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout title={"ProUnity | Services"}>
      <div className="py-5 services-page">
        <div className="px-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border text-white rounded-pill py-1 px-4">
              {t("servicesection.subtitle")}
            </p>
            <h1 className="text-white">{t("servicesection.title")}</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item  rounded-4 h-100 px-3  px-md-5 py-4">
                <div className="d-inline-flex align-items-center justify-content-center icon-box rounded-circle mb-4">
                  <i className="fa-solid fa-computer fs-2 pro-text-primary " />
                </div>
                <h1 className="fs-2 mb-3">
                  {t("servicesection.cardservice1.title")}
                </h1>
                <p className="mb-4">
                  {t("servicesection.cardservice1.Description").slice(0, 100)}
                  ...
                </p>
                <Link
                  to={"/services/softwareDevelopenent"}
                  title="Software developement"
                  className="btn"
                >
                  <i className="fa fa-plus   me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item  rounded-4 h-100 px-3  px-md-5 py-4">
                <div className="d-inline-flex align-items-center justify-content-center icon-box rounded-circle mb-4">
                  <i className="fa-solid fa-school pro-text-primary  fs-2" />
                </div>
                <h1 className="fs-2 mb-3">
                  {t("servicesection.cardservice2.title")}
                </h1>
                <p className="mb-4">
                  {t("servicesection.cardservice2.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/IT-school"} className="btn ">
                  <i className="fa fa-plus me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded-4 h-100 px-3  px-md-5 py-4">
                <div className="d-inline-flex align-items-center justify-content-center icon-box rounded-circle mb-4">
                  <i className="fa-solid fa-diagram-successor pro-text-primary  fs-2" />
                </div>
                <h1 className="fs-2 mb-3">
                  {t("servicesection.cardservice3.title")}
                </h1>
                <p className="mb-4">
                  {t("servicesection.cardservice3.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/authorized-tutorial"} className="btn ">
                  <i className="fa fa-plus   me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item  rounded-4 h-100 px-3  px-md-5 py-4">
                <div className="d-inline-flex align-items-center justify-content-center icon-box rounded-circle mb-4">
                  <i className="fa-solid fa-briefcase pro-text-primary  fs-2" />
                </div>
                <h1 className="fs-2 mb-3">
                  {t("servicesection.cardservice4.title")}
                </h1>
                <p className="mb-4">
                  {t("servicesection.cardservice4.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/coworking"} className="btn ">
                  <i className="fa fa-plus   me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item  rounded-4 h-100 px-3  px-md-5 py-4">
                <div className="d-inline-flex align-items-center justify-content-center icon-box rounded-circle mb-4">
                  <i className="fa-brands fa-sourcetree pro-text-primary  fs-2" />
                </div>
                <h1 className="fs-2 mb-3">
                  {t("servicesection.cardservice5.title")}
                </h1>
                <p className="mb-4">
                  {t("servicesection.cardservice5.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/opencourse"} className="btn ">
                  <i className="fa fa-plus   me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item  rounded-4 h-100 px-3  px-md-5 py-4">
                <div className="d-inline-flex align-items-center justify-content-center icon-box rounded-circle mb-4">
                  <i className="fa-solid fa-people-group pro-text-primary  fs-2" />
                </div>
                <h1 className="fs-2 mb-3">
                  {t("servicesection.cardservice6.title")}
                </h1>
                <p className="mb-4">
                  {t("servicesection.cardservice6.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/pro-community"} className="btn  pl-5">
                  <i className="fa fa-plus me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;

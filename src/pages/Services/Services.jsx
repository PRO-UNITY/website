import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="container-xxl py-5">
        <div className="container ">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("servicesection.subtitle")}
            </p>
            <h1>{t("servicesection.title")}</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white rounded h-100 p-4 p-md-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa-solid fa-computer fs-4 pro-text-primary " />
                </div>
                <h4 className="mb-3">
                  {t("servicesection.cardservice1.title")}
                </h4>
                <p className="mb-4">
                  {t("servicesection.cardservice1.Description").slice(0, 100)}
                  ...
                </p>
                <Link
                  to={"/services/softwareDevelopenent"}
                  className="btn bg-light"
                  href
                >
                  <i className="fa fa-plus pro-text-primary  me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white rounded h-100 p-4 p-md-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa-solid fa-school pro-text-primary  fs-4" />
                </div>
                <h4 className="mb-3">
                  {t("servicesection.cardservice2.title")}
                </h4>
                <p className="mb-4">
                  {t("servicesection.cardservice2.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/IT-school"} className="btn bg-light" href>
                  <i className="fa fa-plus pro-text-primary  me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white rounded h-100 p-4 p-md-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa-solid fa-diagram-successor pro-text-primary  fs-4" />
                </div>
                <h4 className="mb-3">
                  {t("servicesection.cardservice3.title")}
                </h4>
                <p className="mb-4">
                  {t("servicesection.cardservice3.Description").slice(0, 100)}
                  ...
                </p>
                <Link
                  to={"/services/authorized-tutorial"}
                  className="btn bg-light"
                  href
                >
                  <i className="fa fa-plus pro-text-primary  me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white rounded h-100 p-4 p-md-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa-solid fa-briefcase pro-text-primary  fs-4" />
                </div>
                <h4 className="mb-3">
                  {t("servicesection.cardservice4.title")}
                </h4>
                <p className="mb-4">
                  {t("servicesection.cardservice4.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/coworking"} className="btn bg-light" href>
                  <i className="fa fa-plus pro-text-primary  me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white rounded h-100 p-4 p-md-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa-brands fa-sourcetree pro-text-primary  fs-4" />
                </div>
                <h4 className="mb-3">
                  {t("servicesection.cardservice5.title")}
                </h4>
                <p className="mb-4">
                  {t("servicesection.cardservice5.Description").slice(0, 100)}
                  ...
                </p>
                <Link to={"/services/opencourse"} className="btn bg-light" href>
                  <i className="fa fa-plus pro-text-primary  me-3" />
                  {t("servicesection.servicebutton")}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white rounded h-100 p-4 p-md-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa-solid fa-people-group pro-text-primary  fs-4" />
                </div>
                <h4 className="mb-3">
                  {t("servicesection.cardservice6.title")}
                </h4>
                <p className="mb-4">
                  {t("servicesection.cardservice6.Description").slice(0, 100)}
                  ...
                </p>
                <Link
                  to={"/services/pro-community"}
                  className="btn bg-light pl-5"
                  href
                >
                  <i className="fa fa-plus pro-text-primary  me-3" />
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

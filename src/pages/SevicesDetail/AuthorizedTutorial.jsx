import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";

const AuthorizedTutorial = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      {" "}
      <div className="container-xxl  py-5">
        <div className="container ">
          <div>
            <div className="service-item row bg-white rounded h-100 p-5">
              <div className="col-lg-4 d-flex align-items-center justify-content-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 150, height: 150 }}
                >
                  <i className="fa-solid fa-diagram-successor pro-text-primary  fs-4" />
                </div>
              </div>
              <div className="col-lg-8">
                <h2 className="mb-3 ">
                  {t("servicesection.cardservice3.title")}
                </h2>
                <p className="mb-4">
                  {t("servicesection.cardservice3.Description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorizedTutorial;

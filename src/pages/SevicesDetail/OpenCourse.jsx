import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const OpenCourse = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="container-xxl servces-detail py-5">
      <div className="container ">
        <div className=" wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item row bg-white rounded h-100 p-5">
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 150, height: 150 }}
              >
                 <i className="fa-brands fa-sourcetree text-primary fs-4" />
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="mb-3 ">
                {t("servicesection.cardservice5.title")}
              </h2>
              <p className="mb-4">
                {t("servicesection.cardservice5.Description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCourse;

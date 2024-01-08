import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";

const ITScholl = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="servces-detail py-5">
        <div className="container">
          <div className="text-light mt-5">
            <h2 className="mt-3 display-4 fw-semibold text-center text-light">
              {t("servicesection.cardservice2.title")}
            </h2>
            <div className="p-4 p-md-5">
              <p className="mb-4 fs-5 text-center">
                {t("servicesection.cardservice2.Description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ITScholl;

import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <Layout title={"ProUnity | Privacy Policy"}>
      <div className="license pro-bg-primary">
        <div className="container-lg  py-5">
          <h1 className="section-title text-light">{t("PrivacyPolicy.title")}</h1>
          <div className="mt-5 pt-3 license-content">
            <p
              className="text-light fs-5"
              dangerouslySetInnerHTML={{
                __html: t("PrivacyPolicy.text"),
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

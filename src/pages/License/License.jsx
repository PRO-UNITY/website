import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";
import "./License.css";
const License = () => {
  const { t } = useTranslation();
  return (
    <Layout title={"ProUnity | License"}>
      <div className="license pro-bg-primary">
        <div className="container-lg  py-5">
          <h1 className="section-title text-light">{t("license.title")}</h1>
          <div className="mt-5 license-content">
            <p className=""></p>
            <p
              className="text-light fs-5"
              dangerouslySetInnerHTML={{
                __html: t("license.text"),
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default License;

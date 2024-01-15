import creator from "../../assets/creater.jpg";
import albomPro from "../../assets/albompro.jpg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Layout from "../../Layout/Layout";
const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout title={"ProUnity | About Us "}>
      <div className="container-xxl py-5 mb-5 mb-">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn">
              <div className="d-flex flex-column">
                <img
                  width={"75%"}
                  height={"100%"}
                  className="img-fluid rounded align-self-end img-lider"
                  src={creator}
                  alt="creator"
                />
                <a
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1u87Btr9npvvZ-23WjS3ZpDnOXHln9dea/view?usp=sharing"
                  }
                  rel="noreferrer"
                >
                  <img
                    width={"50%"}
                    height={"100%"}
                    className="img-animation img-fluid rounded  bg-white cursor"
                    src={albomPro}
                    alt={"albom-pro"}
                    style={{ marginTop: "-25%" }}
                  />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn ps-md-5  "
              data-wow-delay="0.5s"
            >
              <p className="d-inline-block border rounded-pill py-1 px-4  mt-5">
                {t("aboutsection.aboutbutton")}
              </p>
              <h1 className="mb-4">{t("herosection.title")}</h1>
              <p>{t("aboutsection.text")}</p>
              <p>
                <i className="far fa-check-circle pro-text-primary  me-3" />
                {t("aboutsection.list1")}
              </p>
              <p>
                <i className="far fa-check-circle pro-text-primary  me-3" />
                {t("aboutsection.list2")}
              </p>
              <p>
                <i className="far fa-check-circle pro-text-primary  me-3" />
                {t("aboutsection.list3")}
              </p>
              <p>
                <i className="far fa-check-circle pro-text-primary  me-3" />
                {t("aboutsection.list4")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

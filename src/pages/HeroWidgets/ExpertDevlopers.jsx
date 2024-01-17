import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { teamMembers } from "../../constants";
import { OurTeam } from "../../components";
import { useTranslation } from "react-i18next";

const ExpertDevlopers = () => {
  const { t } = useTranslation();
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    setDevelopers(teamMembers.filter((item) => item.role == "developer"));
  }, []);
  return (
    <Layout>
      <div className="py-5 border-top border-primary">
        <div className="px-5 container">
          <div className="text-center mx-auto mb-5">
            <h1 className="display-3 fw-semibold  pro-text-primary">
              {t("herosection.developers")}
            </h1>
          </div>
          <div className="row g-4 h-100 ">
            {developers.map((item, i) => (
              <OurTeam key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExpertDevlopers;

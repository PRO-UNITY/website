import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { teamMembers } from "../../constants";
import "./TeamDatail.css";
import { useEffect, useState } from "react";

const TeamDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const newUser = teamMembers.filter(
      (item) => item.name.replace(/\s/g, "").toLowerCase() == id.toLowerCase()
    );
    console.log(newUser);
    setUser(newUser);
  }, [id]);

  return (
    <Layout>
      <div className="team-detail pro-bg-primary py-5 h-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img-card ">
                <img src={user[0]?.image} alt="team-img" />
              </div>
            </div>
            <div className="col-lg-7 px-5 d-flex align-items-center   text-white">
              <div className="content">
                <h2
                  style={{ fontWeight: "400" }}
                  className="h1 display-3 text-center"
                >
                  {user[0]?.name}
                </h2>
                <div className="row">
                  <div className="col-5">
                    <h4 className="fs-3 pt-5">Position:</h4>
                    <h4 className="fs-3 pt-3">Function:</h4>
                    <h4 className="fs-3 pt-3">Education:</h4>
                    <h4 className="fs-3 pt-3">Social Media:</h4>
                  </div>
                  <div className="col-7">
                    <h4 className="fs-3 fw-normal pt-5">
                      {user[0]?.occupation}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamDetails;

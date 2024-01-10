import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
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
    setUser(newUser[0]);
  }, [id]);

  return (
    <Layout title={`ProUnity | ${user?.name}`}>
      <div className="team-detail pro-bg-primary py-5 h-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img-card ">
                <img src={user?.image} alt="team-img" />
              </div>
            </div>
            <div className="col-lg-7 px-3 px-md-5 d-flex align-items-center text-white">
              <div className="content w-100">
                <h2 className="h1 display-3 text-center fw-normal">
                  {user?.name}
                </h2>
                <div className="">
                  <div className="row">
                    <div className="col-5">
                      <h4 className="fs-3 pt-5">Position:</h4>
                    </div>
                    <div className="col-7">
                      <h4 className="fs-4 fw-normal pt-5">
                        {user?.occupation}
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <h4 className="fs-3 pt-3">Education:</h4>
                    </div>
                    <div className="col-7">
                      <h4 className="fs-4 pt-3 fw-normal">{user?.education}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <h4 className="fs-3 pt-3">Email:</h4>
                    </div>
                    <div className="col-7">
                      <h4 className="fs-4 pt-3 fw-normal text-break">
                        {user?.email}
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <h4 className="fs-3 pt-3">Social Media:</h4>
                    </div>
                    <div className="col-7">
                      <div className="fs-4 pt-3 fw-normal">
                        <div className="team-social d-flex gap-2">
                          {user?.socialLinks?.map((item) => (
                            <a
                              key={item.id}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-square"
                              href={item?.link}
                            >
                              <i className={`fab fa-${item?.icon}`} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
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

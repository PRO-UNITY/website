/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const OurTeam = ({ name, occupation, image }) => {
  return (
    <div
      className="col-lg-3 col-md-6 wow cursor fadeInUp"
      data-wow-delay="0.7s"
    >
      <Link
        to={`user/${name.replace(/\s/g, "")}`}
        className="text-decoration-none"
      >
        <div className="team-item position-relative rounded overflow-hidden">
          <div className="overflow-hidden">
            <img
              style={{ height: 380, width: "100%", objectFit: "cover" }}
              className="img-fluid"
              src={image}
              alt={"team-img"}
            />
          </div>
          <div className="team-text pro-bg-primary text-center p-4">
            <h5 className="text-white">{name}</h5>
            <p className="text-white">{occupation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurTeam;

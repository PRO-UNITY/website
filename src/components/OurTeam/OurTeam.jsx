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
            <img width={"100%"} src={image} alt={name} />
          </div>
          <div className="team-text pro-bg-primary text-center p-4">
            <p className="fs-5 fw-semibold text-white">{name}</p>
            <p className="text-white">{occupation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurTeam;

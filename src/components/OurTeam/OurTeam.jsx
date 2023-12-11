/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const OurTeam = ({ id, name, occupation, image, socialLinks }) => {
  
  return (
    <div
      className="col-lg-3 col-md-6 wow cursor fadeInUp"
      data-wow-delay="0.7s"
    >
      <Link to={`user/${id}`} className="text-decoration-none">
        <div className="team-item position-relative rounded overflow-hidden">
          <div className="overflow-hidden">
            <img
              style={{ height: 380, width: "100%", objectFit: "cover" }}
              className="img-fluid"
              src={image}
              alt={"team-img"}
            />
          </div>
          <div className="team-text bg-primary text-center p-4">
            <h5 className="text-white">{name}</h5>
            <p className="text-white">{occupation}</p>
            <div className="team-social text-center">
              {socialLinks.facebook && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-square"
                  href={socialLinks.facebook}
                >
                  <i className="fab fa-facebook-f" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-square"
                  href={socialLinks.twitter}
                >
                  <i className="fab fa-twitter" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-square"
                  href={socialLinks.instagram}
                >
                  <i className="fab fa-instagram" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurTeam;

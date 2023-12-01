/* eslint-disable react/prop-types */
const OurTeam = ({ name, occupation, image, socialLinks }) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
      <div className="team-item position-relative rounded overflow-hidden">
        <div className="overflow-hidden">
          <img className="img-fluid" src={image} alt={"team-img"} />
        </div>
        <div className="team-text bg-primary text-center p-4">
          <h5 className="text-white">{name}</h5>
          <p className="text-white">{occupation}</p>
          <div className="team-social text-center">
            <a className="btn btn-square" href={socialLinks.facebook}>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square" href={socialLinks.twitter}>
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square" href>
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

/* eslint-disable react/prop-types */
const PartnersCard = ({ logo, link }) => {
  return (
    <div
      className="col-lg-2 cursor col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
      data-wow-delay="0.3s"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img
          style={{ width: "100%", height: 130, objectFit: "contain" }}
          src={logo}
          alt={"prouniti-partners"}
        />
      </a>
    </div>
  );
};

export default PartnersCard;

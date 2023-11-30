/* eslint-disable react/prop-types */
const PartnersCard = ({ img }) => {
  return (
    <div
      className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
      data-wow-delay="0.3s"
    >
      <img
        style={{ width: "100%", height: 130, objectFit: "contain" }}
        src={img}
        alt
      />
    </div>
  );
};

export default PartnersCard;

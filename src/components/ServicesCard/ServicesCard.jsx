/* eslint-disable react/prop-types */

const ServicesCard = ({ title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item bg-white rounded h-100 p-5">
        <div
          className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
          style={{ width: 65, height: 65 }}
        >
          <i className="fa-solid fa-computer fs-4 pro-text-primary" />
        </div>
        <h4 className="mb-3">{title}</h4>
        <p className="mb-4">{description}</p>
        <a className="btn bg-light" href>
          <i className="fa fa-plus pro-text-primary me-3" />
          Reafd
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;

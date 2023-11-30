import creator from "../../assets/creater.jpg";
import albomPro from "../../assets/albompro.jpg";
const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1
          style={{ fontWeight: 600 }}
          className="text-center title display-3 mb-5"
        >
          About Us
        </h1>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid rounded w-75 align-self-end img-lider"
                src={creator}
                alt
              />
              <img
                className="img-animation img-fluid rounded w-50 bg-white cursor"
                src={albomPro}
                alt
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">Welcome to PRO UNITY</h1>
            <p>
              Located in Bukhara, Uzbekistan, PRO UNITY is an innovative IT
              company specializing in software development and IT education. Our
              mission is to empower individuals with the skills and knowledge
              needed to thrive in the digital age.
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Customer-Centric Approach
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Careful Conceptualization
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Precision Preparation and Finalization
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Top-Notch Services
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

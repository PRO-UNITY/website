import team from "../../assets/team.jpg";
import creator from "../../assets/creater.jpg";
import albomPro from "../../assets/albompro.jpg";
import teamCard from "../../assets/akaaziz.JPG";
import { OurTeam } from "../../components";
const Home = () => {
  return (
    <>
      {/* Header Start */}
      <section className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5">
              Our mission is to empower individuals with the skills and
              knowledge needed to thrive in the digital age.
            </h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    123
                  </h2>
                  <p className="text-light mb-0">Expert Developers</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    1234
                  </h2>
                  <p className="text-light mb-0">Students</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    12345
                  </h2>
                  <p className="text-light mb-0">Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src={team} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
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
              <p className="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p>
              <h1 className="mb-4">Welcome to PRO UNITY</h1>
              <p>
                Located in Bukhara, Uzbekistan, PRO UNITY is an innovative IT
                company specializing in software development and IT education.
                Our mission is to empower individuals with the skills and
                knowledge needed to thrive in the digital age.
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
      {/* About End */}

      {/* Partners Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Follow
            </p>
            <h1>Follow Us Here</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.1s"
            >
              <a href>
                <img
                  className="img-partner"
                  style={{ width: "100%" }}
                  src="https://pngimg.com/d/github_PNG15.png"
                  alt
                />
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.3s"
            >
              <a href>
                <img
                  className="img-partner"
                  style={{ width: "100%" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png"
                  alt
                />
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.5s"
            >
              <img
                className="img-partner mt-4"
                style={{ width: "100%" }}
                src="https://ml.globenewswire.com/Resource/Download/77ae316b-82ad-4147-9189-ee10517a4208"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      {/* Partners End */}

      {/* Partners Start */}
      <div className="container-xxl py-5 partners bg-white">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Partners
            </p>
            <h1>Clients &amp; Partners</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partnerfp.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.3s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner2.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner3.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner8.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner10.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner13.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.1s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner4.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partnerskrepka.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner11.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.1s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner1.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner6.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partnerenrico.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partnerart.jpg"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.3s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner5.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner7.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner9.png"
                alt
              />
            </div>
            <div
              className="col-lg-2 col-md-6 wow fadeInUp d-flex justify-content-center align-items-center p-3"
              data-wow-delay="0.5s"
            >
              <img
                style={{ width: "100%", height: 130, objectFit: "contain" }}
                src="./img/partner12.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      {/* Partners End */}

      {/* Feature Start */}
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container-xxl feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  Features
                </p>
                <h1 className="text-white mb-4">Why Choose Us</h1>
                <p className="text-white mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-user-md text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Experience</p>
                        <h5 className="text-white mb-0">Developers</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-check text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Quality</p>
                        <h5 className="text-white mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-comment-medical text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Positive</p>
                        <h5 className="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-headphones text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">24 Hours</p>
                        <h5 className="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/teamwork.jpg"
                  style={{ objectFit: "cover" }}
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">Team</p>
            <h1>Our PRO Team</h1>
          </div>
          <div className="row g-4">
            <OurTeam
              img={teamCard}
              name={"Azizbek Hamroyev"}
              occupation={"Co-founder"}
            />
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Appointment
              </p>
              <h1 className="mb-4">Our Company</h1>
              <p className="mb-4">
                Contact us today to learn more about how PRO UNITY can help you
                achieve your IT goals
              </p>
              <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: 55, height: 55 }}
                >
                  <i className="fa fa-phone-alt text-primary" />
                </div>
                <div className="ms-4">
                  <p className="mb-2">Call Us Now</p>
                  <h5 className="mb-0">+998 33 899 50 00</h5>
                </div>
              </div>
              <div className="bg-light rounded d-flex align-items-center p-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: 55, height: 55 }}
                >
                  <i className="fa fa-envelope-open text-primary" />
                </div>
                <div className="ms-4">
                  <p className="mb-2">Mail Us Now</p>
                  <h5 className="mb-0">prounity.uz@gmail.com</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: 55 }}
                      >
                        <option selected>Choose Purpose</option>
                        <option value={1}>Frontend</option>
                        <option value={2}>Backend</option>
                        <option value={3}>Mobile</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        rows={5}
                        placeholder="Describe your problem"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
    </>
  );
};

export default Home;

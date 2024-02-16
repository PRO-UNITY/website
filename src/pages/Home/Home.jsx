import creator from "../../assets/creater.jpg";
import albomPro from "../../assets/albompro.jpg";
import teamwork from "../../assets/teamwork.jpg";
import Drrrible_logo from "../../assets/Dribbble_logo.png";
import GitHub_logo from "../../assets/pngimg.com - github_PNG15.png";
import Clutch_logo from "../../assets/clutch-logo-red.png";
import {
  HomeSlider,
  OurTeam,
  PartnersCard,
  YouTubeVideo,
} from "../../components";
import { Partners, teamMembers } from "../../constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import { Alert } from "react-bootstrap";

const Home = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const purposeRef = useRef(null);
  const descriptionRef = useRef(null);

  const ContactPost = async (event) => {
    event.preventDefault();
    setShow(true);
    nameRef.current.value = null;
    emailRef.current.value = null;
    mobileRef.current.value = null;
    purposeRef.current.value = 0;
    descriptionRef.current.value = null;
  };

  setTimeout(() => setShow(false), 5000);
  return (
    <Layout
      title={
        "ProUnity - Your Partner in Web and Mobile Development in Bukhara."
      }
    >
      {show && (
        <Alert
          className="send-message"
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <p className="m-0">Your message has been sent successfully!</p>
        </Alert>
      )}
      {/* Header Start */}
      <section className=" container-fluid header pro-bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-7 p-4 wow fadeIn">
            <h1
              style={{ fontWeight: "400" }}
              className="display-5 text-white mb-5"
            >
              {t("herosection.title")}
            </h1>
            <div className="d-flex gap-4 pt-3 g-4  hero-bottom ">
              <Link to={`/expert-devlopers`} className=" text-decoration-none">
                <div className=" ">
                  <h2 className="text-white mb-1 display-5  fw-semibold">
                    20+
                  </h2>
                  <p className="text-light mb-0">
                    {t("herosection.developers")}
                  </p>
                </div>
              </Link>
              <Link to={`/students`} className=" text-decoration-none">
                <div>
                  <h2 className="text-white mb-1 display-5  fw-semibold">
                    500+
                  </h2>
                  <p className="text-light mb-0">{t("herosection.students")}</p>
                </div>
              </Link>
              <Link to={`/products`} className="text-decoration-none">
                <div className=" ">
                  <h2 className="text-white mb-1 display-5 fw-semibold">10+</h2>
                  <p className="text-light mb-0">{t("herosection.projects")}</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <HomeSlider />
            </div>
          </div>
        </div>
      </section>
      {/* Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <img
                  width={"75%"}
                  height={"100%"}
                  className="img-fluid rounded align-self-end img-lider"
                  src={creator}
                  alt="creator"
                />
                <a
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1u87Btr9npvvZ-23WjS3ZpDnOXHln9dea/view?usp=sharing"
                  }
                  rel="noreferrer"
                >
                  <img
                    width={"50%"}
                    height={"100%"}
                    className="img-animation img-fluid rounded  bg-white cursor"
                    src={albomPro}
                    alt={"albom-pro"}
                    style={{ marginTop: "-25%" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn ps-5" data-wow-delay="0.5s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                {t("aboutsection.aboutbutton")}
              </p>
              <h1 className="mb-4">{t("herosection.title")}</h1>
              <p>{t("aboutsection.text")}</p>
              <p>
                <i className="far fa-check-circle pro-text-primary me-3" />
                {t("aboutsection.list1")}
              </p>
              <p>
                <i className="far fa-check-circle pro-text-primary me-3" />
                {t("aboutsection.list2")}
              </p>
              <p>
                <i className="far fa-check-circle pro-text-primary me-3" />
                {t("aboutsection.list3")}
              </p>
              <p>
                <i className="far fa-check-circle pro-text-primary me-3" />
                {t("aboutsection.list4")}
              </p>
              <Link
                to={"/about"}
                className="btn home-btn pro-bg-primary rounded-pill text-light py-3 px-5 mt-3"
              >
                {t("aboutsection.aboutbutton")}
              </Link>
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
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("followsection.followbutton")}
            </p>
            <h1>{t("followsection.title")}</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp cursor p-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://github.com/PRO-UNITY"}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  className="img-partner"
                  src={GitHub_logo}
                  alt="prounity-github"
                />
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.3s"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://dribbble.com/prounity"}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  className="img-partner"
                  src={Drrrible_logo}
                  alt="prounity-dribbble"
                />
              </a>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.5s"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://clutch.co/profile/pro-unity"}
              >
                <img
                  width={"100%"}
                  className="img-partner mt-4"
                  src={Clutch_logo}
                  alt={"prounity-clutch"}
                />
              </a>
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
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("partners.partnersbutton")}
            </p>
            <h1>{t("partners.title")}</h1>
          </div>
          <div className="row g-4">
            {Partners.map((item, i) => (
              <PartnersCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* Partners End */}

      {/* Feature Start */}
      <div className="container-fluid pro-bg-primary overflow-hidden mt-5 px-lg-0">
        <div className="container-xxl feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5 wow fadeIn">
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  {t("featuresection.featurebutton")}
                </p>
                <h1 className="text-white mb-4">{t("featuresection.title")}</h1>
                <p className="text-white mb-4 pb-2 ">
                  {t("featuresection.text")}
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-user-md pro-text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="text-white m-0">
                          {t("featuresection.listmini1")}
                        </p>
                        <p className="fs-5 fw-semibold text-white mb-0">
                          {t("featuresection.listbig1")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-check pro-text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="  text-white m-0">
                          {t("featuresection.listmini2")}
                        </p>
                        <p className="fs-5 fw-semibold text-white mb-0">
                          {t("featuresection.listbig2")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-comment-medical pro-text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="  text-white m-0">
                          {t("featuresection.listmini3")}
                        </p>
                        <p className="fs-5 fw-semibold text-white text-wrap m-0">
                          {t("featuresection.listbig3")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-headphones pro-text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="text-white m-0">
                          {t("featuresection.listmini4")}
                        </p>
                        <p className="fs-5 fw-semibold text-white m-0">
                          {t("featuresection.listbig4")}
                        </p>
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
                  src={teamwork}
                  style={{ objectFit: "cover" }}
                  alt="team-work"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      <div className="back">
        <div className="container-xxl pt-3">
          <div className="container pt-3">
            <div className="row w-100 align-items-center pt-3 g-lg-5 body-video">
              <div className="col-lg-6 text-center text-lg-start">
                <div>
                  <h1 className="display-4 text-white mb-5">
                    {t("blogSection.title")}
                  </h1>
                </div>
                <p className="fs-4 text-white">{t("blogSection.text")}</p>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <YouTubeVideo videoUrl={"https://prounity.uz/video/Blog.mp4"} />
              </div>
            </div>
          </div>
        </div>
        <div className="extra" />
      </div>

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("teamsection.teambutton")}
            </p>
            <h1>{t("teamsection.title")}</h1>
          </div>
          <div className="row g-4 h-100 ">
            {teamMembers.map((item, i) => (
              <OurTeam key={i} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Team End */}

      {/* Appointment Start */}
      <div className="container-xxl py-5 contact">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                {t("appointment.appointmentbutton")}
              </p>
              <h1 className="mb-4"> {t("appointment.title")}</h1>
              <p className="mb-4">{t("appointment.text")}</p>
              <a
                href="tel:+998-33-899-50-00 "
                className="text-decoration-none text-white"
              >
                <div className="bg-white rounded contact-card  d-flex align-items-center py-4 px-2 px-md-5 py-md-5 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle border border-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-phone-alt text-white  " />
                  </div>
                  <div className="ms-2 ms-md-5">
                    <p className="mb-2">{t("appointment.call")}</p>
                    <p className="fs-5 fw-semibold mb-0">+998 33 899 50 00</p>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:prounity.uz@gmail.com"
                className="text-decoration-none text-white"
              >
                <div className="bg-white contact-card  rounded d-flex align-items-center py-4 px-2 px-md-5 py-md-5">
                  <div
                    className="d-flex  flex-shrink-0 align-items-center justify-content-center rounded-circle border border-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-envelope-open text-white" />
                  </div>
                  <div className="ms-2 ms-md-5">
                    <p className="mb-2">{t("appointment.message")}</p>
                    <p className="fs-5 fw-semibold mb-0">
                      prounity.uz@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded h-100 d-flex align-items-center p-3 p-md-5">
                <form onSubmit={ContactPost}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholdername")}
                        style={{ height: 55 }}
                        name="name"
                        ref={nameRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholderemail")}
                        style={{ height: 55 }}
                        name="email"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholdermobile")}
                        style={{ height: 55 }}
                        name="mobile"
                        ref={mobileRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        aria-label="Purpose"
                        className="form-select border-0"
                        style={{ height: 55 }}
                        ref={purposeRef}
                        required
                        defaultValue={0}
                      >
                        <option value={0} hidden>
                          {t("appointment.inputplaceholderpurpose")}
                        </option>
                        <option value={1}>Frontend</option>
                        <option value={2}>Backend</option>
                        <option value={3}>Mobile</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        rows={5}
                        placeholder={t("appointment.inputplaceholderdescripe")}
                        ref={descriptionRef}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn home-btn pro-bg-primary text-light w-100 py-3"
                        type="submit"
                      >
                        {t("appointment.bookbutton")}
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
    </Layout>
  );
};

export default Home;

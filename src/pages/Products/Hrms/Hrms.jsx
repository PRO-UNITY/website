import "./Hrms.css";
import home_slider from "../../../assets/images/hrms/home-img.png";
import about_img from "../../../assets/images/hrms/about-img.png";
import check_icon from "../../../assets/images/hrms/CheckCircle.svg";
import close_icon from "../../../assets/images/hrms/XCircle.svg";
// import feedbackProfile from "../../../assets/images/hrms/feedback-profile-user.jpg";
import { useTranslation } from "react-i18next";

const Hrms = () => {
  const { t } = useTranslation();
  return (
    <div className="hrms">
      <section className="hrms-hero container-fluid header bg-primary  mb-5">
        <div className="row g-0 h-100 align-items-center flex-column flex-lg-row">
          <div className="col-lg-6 px-3 px-md-5 py-md-5  pb-4">
            <h1
              style={{ fontWeight: "600" }}
              className="display-2 text-white mt-5 mt-md-0 mb-5 "
            >
              {t("hrms.home.title")}
            </h1>
            <p className="description text-white">
              {t("hrms.home.description")}
            </p>
            <a className="download-btn  text-decoration-none fs-5 text-primary me-3 rounded ">
              {t("hrms.home.button1")}
              <i className="fa-solid fa-arrow-right-long mt-1"></i>
            </a>
            <a className="download-btn download-btn-outline   text-decoration-none fs-5  me-3 rounded ">
              {t("hrms.home.button2")}
              <i className="fa-solid fa-arrow-right-long mt-1"></i>
            </a>
          </div>
          <div className="col-lg-6  h-100">
            <div className="hero_slider d-flex justify-content-center .align-items-end">
              <img src={home_slider} alt="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="hrms-about container-lg  p-0 py-5 mb-5">
        <div className="row g-0 align-items-center  flex-column-reverse flex-lg-row">
          <div className="col-lg-6 ">
            <div className="img-box rounded-4 d-flex justify-content-center">
              <img src={about_img} alt="about-img" />
              <div className="img-mask rounded-4"></div>
            </div>
          </div>
          <div className="col-lg-6 p-3 p-md-5">
            <h2 style={{ fontWeight: "600" }} className="mb-4">
              {t("hrms.about.box1.title")}
            </h2>
            <p className="description">{t("hrms.about.box1.description")}</p>
            <p className="description">{t("hrms.about.box1.description")}</p>
            <a className=" btn btn-outline-primary me-3 fs-5 py-md-3 px-4 mt-3">
              {t("hrms.about.moreButton")}
              <i className="fa-solid fa-arrow-right-long mx-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing container-fluid  bg-primary py-5">
        <div className="container d-flex align-items-center flex-column  flex-md-row py-5 justify-content-center gap-5">
          <div className="card p-3 p-md-5 rounded-4">
            <div className="card-head">
              <h4 className="fw-semibold">Econom</h4>
              <p className="m-0">
                E-commerce app for One Store Owner, use for multi-purpose app
              </p>
            </div>
            <ul className="card-content p-0 pb-4 border-bottom border-primary">
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={check_icon} alt="check" />
                Work with ProUnity 3.x
              </li>
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={check_icon} alt="check" />
                Full ProUnity Source Code
              </li>
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={check_icon} alt="check" />
                Design & Extensions Files
              </li>
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={close_icon} alt="check" />
                Purchase one, life-time update
              </li>
            </ul>
            <div className="card-bottom text-center">
              <div className="price text-center d-flex justify-content-center align-items-end">
                <h1 className="m-0 fw-bold">69$ </h1>{" "}
                <span className="h6"> /one time</span>
              </div>
              <button
                style={{ color: "yellow" }}
                className="btn btn-primary mt-4 px-3 py-2 fw-semibold"
              >
                Purchase Now
              </button>
            </div>
          </div>
          <div className="card p-3 p-md-5 rounded-4">
            <div className="card-head">
              <h4 className="fw-semibold">Econom</h4>
              <p className="m-0">
                E-commerce app for One Store Owner, use for multi-purpose app
              </p>
            </div>
            <ul className="card-content p-0 pb-4 border-bottom border-primary">
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={check_icon} alt="check" />
                Work with ProUnity 3.x
              </li>
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={check_icon} alt="check" />
                Full ProUnity Source Code
              </li>
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={check_icon} alt="check" />
                Design & Extensions Files
              </li>
              <li className="d-flex align-items-center mt-2 gap-2">
                <img src={close_icon} alt="check" />
                Purchase one, life-time update
              </li>
            </ul>
            <div className="card-bottom text-center">
              <div className="price text-center d-flex justify-content-center align-items-end">
                <h1 className="m-0 fw-bold">79$ </h1>
                <span className="h6"> /one time</span>
              </div>
              <button
                style={{ color: "yellow" }}
                className="btn btn-primary mt-4 px-3 py-2 fw-semibold"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      {/* <div className=" hrms-archive container-fluid bg-primary servces-detail pt-5">
        <div className="head text-center text-white">
          <h5 className="subtitle">{t("hrms.archived.subtitle")}</h5>
          <h2>{t("hrms.archived.title")}</h2>
        </div>
        <div className="archive-card">
          <div className="row bg-white rounded h-100 p-5">
            <div className="col-md-4 d-flex align-items-center justify-content-center flex-column">
              <h1>1M</h1>
              <h5>{t("hrms.archived.cardDownloads.text")}</h5>
            </div>
            <div className="col-md-4 card-item  d-flex align-items-center justify-content-center flex-column">
              <h1>30K</h1>
              <h5>{t("hrms.archived.cardReviews.text")}</h5>
            </div>
            <div className="col-md-4  d-flex align-items-center justify-content-center flex-column">
              <h1>4.8/5</h1>
              <h5>{t("hrms.archived.cardRating.text")}</h5>
            </div>
          </div>
        </div>
      </div> */}

      {/* Features */}
      {/* <section className="feature container mt-5 pt-5">
        <div className="head text-center text-dark">
          <h5 className="subtitle">{t("hrms.features.subtitle")}</h5>
          <h1 className="mx-auto w-100" style={{ maxWidth: "800px" }}>
            {t("hrms.features.title")}
          </h1>
        </div>
        <div className="cards d-flex align-items-center justify-content-center flex-column ">
          <div className="card card-top p-4 ">
            <div className="card-head d-flex align-items-center justify-content-center">
              <div
                className="d-inline-flex  align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa-solid fa-computer fs-2 text-primary" />
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{t("hrms.features.card1.title")}</h5>
              <p className="card-text">
                {t("hrms.features.card1.description")}
              </p>
            </div>
          </div>

          <div className=" card-bottom  d-md-flex justify-content-center gap-4">
            <div className="card p-4 border-0 my-2">
              <div className="card-head">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa-solid fa-computer fs-2 text-primary" />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{t("hrms.features.card2.title")}</h5>
                <p className="card-text">
                  {t("hrms.features.card2.description")}
                </p>
              </div>
            </div>

            <div className="card p-4 border-0 my-2">
              <div className="card-head d-flex justify-content-lg-end">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa-solid fa-computer fs-2 text-primary" />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{t("hrms.features.card3.title")}</h5>
                <p className="card-text">
                  {t("hrms.features.card3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Feedback */}
      {/* <section className="feedback container-fluid bg-primary servces-detail my-5 py-3  pt-md-5">
        <div className="head text-center text-white">
          <h5 className="subtitle">{t("hrms.feedback.subtitle")}</h5>
          <h1 className="mx-auto w-100" style={{ maxWidth: "800px" }}>
            {t("hrms.feedback.title")}
          </h1>
        </div>
        <div className="feedback-cards gap-4 container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head p-4">
                  <i>{t("hrms.feedback.card1.text")}</i>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto">
                      <img
                        className="profile-image"
                        src={feedbackProfile}
                        alt="profile-img"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h5 className="name m-0">
                        {t("hrms.feedback.card1.name")}
                      </h5>
                      <p className="profession">
                        {t("hrms.feedback.card1.proffesion")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head p-4">
                  <i>{t("hrms.feedback.card1.text")}</i>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto">
                      <img
                        className="profile-image"
                        src={feedbackProfile}
                        alt="profile-img"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h5 className="name m-0">
                        {t("hrms.feedback.card1.name")}
                      </h5>
                      <p className="profession">
                        {t("hrms.feedback.card1.proffesion")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head p-4">
                  <i>{t("hrms.feedback.card1.text")}</i>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto">
                      <img
                        className="profile-image"
                        src={feedbackProfile}
                        alt="profile-img"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h5 className="name m-0">
                        {t("hrms.feedback.card1.name")}
                      </h5>
                      <p className="profession">
                        {t("hrms.feedback.card1.proffesion")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      {/* <section className="pricing py-md-5 ">
        <div className="head text-center mt-5">
          <h5 className="subtitle">{t("hrms.pricing.subtitle")}</h5>
          <h2>{t("hrms.pricing.title")}</h2>
        </div>
        <div className="pricing-cards mt-4 container gap-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="card rounded-4 border-0 proffesional my-3 w-100  p-5">
                <div className="mt-md-5 border-bottom pb-4">
                  <h2>{t("hrms.pricing.cardProffesional.title")}</h2>
                </div>
                <div className="card-content mt-2 border-bottom pb-4">
                  <span className="d-block mt-3 ">
                    <i className="fa-solid fa-check me-2"></i>
                    {t("hrms.pricing.cardProffesional.cardList.list1")}
                  </span>
                  <span className="d-block mt-3 ">
                    <i className="fa-solid fa-check me-2"></i>
                    {t("hrms.pricing.cardProffesional.cardList.list2")}
                  </span>
                  <span className="d-block mt-3 ">
                    <i className="fa-solid fa-check me-2"></i>
                    {t("hrms.pricing.cardProffesional.cardList.list3")}
                  </span>
                  <span className="d-block mt-3 ">
                    <i className="fa-solid fa-check me-2"></i>
                    {t("hrms.pricing.cardProffesional.cardList.list4")}
                  </span>
                  <span className="d-block mt-3 ">
                    <i className="fa-solid fa-check me-2"></i>
                    {t("hrms.pricing.cardProffesional.cardList.list5")}
                  </span>
                </div>
                <div className="card-bottom mt-2 mt-md-5 d-md-flex align-items-center justify-content-between">
                  <div>
                    <span className="h5 lh-lg">3.990$ </span>
                    <span className="text-secondary">/ month</span>
                  </div>
                  <a className=" btn btn-primary  px-3 rounded-pill  ">
                    {t("hrms.pricing.pricingButton")}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card unlimited bg-primary text-white unlimited rounded-4 border-0 my-3 d-flex w-100  p-5">
                <div className="border-bottom pb-4">
                  <a className="btn border text-white mb-2 rounded-pill ">
                    {t("hrms.pricing.cardUnlimited.subtitle")}
                  </a>
                  <h2>{t("hrms.pricing.cardUnlimited.title")}</h2>
                </div>
                <div className="card-content mt-2 border-bottom row pb-4">
                  <div className="col-lg-6">
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list1")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list2")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list3")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list4")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list5")}
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list6")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list7")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list8")}
                    </span>
                    <span className="d-block mt-3 ">
                      <i className="fa-solid fa-circle-check me-2"></i>
                      {t("hrms.pricing.cardUnlimited.cardList.list9")}
                    </span>
                  </div>
                </div>
                <div className="card-bottom  mt-2 mt-md-5 d-md-flex align-items-center justify-content-between">
                  <div>
                    <span className="h5 lh-lg">5.990$ </span>
                    <span className="text-light">/ month</span>
                  </div>
                  <a className="start-btn  btn px-4 rounded-pill  ">
                    {t("hrms.pricing.pricingButton")}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/*  */}
      {/* <section className="get-app my-5">
        <div className="img-box d-flex align-items-center justify-content-center">
          <img src={home_slider} alt="phone-img" />
          <img src={home_slider} alt="phone-img" />
          <img src={home_slider} alt="phone-img" />
        </div>
        <div className="container bg-primary rounded-4  d-flex align-items-center justify-content-center">
          <div className="head text-center text-white">
            <h5 className="subtitle">{t("hrms.pricing.subtitle")}</h5>
            <h2>{t("hrms.pricing.pricingCardText")}</h2>
            <a className="download-btn text-decoration-none text-dark me-3 rounded-pill ">
              {t("hrms.home.button")}
              <img src={aplleLogo} alt="aplle" />
            </a>
            <a className="download-btn text-decoration-none text-dark me-3 rounded-pill ">
              {t("hrms.home.button")}
              <img src={playStoreLogo} alt="" />
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hrms;

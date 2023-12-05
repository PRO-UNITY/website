import "./Hrms.css";
import aplleLogo from "../../../assets/images/hrms/apple-logo.png";
import playStoreLogo from "../../../assets/images/hrms/play-store.webp";
import home_slider from "../../../assets/images/hrms/hrms-slider.webp";
import feedbackProfile from "../../../assets/images/hrms/feedback-profile-user.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Hrms = () => {
  const { t } = useTranslation();
  return (
    <div className="hrms">
      <section className="hrms-hero container-fluid header bg-primary py-md-5 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 px-3 px-md-5  pb-4">
            <h1
              style={{ fontWeight: "600" }}
              className="display-2 text-white mb-5 "
            >
              {t("hrms.home.title")}
            </h1>
            <p className="description text-white">
              {t("hrms.home.description")}
            </p>
            <a className="download-btn text-decoration-none text-dark me-3 rounded-pill ">
              {t("hrms.home.button")}
              <img src={aplleLogo} alt="aplle" />
            </a>
            <a className="download-btn text-decoration-none text-dark me-3 rounded-pill ">
              {t("hrms.home.button")}
              <img src={playStoreLogo} alt="" />
            </a>
          </div>
          <div className="col-lg-6 ">
            <div className="hero_slider d-flex justify-content-center">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="slider-item">
                  <img src={home_slider} alt="hrms-img" />
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                  <img src={home_slider} alt="hrms-img" />
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                  <img src={home_slider} alt="hrms-img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="hrms-about container-lg  p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="img-box">
              <img src={home_slider} alt="about-img" />
            </div>
          </div>
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h3 style={{ fontWeight: "600" }} className=" mb-3">
              {t("hrms.about.box1.title")}
            </h3>
            <p className="description">{t("hrms.about.box1.description")}</p>
            <p className="description">{t("hrms.about.box1.description")}</p>
            <a
              to={"/about"}
              className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3"
            >
              {t("hrms.about.moreButton")}
            </a>
          </div>
        </div>
      </section>
      <section className="hrms-about container-lg  p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h3 style={{ fontWeight: "600" }} className=" mb-3">
              {t("hrms.about.box2.title")}
            </h3>
            <p className="description">{t("hrms.about.box2.description")}</p>
            <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
              {t("hrms.about.moreButton")}
            </a>
          </div>
          <div className="col-lg-6 " data-wow-delay="0.5s">
            <div className="img-box">
              <img src={home_slider} alt="about-img" />
            </div>
          </div>
        </div>
      </section>
      {/* Archive */}
      <div className=" hrms-archive container-fluid bg-primary servces-detail pt-5">
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
      </div>

      {/* Features */}
      <section className="feature container mt-5 pt-5">
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
      </section>
      {/* Feedback */}
      <section className="feedback container-fluid bg-primary servces-detail my-5 py-3  pt-md-5">
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
      </section>

      {/* Pricing */}
      <section className="pricing py-md-5 ">
        <div className="head text-center mt-5">
          <h5 className="subtitle">{t("hrms.pricing.subtitle")}</h5>
          <h2>{t("hrms.pricing.title")}</h2>
        </div>
        <div className="pricing-cards mt-4 container d-lg-flex align-items-center justify-content-center gap-4">
          <div className="card my-3 d-flex w-100 text-center p-4">
            <h2>{t("hrms.pricing.card1.title")}</h2>
            <div className="price-box d-inline-flex align-items-center justify-content-center bg-light rounded-circle my-4">
              <h1>$15</h1>
            </div>
            <p className="px-md-5">{t("hrms.pricing.card1.description")}</p>
            <div className="">
              <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
                {t("hrms.pricing.pricingButton")}
              </a>
            </div>
          </div>
          <div className="card my-3 w-100 text-center p-4">
            <h2>{t("hrms.pricing.card2.title")}</h2>
            <div className="price-box d-inline-flex align-items-center justify-content-center bg-light rounded-circle my-4">
              <h1>$25</h1>
            </div>
            <p className="px-md-5">{t("hrms.pricing.card2.description")}</p>
            <div>
              <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
                {t("hrms.pricing.pricingButton")}
              </a>
            </div>
          </div>
          <div className="card my-3 w-100 text-center p-4">
            <h2>{t("hrms.pricing.card3.title")}</h2>
            <div className="price-box d-inline-flex align-items-center justify-content-center bg-light rounded-circle my-4">
              <h1>$35</h1>
            </div>
            <p className="px-md-5">{t("hrms.pricing.card3.description")}</p>
            <div>
              <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
                {t("hrms.pricing.pricingButton")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="get-app my-5">
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
      </section>
    </div>
  );
};

export default Hrms;

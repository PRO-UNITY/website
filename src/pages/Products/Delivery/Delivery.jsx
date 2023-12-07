import home_slider from "../../../assets/images/hrms/home-img.png";
import homeAndroidIcon from "../../../assets/images/hrms/icons8-android 1.svg";
import homeIOSIcon from "../../../assets/images/hrms/icons8-apple 1.svg";
import about_img from "../../../assets/images/hrms/about-img.png";
import slider_img1 from "../../../assets/images/hrms/Rectangle 30.jpg";
import slider_img2 from "../../../assets/images/hrms/Rectangle 31.png";
import slider_img3 from "../../../assets/images/hrms/Rectangle 32.png";
import slider_img4 from "../../../assets/images/hrms/Rectangle 33.png";
import slider_img5 from "../../../assets/images/hrms/Rectangle 34.png";
import slider_img6 from "../../../assets/images/hrms/Rectangle 35.jpg";
import slider_img7 from "../../../assets/images/hrms/Rectangle 36.jpg";
import form_bg from "../../../assets/images/hrms/carusel-form.png";
import flutter from "../../../assets/images/hrms/icons8-flutter-480 1.png";
import android from "../../../assets/images/hrms/icons8-android-240 1.png";
import firebase from "../../../assets/images/hrms/icons8-firebase-480 1.png";
import ios from "../../../assets/images/hrms/icons8-ios-logo-512 1.png";
import dribbble from "../../../assets/images/hrms/icons8-dribble-480 1.png";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Delivery.css";
import Layout from "../../../Layout/Layout";

const CaruselItem = [
  {
    id: 1,
    image: slider_img1,
  },
  {
    id: 2,
    image: slider_img2,
  },
  {
    id: 3,
    image: slider_img3,
  },
  {
    id: 4,
    image: slider_img4,
  },
  {
    id: 5,
    image: slider_img5,
  },
  {
    id: 6,
    image: slider_img6,
  },
  {
    id: 7,
    image: slider_img7,
  },
  {
    id: 8,
    image: slider_img5,
  },
];

const platformData = [
  {
    id: 1,
    image: flutter,
    background: "rgba(64, 196, 255, 0.26)",
  },
  {
    id: 2,
    image: android,
    background: "rgba(48, 220, 128, 0.26);",
  },
  {
    id: 3,
    image: firebase,
    background: "rgba(255, 111, 0, 0.26)",
  },
  {
    id: 4,
    image: ios,
    background: "rgba(143, 58, 255, 0.26)",
  },
  {
    id: 5,
    image: dribbble,
    background: "rgba(234, 76, 137, 0.26)",
  },
];

const Delivery = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="delivery">
        <section className="delivery-hero container-fluid header bg-primary  mb-5">
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
              <a className="download-btn btn  text-decoration-none fs-5 text-primary me-3 rounded ">
                {t("hrms.home.button1")}
                <i className="fa-solid fa-arrow-right-long "></i>
              </a>
              <a className="download-btn btn download-btn-outline  text-decoration-none fs-5  me-3 rounded ">
                <img src={homeAndroidIcon} alt="" />
                Goggle Play
              </a>
              <a className="download-btn btn download-btn-outline  text-decoration-none fs-5  me-3 rounded ">
                <img src={homeIOSIcon} alt="" />
                Appstore
              </a>
            </div>
            <div className="col-lg-6  h-100">
              <div className="delivery_slider d-flex justify-content-center .align-items-end">
                <img src={home_slider} alt="hero-img" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="delivery-about container-lg  p-0 py-5 mb-5">
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
              <a
                href="#demo"
                className=" btn btn-outline-primary me-3 fs-5 py-md-3 px-4 mt-3"
              >
                {t("hrms.about.moreButton")}
                <i className="fa-solid fa-arrow-right-long mx-2"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="platform py-2 py-md-5 container-fluid bg-primary">
          <div className="container h-100 my-4 d-flex justify-content-center align-items-center">
            <div className="row">
              {platformData.map((item) => (
                <div className="col " key={item.id}>
                  <div className="card my-3">
                    <div
                      style={{ background: item.background }}
                      className="img-box d-flex justify-content-center align-items-center"
                    >
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="pricing py-md-5 ">
          <div className="head text-center mt-5">
            <h5 className="subtitle">{t("hrms.pricing.subtitle")}</h5>
            <h2>{t("hrms.pricing.title")}</h2>
          </div>
          <div className="pricing-cards mt-4 container gap-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="card bg-light rounded-4 border-0 proffesional my-3 w-100  p-5">
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
                    <a className=" btn btn-outline-primary  py-md-3 px-3 ">
                      Start now
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
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
                    <a className="download-btn download-btn-outline  m-0 text-decoration-none  rounded ">
                      Start now
                      <i className="fa-solid fa-arrow-right-long mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carusel */}
        <section id="demo" className="carusel py-5 mt-5 position-relative">
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={1}
            centeredSlides
            loop
            spaceBetween={30}
            autoplay={{
              delay: 2500,
            }}
            className="mySwiper "
            modules={[Autoplay]}
          >
            {CaruselItem.map((item) => (
              <>
                <SwiperSlide key={item.id}>
                  <img src={item.image} alt="" />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <div className="slider-overlay"></div>
          <div className="img-form w-100 h-100 position-absolute top-0 text-center">
            <div className="img-box  ">
              <img src={form_bg} alt="" className="bg-img" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Delivery;
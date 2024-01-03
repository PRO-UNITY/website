import { useTranslation } from "react-i18next";
import Layout2 from "../../../../../Layout/Layout2";
import { Link } from "react-router-dom";
import slider_img1 from "../../../../../assets/images/hrms/Rectangle 30.jpg";
import slider_img2 from "../../../../../assets/images/hrms/Rectangle 31.png";
import slider_img3 from "../../../../../assets/images/hrms/Rectangle 32.png";
import slider_img4 from "../../../../../assets/images/hrms/Rectangle 33.png";
import slider_img5 from "../../../../../assets/images/hrms/Rectangle 34.png";
import slider_img6 from "../../../../../assets/images/hrms/Rectangle 35.jpg";
import slider_img7 from "../../../../../assets/images/hrms/Rectangle 36.jpg";
import home_slider from "../../../../../assets/images/hrms/home-img.png";
import about_img from "../../../../../assets/images/hrms/about-img.png";
import flutter from "../../../../../assets/images/hrms/icons8-flutter-480 1.png";
import flutterb from "../../../../../assets/images/hrms/pluginIcon.png";
import python from "../../../../../assets/images/hrms/python-logo.png";
import django from "../../../../../assets/images/hrms/django-logo.png";
import dribbble from "../../../../../assets/images/hrms/material-design-icon-512x512-fz9kqvlo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import form_bg from "../../../../../assets/images/hrms/carusel-form.png";

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
    link: "https://flutter.dev/",
  },
  {
    id: 2,
    image: flutterb,
    background: "rgba(48, 220, 128, 0.26);",
    link: "https://bloclibrary.dev/",
  },
  {
    id: 3,
    image: python,
    background: "rgba(255, 111, 0, 0.15)",
    link: "https://www.python.org/",
  },
  {
    id: 4,
    image: django,
    background: "rgba(48, 220, 128, 0.15)",
    link: "https://www.djangoproject.com/",
  },
  {
    id: 5,
    image: dribbble,
    background: "rgba(255, 255, 255, 0.6)",
    link: "https://m3.material.io/",
  },
];

const DeliveryLanding = () => {
  const { t } = useTranslation();

  return (
    <Layout2>
      <div className="hrms-landing home">
        <section className="header mb-5">
          <div className="container">
            <div className="row g-0 h-100 align-items-end flex-column flex-lg-row">
              <div className="col-lg-8 px-3 px-md-5  py-md-5  pb-4">
                <h1 className="display-3 fw-bold font-primary text-primary mt-5 mt-md-0 mb-5 ">
                  {t("delivery.home.title")}
                </h1>
                <p className=" text-dark">{t("delivery.home.description")}</p>
                <a className=" btn text-capitalize  btn-gold text-decoration-none px-4 py-2 fs-6 me-3 ">
                  {t("hrms.home.button1")}{" "}
                  <i className="fa-solid fa-arrow-right-long "></i>
                </a>
                <Link
                  to={"/products/hrms/documentation/"}
                  className=" mt-4 mt-md-0 btn text-capitalize btn-outline-dark border-2 text-decoration-none px-4 py-2 fs-6  "
                >
                  <i className="fa-solid fa-file-lines me-2"></i>
                  Documentation
                </Link>
              </div>
              <div className="col-lg-4  h-100">
                <div className="d-flex justify-content-md-end justify-content-center align-items-end">
                  <img src={home_slider} alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="hrms-landing-about container-lg  p-0 py-5 mb-5">
          <div className="row g-0 align-items-center  flex-column-reverse flex-lg-row">
            <div className="col-lg-6 ">
              <div className="img-box   mx-auto mx-lg-0 mt-5  mt-lg-0  rounded-4 d-flex justify-content-center">
                <img src={about_img} alt="about-img" />
                <div className="img-mask rounded-4"></div>
              </div>
            </div>
            <div className="col-lg-6 p-3 p-md-5">
              <h2 className="mb-4 text-primary font-primary fw-bold">
                {t("delivery.about.box1.title")}
              </h2>
              <p>{t("delivery.about.box1.description")}</p>
              <p>{t("delivery.about.box1.description2")}</p>
              <p>{t("delivery.about.box1.description3")}</p>
              <a className="btn text-capitalize  btn-gold text-decoration-none px-4 py-2 fs-6 me-3">
                <i className="fa-brands fa-google-play  me-2"></i>
                Google Play
              </a>
              <a className="btn text-capitalize  btn-gold text-decoration-none px-4 py-2 fs-6 me-3 mt-4 mt-md-0">
                <i className="fa-brands fa-apple fs-5 me-2"></i>
                App Store
              </a>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="hrms-landing-platform py-2 py-md-5">
          <div className="container h-100 my-4 d-flex justify-content-center align-items-center">
            <div className="row">
              {platformData.map((item) => (
                <div className="col " key={item.id}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    className="card border-0 my-3"
                  >
                    <div
                      //   style={{ background: item.background }}
                      className="img-box d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-100 h-100  p-3"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*  */}
        <section className="hrms-landing-pricing py-md-5 ">
          <div className="head text-center mt-5">
            <h2 className="text-primary font-primary fs-1 fw-semibold">
              {t("hrms.pricing.title")}
            </h2>
          </div>
          <div className="pricing-cards mt-4 container gap-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="card  rounded-4 border-0 proffesional my-3 w-100  p-5">
                  <div className="mt-md-5 border-bottom pb-4">
                    <h2 className="font-primary">
                      {t("hrms.pricing.cardProffesional.title")}
                    </h2>
                  </div>
                  <div className="card-content mt-2 border-bottom pb-4">
                    <span className="d-flex mt-3 fs-6">
                      <i className="fa-solid check fa-check me-2"></i>
                      {t("hrms.pricing.cardProffesional.cardList.list1")}
                    </span>
                    <span className="d-flex mt-3 fs-6">
                      <i className="fa-solid check fa-check me-2"></i>
                      {t("hrms.pricing.cardProffesional.cardList.list2")}
                    </span>
                    <span className="d-flex mt-3 fs-6">
                      <i className="fa-solid check fa-check me-2"></i>
                      {t("hrms.pricing.cardProffesional.cardList.list3")}
                    </span>
                    <span className="d-flex mt-3 fs-6">
                      <i className="fa-solid check fa-check me-2"></i>
                      {t("hrms.pricing.cardProffesional.cardList.list4")}
                    </span>
                    <span className="d-flex mt-3 fs-6">
                      <i className="fa-solid check fa-check me-2"></i>
                      {t("hrms.pricing.cardProffesional.cardList.list5")}
                    </span>
                  </div>
                  <div className="card-bottom mt-2 mt-md-5 d-md-flex align-items-center justify-content-between">
                    <div>
                      <span className="h5 lh-lg">3.990$ </span>
                      <span className="text-secondary">/ month</span>
                    </div>
                    <a className=" btn btn-gold py-md-2 rounded-3 px-4 ">
                      Start now
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card  unlimited  text-white unlimited rounded-4 border-0 my-3 d-flex w-100  p-5">
                  <div className="border-bottom pb-4">
                    <span className="unlimited-badge text-primary rounded-3 px-2 py-1 fw-semibold">
                      {t("hrms.pricing.cardUnlimited.subtitle")}
                    </span>
                    <h2 className="font-primary mt-4">
                      {t("hrms.pricing.cardUnlimited.title")}
                    </h2>
                  </div>
                  <div className="card-content mt-2 border-bottom row pb-4">
                    <div className="col-lg-6">
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list1")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list2")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list3")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list4")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list5")}
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list6")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list7")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list8")}
                      </span>
                      <span className="d-flex mt-3 fs-6">
                        <i className="fa-solid check fa-check me-2"></i>
                        {t("hrms.pricing.cardUnlimited.cardList.list9")}
                      </span>
                    </div>
                  </div>
                  <div className="card-bottom  mt-2 mt-md-5 d-md-flex align-items-center justify-content-between">
                    <div className="">
                      <span className="h5 lh-lg">5.990$ </span>
                      <span className="text-light">/ month</span>
                    </div>
                    <a className=" btn text-decoration-none  btn-gold px-4  ">
                      Start now{" "}
                      <i className="fa-solid fa-arrow-right-long mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section
          id="demo"
          className="carusel-landing py-5 mt-5 position-relative"
        >
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            slidesPerView={1}
            centeredSlides
            loop
            autoplay={{
              delay: 2500,
            }}
            className=" "
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
    </Layout2>
  );
};

export default DeliveryLanding;

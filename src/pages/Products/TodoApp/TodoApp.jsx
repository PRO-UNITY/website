import home_slider from "../../../assets/images/Todo/home-img.png";
import about_slider1 from "../../../assets/images/Todo/about-slider-1.png";
import about_slider2 from "../../../assets/images/Todo/about-slider-2.png";
import about_slider3 from "../../../assets/images/Todo/about-slider-3.png";
import about_slider4 from "../../../assets/images/Todo/about-slider-4.png";
import slider_img1 from "../../../assets/images/Todo/slider-img-1.png";
import slider_img2 from "../../../assets/images/Todo/slider-img-2.png";
import slider_img3 from "../../../assets/images/Todo/slider-img-3.png";
import slider_img4 from "../../../assets/images/Todo/slider-img-4.png";
import slider_img5 from "../../../assets/images/Todo/slider-img-5.png";
import slider_img6 from "../../../assets/images/Todo/slider-img-6.png";
import form_bg from "../../../assets/images/hrms/carusel-form.png";
import ionic from "../../../assets/images/hrms/ionic.png";
import expo from "../../../assets/images/Clinic/ts.png";
import python from "../../../assets/images/hrms/python-logo.png";
import django from "../../../assets/images/hrms/django-logo.png";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Layout from "../../../Layout/Layout";
import { Link } from "react-router-dom";
import { ProductsAbout, ProductsVideo } from "../../../components";
import { ProductsPrice } from "../../../services";

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
];

const platformData = [
  {
    id: 1,
    image: ionic,
    background: "rgba(64, 196, 255, 0.2)",
    link: "https://ionicframework.com/",
  },
  {
    id: 2,
    image: expo,
    background: "rgba(255, 255, 255)",
    link: "https://www.typescriptlang.org/",
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
];
const aboutSlider = [
  about_slider1,
  about_slider2,
  about_slider3,
  about_slider4,
];
const TodoApp = () => {
  const { t } = useTranslation();
  const handlePrice = (key) => {
    ProductsPrice({ product: key })
      .then((res) => {
        window.location.href = res?.url;
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout title={"ProUnity | Todo"}>
      <div className="hrms">
        <section className="hrms-hero container-fluid header pro-bg-primary   mb-5">
          <div className="row g-0 h-100 align-items-center flex-column flex-lg-row">
            <div className="col-lg-6 px-3 px-md-4 py-md-5  pb-4">
              <h1
                style={{ fontWeight: "600" }}
                className="display-4 text-white mt-5 mt-md-0 mb-4 "
              >
                {t("todo-app.home.title")}
              </h1>
              <p className="description text-white">
                {t("todo-app.home.description")}
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hrms.prounity.uz/"
                className="download-btn btn  text-decoration-none fs-5 pro-text-primary me-3 rounded "
              >
                {t("hrms.home.button1")}
                <i className="fa-solid fa-arrow-right-long "></i>
              </a>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://hrms.prounity.uz/doc"
                className="download-btn btn download-btn-outline  text-decoration-none fs-5  me-3 rounded "
              >
                <i className="fa-solid fa-file-lines"></i>
                {t("hrms.home.documentation")}
              </Link>
            </div>
            <div className="col-lg-6  h-100">
              <div className="hero_slider d-flex justify-content-center align-items-end">
                <div className="position-relative ">
                  <ProductsVideo
                    videoUrl={"https://prounity.uz/video/Todo.mp4"}
                  />
                  <img src={home_slider} alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section className="hrms-about container-lg  p-0 py-3 mb-5">
          <div className="row g-0 align-items-center  flex-column-reverse flex-lg-row">
            <div className="col-lg-6 ">
              <div className="img-box   mx-auto mx-lg-0 mt-5  mt-lg-0  rounded-4 d-flex justify-content-center">
                <ProductsAbout aboutSlider={aboutSlider} />
                <div className="img-mask rounded-4"></div>
              </div>
            </div>
            <div className="col-lg-6 p-3 p-md-5">
              <h2 style={{ fontWeight: "600" }} className="mb-4">
                {t("todo-app.about.title")}
              </h2>
              <p className="description">{t("todo-app.about.description")}</p>

              <a
                href="#"
                className="btn btn-outline-primary me-3 fs-5 py-md-2 px-4 mt-3"
              >
                <i className="fa-brands fa-google-play fs-5 me-2"></i>
                Google Play
              </a>
              <a
                href="#"
                className=" btn btn-outline-primary  me-3 fs-5 py-md-2 px-4 mt-3"
              >
                <i className="fa-brands fa-apple fs-4 me-2"></i>
                App Store
              </a>
            </div>
          </div>
        </section>
        <section className="platform py-2 py-md-5 container-fluid pro-bg-primary ">
          <div className="container h-100 my-4 d-flex justify-content-center align-items-center">
            <div className="row">
              {platformData.map((item) => (
                <div className="col" key={item.id}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    className="card my-3"
                  >
                    <div
                      style={{ backgroundColor: `${item.background}` }}
                      className="img-box d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={item.image}
                        alt="platform image"
                        width={80}
                        className="p-3"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="pricing py-md-5 ">
          <div className="head text-center mt-5">
            <p className="subtitle">{t("hrms.pricing.subtitle")}</p>
            <h2>{t("hrms.pricing.title")}</h2>
          </div>
          <div className="pricing-cards mt-4 container gap-4">
            <div className="row">
              <div className="col-lg-4">
                <div
                  style={{ backgroundColor: "#fff" }}
                  className="card rounded-4 border-0 proffesional my-3 w-100  p-5"
                >
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
                      <span className="text-secondary">
                        / {t("hrms.pricing.price")}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handlePrice("price_1Ok2pUEANFIAv9jSfM0pG6Zn")
                      }
                      className="btn btn-outline-primary  py-md-3 px-3 "
                    >
                      {t("hrms.pricing.pricingButton")}
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card unlimited pro-bg-primary  text-white unlimited rounded-4 border-0 my-3 d-flex w-100  p-5">
                  <div className="border-bottom pb-4">
                    <span className="btn border text-white mb-2 rounded-pill ">
                      {t("hrms.pricing.cardUnlimited.subtitle")}
                    </span>
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
                      <span className="text-light">
                        / {t("hrms.pricing.price")}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handlePrice("price_1Ok2q2EANFIAv9jSamZSQRNU")
                      }
                      className="download-btn download-btn-outline  m-0 text-decoration-none  rounded "
                    >
                      {t("hrms.pricing.pricingButton")}
                      <i className="fa-solid fa-arrow-right-long mt-1"></i>
                    </button>
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
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-overlay"></div>
          <div className="img-form w-100 h-100 position-absolute top-0 text-center">
            <div className="img-box">
              <img
                width={"100%"}
                height={"100%"}
                src={form_bg}
                alt="perview slider img hrms"
                className="bg-img img-fluid"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TodoApp;

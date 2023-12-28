import "./Home2.css";
import JscardBg from "../../assets/home2/program-card-js.webp";
import JscardIcon from "../../assets/home2/program-card-js-pic.webp";
// import PycardBg from "../../assets/home2/program-card-ds.webp";
// import PycardIcon from "../../assets/home2/program-card-ds-pic.webp";
import perview from "../../assets/team1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Partners, teamMembers } from "../../constants";
import Layout2 from "../../Layout/Layout2";
import ApplicationModal from "../../components/Application-modal/Application-modal";
import YouTubePreview from "../../components/YouTubePreview/YouTubePreview";

const Home2 = () => {
  const { t } = useTranslation();
  return (
    <Layout2>
      <div className="">
        {/* Hero */}
        <main className="hero py-5 text-white">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row text-center text-lg-start"
              style={{ zIndex: "9999" }}
            >
              <div className="col-lg-8">
                <h1 className=" fw-semibold  ">{t("herosection.title")}</h1>
                <div className="hero-bottom mt-4">
                  <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-2 gap-lg-5">
                    <div className="card border-0 row rounded-4 text-white">
                      <h2 className="m-0 col-md-4 text-center ">12</h2>
                      <p className=" m-0 col-md-7 text-center text-md-start">
                        {t("herosection.developers")}
                      </p>
                    </div>

                    <div className="card  border-0 row rounded-4 text-white">
                      <h2 className="m-0 col-md-5 text-center">120</h2>
                      <p className=" m-0 col-md-7 text-center text-md-start">
                        {t("herosection.students")}
                      </p>
                    </div>
                    <div className="card border-0 row rounded-4 text-white">
                      <h2 className="m-0 col-md-4  text-center">20</h2>
                      <p className=" m-0 col-md-7  text-center text-md-start">
                        {t("herosection.projects")}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/home2/services"}
                  className="btn btn-bottom btn-gold mt-4 mt-lg-5 px-4  p-2 rounded-4"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </main>
        {/* Hero end */}

        {/* Course */}
        <section className="course py-5">
          <div className="container-lg">
            <h2 className="title">Studying programs</h2>
            <div className="row my-4 gap-3">
              <div className="col-lg-5">
                <div className="card rounded-4">
                  <img src={JscardIcon} alt="" className="card-icon" />
                  <div className="content">
                    <div className="head pe-4 d-flex align-items-center justify-content-between ">
                      <h5 className=" h5 fw-semibold font-primary">
                        Web Developement
                      </h5>
                      <span className="badge text-bg-light fw-normal">
                        from scratch
                      </span>
                    </div>
                    <div className="body">
                      <ul className="p-0">
                        <p className="mb-1 mt-2">Formats:</p>
                        <li className="d-flex  align-items-center ">
                          <i className="fa-solid fa-circle mt-1 me-2"></i>
                          <span>Offline in Bukhara</span>
                        </li>
                        <li className="d-flex align-items-center ">
                          <i className="fa-solid fa-circle mt-1 me-2"></i>
                          <span>online</span>
                        </li>
                      </ul>
                      <p
                        style={{ fontSize: "13px" }}
                        className="text-secondary"
                      >
                        There is an introductory interview
                      </p>
                      <h6 className="h6">3-6 months</h6>
                      <Link
                        to={"/home2/services-detail"}
                        className="btn  rounded-4  btn-gold mt-2"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                  <div className="img-wrapp w-100 h-100">
                    <img src={JscardBg} alt="" className="w-100 h-100" />
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-5">
                <div className="card rounded-4">
                  <img src={PycardIcon} alt="" className="card-icon" />
                  <div className="content">
                    <div className="head pe-4 d-flex align-items-center justify-content-between ">
                      <h5 className=" h5 fw-semibold font-primary">
                        Data Science
                      </h5>
                      <span className="badge text-bg-light fw-normal">
                        с нуля
                      </span>
                    </div>
                    <div className="body ">
                      <ul className="p-0">
                        <p className="mb-1 mt-2">Форматы:</p>
                        <li className="d-flex align-items-center ">
                          <i className="fa-solid fa-circle mt-1 me-2"></i>
                          <span>офлайн в Москве и Санкт-Петербурге</span>
                        </li>
                        <li className="d-flex align-items-center ">
                          <i className="fa-solid fa-circle mt-1 me-2"></i>
                          <span>онлайн</span>
                        </li>
                      </ul>
                      <p
                        style={{ fontSize: "13px" }}
                        className="text-secondary"
                      >
                        Есть вступительное интервью
                      </p>
                      <h6>3-6 месяцев</h6>
                      <button className="btn rounded-4  btn-gold mt-2">
                        ПОДРОБНЕЕ
                      </button>
                    </div>
                  </div>
                  <div className="img-wrapp w-100 h-100">
                    <img src={PycardBg} alt="" className="w-100 h-100" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* Course End*/}

        {/* You Tube Video */}
        <section className="you-vid col bg-section-prymary py-5">
          <div className="container">
            <h2 className="title text-white">{t("blogSection.title")}</h2>
            <div className="card mt-5 rounded-4">
              <div className="row">
                <div className="col-lg-7">
                  <h3 className="font-primary">{t("blogSection.text")}</h3>
                </div>
                <div className="col-lg-5 pt-2">
                  <div className="position-relative">
                    <img
                      src={perview}
                      alt="perview"
                      className="w-100 rounded-3"
                    />

                    <YouTubePreview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* You Tube Video End*/}

        {/* Employment */}
        <section className="employment py-5 ">
          <div className="container">
            <h2 className="title text-dark">Employment</h2>
            <div className="d-flex mt-4  flex-wrap gap-5">
              <div className="box">
                <h3 className="font-primary fw-bold">2052</h3>
                <p>students graduated in 5 years</p>
              </div>
              <div className="box">
                <h3 className="font-primary fw-bold">86%</h3>
                <p>students find jobs in 3 months</p>
              </div>
              <div className="box">
                <h3 className="font-primary fw-bold">141</h3>
                <p>thousand rubles - average salary of graduates</p>
              </div>
            </div>
            <div className="employment-bottom">
              <h2 className="font-primary mt-5">Research hh.ru</h2>
              <div className="d-flex mt-4 align-items-center flex-wrap ">
                <div className="d-flex  align-items-center">
                  <div className="hh-logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="m-0 ms-3">
                    Employment statistics for Elbrus graduates Bootcamp
                    confirmed <br /> by hh.ru researchers
                  </p>
                </div>
                <a
                  href="https://hh.uz/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn text-dark btn-gold mt-4 mt-lg-0 ms-5"
                >
                  Read the study
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Employment End*/}

        {/* Graduates */}
        <section className="py-5 graduates">
          <div className="container">
            <h2 className="font-primary title text-primary">
              {t("partners.title")}
            </h2>
            <div className="row mt-5">
              {Partners.map((item, i) => (
                <div className="col mt-3" key={i}>
                  <img
                    src={item}
                    width={220}
                    height={120}
                    className="object-fit-contain "
                    alt="Pro Unity partners"
                  />
                </div>
              ))}
            </div>

            {/* <h2 className="font-primary text-primary mt-5">
              Содействие в трудоустройстве
            </h2>
            <div className="mt-4 employment-assistance">
              <div className="cards gap d-flex">
                <div className="card">
                  <div className="d-flex line-box  align-items-center">
                    <i className="fa-solid fa-circle text-primary"></i>
                    <div className="line"></div>
                  </div>
                  <h5 className="font-primary mt-4">
                    СОЗДАЕМ СТРАТЕГИЮ ПОИСКА РАБОТЫ
                  </h5>
                  <p>
                    Устанавливаем цели по поиску работы. Работаем с источниками
                    вакансий.
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex line-box align-items-center">
                    <i className="fa-solid fa-circle text-primary"></i>
                    <div className="line"></div>
                  </div>
                  <h5 className="font-primary mt-4">ПОМОГАЕМ СОЗДАТЬ РЕЗЮМЕ</h5>
                  <p>
                    Составляем резюме и сопроводительное письмо, оформляем
                    проекты на GitHub.
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex line-box align-items-center">
                    <i className="fa-solid fa-circle text-primary"></i>
                    <div className="line"></div>
                  </div>
                  <h5 className="font-primary mt-4">ГОТОВИМ К СОБЕСЕДОВАНИЮ</h5>
                  <p>
                    Прорабатываем вопросы, имитируя реальное будущее
                    собеседование с HR и техническое интервью.
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex  align-items-center">
                    <i className="fa-solid fa-circle text-primary"></i>
                    <div className="line"></div>
                  </div>
                  <h5 className="font-primary mt-4">
                    ПЕРЕДАЕМ ОПЫТ ВЫПУСКНИКОВ
                  </h5>
                  <p>
                    Общение с выпускниками помогает понять формат
                    трудоустройства и необходимых знаний на реальном примере.
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex  align-items-center">
                    <i className="fa-solid fa-circle text-primary"></i>
                    <div className="line"></div>
                  </div>
                  <h5 className="font-primary mt-4">ПРОВОДИМ ТРЕНИНГИ</h5>
                  <p>
                    Прохождение тренингов помогает сформировать софт скиллы
                    студента и подготовить его к новой карьере. Прорабатываем
                    синдром самозванца
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex  align-items-center">
                    <i className="fa-solid fa-circle text-primary"></i>
                  </div>
                  <h5 className="font-primary mt-4">
                    СОПРОВОЖДАЕМ В ТЕЧЕНИЕ ГОДА
                  </h5>
                  <p>
                    Карьерный коуч остается на связи в течение целого года после
                    обучения и всегда готов поддержать.
                  </p>
                </div>
              </div>
              <button className="btn btn-gold mt-5">
                О трудоустройстве выпускников
              </button>
            </div> */}
          </div>
        </section>
        {/* Graduates end*/}

        {/* Our events */}
        <section className="our-events py-5">
          <div className="container-lg">
            <h2 className="font-primary title">Our events</h2>
            <div className="d-flex  flex-column flex-lg-row gap-5 align-items-start">
              <div className="card mt-4">
                <div className="row">
                  <div className="box-l d-flex h-100  justify-content-between align-items-start flex-column col-7">
                    <div className="">
                      <span>MEETING</span>
                      <h4 className="font-primary mt-2 mt-lg-4 fw-bold">
                        Developer battle: OZON vs SBER. Where is better?
                      </h4>
                      <ul className="p-0 mt-2  mt-lg-4">
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Meeting with a graduate
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Meeting with a graduate
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Meeting with a graduate
                        </li>
                      </ul>
                    </div>
                    <button className="btn btn-gold">More</button>
                  </div>
                  <div className="box-r col-5">
                    <span className="status">Online</span>
                    <h2 className="mt-4 display-4  font-primary fw-normal">
                      21
                    </h2>
                    <p>December</p>
                    <p className="mt-3">
                      Thursday <br /> 19:00 — 20:30 <br />
                      Tashkent time
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="row ">
                  <div className="box-l d-flex justify-content-between align-items-start flex-column col-7">
                    <div className="">
                      <span>MEETING</span>
                      <h4 className="font-primary mt-2  mt-lg-4 fw-bold">
                        Developer battle: OZON vs SBER. Where is better?
                      </h4>
                      <ul className="p-0 mt-2  mt-lg-4">
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Meeting with a graduate
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Meeting with a graduate
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Meeting with a graduate
                        </li>
                      </ul>
                    </div>
                    <button className="btn btn-gold">More</button>
                  </div>
                  <div className="box-r col-5">
                    <span className="status">Online</span>
                    <h2 className="mt-4 display-4  font-primary fw-normal">
                      10
                    </h2>
                    <p>December</p>
                    <p className="mt-3">
                      Thursday <br /> 19:00 — 20:30 <br />
                      Tashkent time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our events end*/}

        {/*Our Team  */}
        <section className="py-5 graduates-2 our-team">
          <div className="container  position-relative">
            <h2 className="font-primary  title">{t("teamsection.title")}</h2>

            <div className="row py-5">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  1200: {
                    slidesPerView: 4,
                  },
                  968: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                pagination={{
                  type: "fraction",
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={25}
              >
                {teamMembers.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="card border-0">
                      <div className="card-head">
                        <img
                          src={item.image}
                          alt=""
                          className="w-100 h-100 rounded-4"
                        />
                      </div>
                      <div className="body mt-3 text-center">
                        <h4 className="font-primary mb-1">{item.name}</h4>
                        <p className="mb-0 fs-5">{item.occupation}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="mb-5">
                <div className="navigationBox">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* slider end */}

        {/*  bootcamp*/}
        {/* <section className="bg-section-prymary py-5 bootcamp">
          <div className="container">
            <h2 className="font-primary text-white pb-3 title">
              СМИ о нас и буткемпах
            </h2>
            <div className="body d-flex gap-3 gap-md-5 flex-wrap mt-4">
              {slider.map((item) => (
                <img
                  key={item}
                  width={180}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/2560px-YouTube_light_logo_%282017%29.svg.png"
                  alt=""
                />
              ))}
            </div>
          </div>
        </section> */}
        {/* bootcamp end */}

        {/* Faq */}
        <section className="faq py-5">
          <div className="container">
            <h2 className="font-primary pb-3 title">F.A.Q.</h2>
            <div className="card mt-5 rounded-4 border-0">
              <div className="row">
                <div className="col-lg-6">
                  <h5 className="fw-normal">
                    Основатель буткемпа Георгий Бабаян разбирает ваши самые
                    популярные вопросы.
                  </h5>
                  <ul className="p-0 mt-4 d-none d-lg-block">
                    <li className="d-flex mb-2 gap-2 align-items-center">
                      <div className="check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Почему JavaScript?
                    </li>
                    <li className="d-flex mb-2 gap-2 align-items-center">
                      <div className="check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Какие есть направления в обучении?
                    </li>
                    <li className="d-flex mb-2 gap-2 align-items-center">
                      <div className="check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Кто преподает в Эльбрус Буткемп?
                    </li>
                    <li className="d-flex mb-2 gap-2 align-items-center">
                      <div className="check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Как строится обучение?
                    </li>
                    <li className="d-flex mb-2 gap-2 align-items-center">
                      <div className="check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Какие есть варианты оплаты?
                    </li>
                    <li className="d-flex mb-2 gap-2 align-items-center">
                      <div className="check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      Легко ли найти работу после обучения в Эльбрус Буткемп?
                    </li>
                  </ul>
                  <Link
                    to={"/"}
                    className="text-primary text-decoration-none d-block pt-3"
                  >
                    Страница ответов на другие вопросы{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="col-lg-6 pt-2">
                  <div className="position-relative">
                    <img
                      src={perview}
                      alt=""
                      className="w-100 object-fit-cover rounded-3"
                    />
                    <YouTubePreview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Faq end */}

        {/* application */}
        <section className="application py-5">
          <div className="container">
            <div className="d-flex  align-items-center flex-column flex-lg-row gap-3 gap-lg-5">
              <h2 className="font-primary text-center text-lg-left pb-lg-3 m-0">
                Ready to answer your questions
              </h2>

              <ApplicationModal btn={"Submit your application"} />
            </div>
          </div>
        </section>
        {/* application end */}
      </div>
    </Layout2>
  );
};

export default Home2;

import Logo from "../../assets/logotogether.png";
import "./Home2.css";
import JscardBg from "../../assets/home2/program-card-js.webp";
import JscardIcon from "../../assets/home2/program-card-js-pic.webp";
import PycardBg from "../../assets/home2/program-card-ds.webp";
import PycardIcon from "../../assets/home2/program-card-ds-pic.webp";
import perview from "../../assets/team1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Partners, followUsLinks, teamMembers } from "../../constants";
import i18next from "i18next";

const slider = [0, 1, 2, 3, 4, 5, 6, 7];
const Home2 = () => {
  const { t } = useTranslation();
  const [navListShow, setNavListShow] = useState(false);
  const [activeLang, setactiveLang] = useState("en");
  return (
    <div className="home2 ">
      <div className="">
        {/* Navbar */}
        <div className="navbar-wrapp">
          <nav className="navbar-home container-lg  p-0  ">
            <div className="container-fluid d-flex justify-content-between">
              <a className="navbar-brand d-flex align-items-center " href="#">
                <img src={Logo} alt="" width={150} className="" />
              </a>
              <div
                className="menu-bars"
                onClick={() => setNavListShow((prev) => !prev)}
              >
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div
                className={`navbar-res  d-flex flex-column px-3  py-4 flex-lg-row justify-content-between align-items-lg-center  w-100  ms-lg-5 ${
                  navListShow ? "show" : ""
                }`}
              >
                <ul className="d-flex mx-auto align-items-lg-center justify-content-between flex-column p-0  h-100 flex-lg-row m-0 pb-4 pb-lg-0">
                  <li>
                    <Link to={"/"} className="nav-link">
                      {t("navbar.home")}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-link">
                      {t("navbar.about")}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-link">
                      {t("navbar.service")}
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to={"/"} className="nav-link">
                      {t("navbar.products")}
                    </Link>
                    <div className="dropdown-item border-top ">
                      <ul className="p-0">
                        <li>
                          <Link to={"/products/hrms"} className="nav-link">
                            Hrms
                          </Link>
                        </li>
                        <li>
                          <Link to={"/products/delivery"} className="nav-link">
                            Delivery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-link">
                      {t("navbar.contact")}
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to={"/"} className="nav-link">
                      {t("navbar.language")}
                    </Link>
                    <div className="dropdown-item border-top ">
                      <ul className="p-0">
                        <li
                          className="nav-link cursor"
                          onClick={() => {
                            i18next.changeLanguage("en");
                            setactiveLang("en");
                          }}
                        >
                          En
                        </li>
                        <li
                          className="nav-link cursor"
                          onClick={() => {
                            i18next.changeLanguage("ru");
                            setactiveLang("ru");
                          }}
                        >
                          Ru
                        </li>
                        <li
                          className="nav-link cursor"
                          onClick={() => {
                            i18next.changeLanguage("uz");
                            setactiveLang("uz");
                          }}
                        >
                          Uz
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="d-flex gap-3">
                  <button className="btn btn-outline-dark rounded-3 border-2 py-1">
                    Войти
                  </button>
                  <button className="btn  btn-gold  rounded-3 border-2 py-1">
                    Начать учиться
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Navbar end */}

        {/* Hero */}
        <main className="hero py-5 text-white">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row text-center text-lg-start"
              style={{ zIndex: "9999" }}
            >
              <div className="col-lg-7">
                {" "}
                <h1 className=" display-5 fw-semibold h1 ">
                  {t("herosection.title")}
                </h1>
                <div className="hero-bottom mt-4">
                  {/* <h5 className="title">
                    *По версии посетителей портала Хабр в 2023г.
                  </h5> */}
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
                {/* <button className="btn btn-bottom btn-gold mt-4 mt-lg-5 px-4  p-2 rounded-4">
                  Посмотреть программы
                </button> */}
              </div>
              <div className="col-lg-5"></div>
            </div>
          </div>
        </main>
        {/* Hero end */}

        {/* Course */}
        <section className="course py-5">
          <div className="container-lg">
            <h2 className="title">Программы обучения</h2>
            <div className="row my-4 gap-3">
              <div className="col-lg-5">
                <div className="card rounded-4">
                  <img src={JscardIcon} alt="" className="card-icon" />
                  <div className="content">
                    <div className="head pe-4 d-flex align-items-center justify-content-between ">
                      <h5 className=" h5 fw-semibold font-primary">
                        Веб-разработчик
                      </h5>
                      <span className="badge text-bg-light fw-normal">
                        с нуля
                      </span>
                    </div>
                    <div className="body">
                      <ul className="p-0">
                        <p className="mb-1 mt-2">Форматы:</p>
                        <li className="d-flex  align-items-center ">
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
                      <h6 className="h6">3-6 месяцев</h6>
                      <button className="btn rounded-4  btn-gold mt-2">
                        ПОДРОБНЕЕ
                      </button>
                    </div>
                  </div>
                  <div className="img-wrapp w-100 h-100">
                    <img src={JscardBg} alt="" className="w-100 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
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
              </div>
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
                    <div className="play-btn-wrapp">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/watch?v=_voQ5MGXX3g"
                        className=" btn play-btn"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
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
            <h2 className="title text-dark">Трудоустройство</h2>
            <div className="d-flex mt-4  flex-wrap gap-5">
              <div className="box">
                <h3 className="font-primary fw-bold">2052</h3>
                <p>студентов выпущено за 5 лет</p>
              </div>
              <div className="box">
                <h3 className="font-primary fw-bold">86%</h3>
                <p>студентов находят работу за 3 месяца</p>
              </div>
              <div className="box">
                <h3 className="font-primary fw-bold">141</h3>
                <p>тысяч рублей — средняя зарплата выпускников</p>
              </div>
              <div className="box">
                <h3 className="font-primary fw-bold">5/5</h3>
                <a href="#" className="text-decoration-none">
                  Рейтинг Яндекса <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="employment-bottom">
              <h2 className="font-primary mt-5">Исследование hh.ru</h2>
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
                    Статистика по трудоустройству выпускников Эльбрус <br />{" "}
                    Буткемп подтверждена исследователями hh.ru
                  </p>
                </div>
                <button className="btn btn-gold mt-4 mt-lg-0 ms-5">
                  Читать исследование
                </button>
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
            <h2 className="font-primary title">Наши мероприятия</h2>
            <div className="d-flex  flex-column flex-lg-row gap-5 align-items-start">
              <div className="card mt-4">
                <div className="row">
                  <div className="box-l d-flex h-100  justify-content-between align-items-start flex-column col-7">
                    <div className="">
                      <span>ВСТРЕЧА</span>
                      <h4 className="font-primary mt-2 mt-lg-4 fw-bold">
                        Баттл разработчиков: OZON vs СБЕР. Где лучше?
                      </h4>
                      <ul className="p-0 mt-2  mt-lg-4">
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Встреча с выпускником
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Встреча с выпускником
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Встреча с выпускником
                        </li>
                      </ul>
                    </div>
                    <button className="btn btn-gold">ПОДРОБНЕЕ</button>
                  </div>
                  <div className="box-r col-5">
                    <span className="status">Онлайн</span>
                    <h2 className="mt-4 display-4  font-primary fw-normal">
                      21
                    </h2>
                    <p>декабря</p>
                    <p className="mt-3">
                      четверг <br /> 19:00 — 20:30 <br />
                      по Мск
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="row ">
                  <div className="box-l d-flex justify-content-between align-items-start flex-column col-7">
                    <div className="">
                      <span>ВСТРЕЧА</span>
                      <h4 className="font-primary mt-2  mt-lg-4 fw-bold">
                        Баттл разработчиков: OZON vs СБЕР. Где лучше?
                      </h4>
                      <ul className="p-0 mt-2  mt-lg-4">
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Встреча с выпускником
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Встреча с выпускником
                        </li>
                        <li className="d-flex mb-2 gap-2 align-items-center">
                          <div className="check">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          Встреча с выпускником
                        </li>
                      </ul>
                    </div>
                    <button className="btn btn-gold">ПОДРОБНЕЕ</button>
                  </div>
                  <div className="box-r col-5">
                    <span className="status">Онлайн</span>
                    <h2 className="mt-4 display-4  font-primary fw-normal">
                      10
                    </h2>
                    <p>декабря</p>
                    <p className="mt-3">
                      четверг <br /> 19:00 — 20:30 <br />
                      по Мск
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
        <section className="bg-section-prymary py-5 bootcamp">
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
        </section>
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
                    <div className="play-btn-wrapp">
                      <button className=" btn play-btn">
                        <i className="fa-solid fa-play  ms-1"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-secondary fw-normal mt-4 h6">10 минут</p>
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
                Готовы ответить на ваши вопросы
              </h2>
              <button className="btn btn-gold">Оставить заявку</button>
            </div>
          </div>
        </section>
        {/* application end */}

        {/* Footer */}
        <footer className="footer bg-section-prymary py-5">
          <div className="container">
            <div className="row gap-4 gap-lg-0">
              <div className="col-lg-4 ">
                <h3 className="text-light mb-4">{t("footer.address")}</h3>
                <ul className="p-0">
                  <li>
                    <a href="tel:+998-33-899-50-00">
                      +998 33 899 50 00{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>

                  <li className="">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:prounity.uz@gmail.com"
                    >
                      prounity.uz@gmail.com{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-1 location ">
                    {/* <i className="fa-solid fa-location-dot d-block my-3"></i> */}
                    <a href="#">
                      {t("topbar.location")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
                <div className="d-flex pt-2">
                  {followUsLinks.map((item) => (
                    <a
                      style={{ opacity: "1" }}
                      key={item.id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none btn btn-light btn-social rounded-circle"
                      href={item.link}
                    >
                      <img width={17} src={item.icon} alt="" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <h3 className="text-light mb-3">
                  {t("footer.services.title")}
                </h3>
                <ul className="p-0">
                  <li>
                    <a href="#">
                      {t("footer.services.link1")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      {t("footer.services.link2")}{" "}
                      <i className="fa-solid fa-arrow-right"> </i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      {t("footer.services.link3")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      {t("footer.services.link4")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      {t("footer.services.link5")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      {t("footer.services.link6")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h3 className="text-light mb-3">
                  {t("footer.quicklinks.title")}
                </h3>
                <ul className="p-0">
                  <li>
                    <a href="#">
                      {t("footer.quicklinks.link1")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      {t("footer.quicklinks.link2")}{" "}
                      <i className="fa-solid fa-arrow-right"> </i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      {t("footer.quicklinks.link3")}{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row ">
              <div className="container">
                <div className=" copyright text-light text-center fs-5 text-md-center mb-3 mb-md-0">
                  © Pro Unity, All Right Reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer end*/}
      </div>
    </div>
  );
};

export default Home2;

import Logo from "../../assets/home2/logo.webp";
import "./Home2.css";
import JscardBg from "../../assets/home2/program-card-js.webp";
import JscardIcon from "../../assets/home2/program-card-js-pic.webp";
import PycardBg from "../../assets/home2/program-card-ds.webp";
import PycardIcon from "../../assets/home2/program-card-ds-pic.webp";
import perview from "../../assets/home2/preview.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { SlSocialVkontakte } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { useState } from "react";

const navs = [
  { id: 1, name: "  Бесплатные мероприятия" },
  { id: 2, name: "   О буткемпе" },
  { id: 3, name: "  Статьи для новичков" },
  { id: 4, name: "  Контакты" },
  { id: 5, name: "  F.A.Q." },
];
const slider = [0, 1, 2, 3, 4, 5, 6, 7];
const Home2 = () => {
  const [navListShow, setNavListShow] = useState(false);
  return (
    <div className="home2 ">
      <div className="">
        {/* Navbar */}
        <div className="navbar-wrapp">
          <nav className="navbar-home container-lg  p-0  ">
            <div className="container-fluid d-flex justify-content-between">
              <a className="navbar-brand d-flex align-items-center " href="#">
                <img src={Logo} alt="" width={100} />
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
                <ul className="d-flex   align-items-lg-center justify-content-between flex-column p-0  h-100 flex-lg-row m-0 pb-4 pb-lg-0">
                  <li className="">
                    <a
                      className="nav-link text-capitalize "
                      aria-current="page"
                      href="#"
                    >
                      Программы
                    </a>
                  </li>
                  {navs.map((nav) => (
                    <li className="" key={nav.id}>
                      <a className="nav-link text-capitalize" href="#">
                        {nav.name}
                      </a>
                    </li>
                  ))}
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
          <div className="container">
            <div className="row text-center text-lg-start">
              <div className="col-lg-7">
                {" "}
                <h1 className=" display-5 fw-semibold h1">
                  ПОЛУЧИТЕ IT‍-‍ПРОФЕССИЮ И ИЗМЕНИТЕ СВОЮ ЖИЗНЬ
                </h1>
                <div className="py-3 row">
                  <div className="col-lg-6">
                    <p>
                      Узнайте, как стать разработчиком за 3 месяца и найти
                      стабильную высокооплачиваемую работу
                    </p>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
                <div className="hero-bottom mt-4">
                  <h5 className="title">
                    *По версии посетителей портала Хабр в 2023г.
                  </h5>
                  <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-2 gap-lg-5">
                    <div className="card border-0 row rounded-4 text-white">
                      <h2 className="m-0 col-4">141k</h2>
                      <p className=" m-0 col-7">Средняя зарплата выпускников</p>
                    </div>

                    <div className="card  border-0 row rounded-4 text-white">
                      <h2 className="m-0 col-4">86%</h2>
                      <p className=" m-0 col-7">
                        студентов находят работу за 3 месяца <br />
                        <span>исследование hh.ru</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button className="btn btn-bottom btn-gold mt-4 mt-lg-5 px-4  p-2 rounded-4">
                  Посмотреть программы
                </button>
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
            <h2 className="title text-white">Что такое буткемп?</h2>
            <div className="card mt-5 rounded-4">
              <div className="row">
                <div className="col-lg-7">
                  <h3 className="font-primary">
                    Это интенсивный формат обучения программированию (ежедневно,
                    с утра до вечера, на протяжении трех месяцев в кампусе и
                    четырех при формате онлайн) на реальных проектах с
                    трудоустройством после обучения
                  </h3>
                  <p className="text-white mt-4">
                    В интервью с ИТ-Бородой рассказываем о формате образования в
                    школе программирования Эльбрус Буткемп
                  </p>
                </div>
                <div className="col-lg-5 pt-2">
                  <div className="position-relative">
                    <img src={perview} alt="" className="w-100" />
                    <div className="play-btn-wrapp">
                      <button className=" btn play-btn">
                        <i className="fa-solid fa-play"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-secondary mt-4 h5 time">1 час 12 минут</p>
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
            <h2 className="font-primary text-primary">
              Где работают наши выпускники
            </h2>
            <div className="row">
              <div className="col mt-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
                  width={200}
                  alt=""
                />
              </div>
              <div className="col mt-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
                  width={200}
                  alt=""
                />
              </div>
              <div className="col mt-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
                  width={200}
                  alt=""
                />
              </div>
              <div className="col mt-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
                  width={200}
                  alt=""
                />
              </div>
              <div className="col mt-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
                  width={200}
                  alt=""
                />
              </div>
              <div className="col mt-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png"
                  width={200}
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <h2 className="font-primary text-center mt-3 mt-lg-0 text-lg-end fs-1 text-end">
                и еще 750+ компаний
              </h2>
            </div>
            <h2 className="font-primary text-primary mt-5">
              Содействие в трудоустройстве
            </h2>
            {/* <div className="mt-4 employment-assistance">
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

        {/*slider  */}
        <section className="py-5 graduates-2">
          <div className="container  position-relative">
            <h2 className="font-primary  title">Выпускники</h2>
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
                <h3 className="font-primary fw-bold">5/5</h3>
                <a href="#" className="text-decoration-none">
                  Рейтинг Яндекса <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
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
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                spaceBetween={25}
              >
                {slider.map((item) => (
                  <SwiperSlide className="" key={item}>
                    <div className="card border-0">
                      <div className="card-head">
                        <img
                          src="https://elbrusboot.camp/static/83a8e39372ca12864fb203014184183f/ee0bb/solar.webp"
                          alt=""
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="body mt-3">
                        <h2 className="font-primary mb-1">Дарья</h2>
                        <h2 className="font-primary mb-1">Соляр</h2>
                        <p className="mb-0">Разработчик</p>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Logo_Sberbank.svg/2560px-Logo_Sberbank.svg.png"
                          alt=""
                          width={100}
                          className="py-2"
                        />
                        <p className="text-secondary">
                          Больше всего запомнилась командная атмосфера всего
                          буткемпа - это помогло освоить огромный объём
                          информации, которой оказалось достаточно для легкого
                          входа в IT. Я благодарна всему преподавательскому
                          составу за полную поддержку в обучении и не жалею, что
                          обучалась в Эльбрус Буткемп.
                        </p>
                        <a href="#" className="text-decoration-none">
                          Спросить про обучение
                        </a>
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
                    <img src={perview} alt="" className="w-100" />
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
                <ul className="p-0">
                  <li>
                    <a href="#">
                      +7 (499) 938-68-24{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      Чат в whatsApp{" "}
                      <i className="fa-solid fa-arrow-right"> </i>/
                    </a>

                    <a href="#">
                      h Telegram <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      info@elbrusboot.camp{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-4 location ">
                    <i className="fa-solid fa-location-dot d-block my-3"></i>
                    <a href="#">
                      Москва, ул. Орджоникидзе, 11 стр. 10 (м. Ленинский
                      проспект) <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="p-0">
                  <li>
                    <a href="#">
                      О буткемпе <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      Программа лояльности{" "}
                      <i className="fa-solid fa-arrow-right"> </i>/
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      Бесплатные мероприятия{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      Статьи для новичков{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      Контакты <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      Вакансии <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="p-0">
                  <li>
                    <a href="#">
                      Политика обработки персональных данных{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      Пользовательское соглашение{" "}
                      <i className="fa-solid fa-arrow-right"> </i>
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">
                      Договор оферта <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      Об образовательной организации{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li className="mt-2 location ">
                    <a href="#">
                      Государственная лицензия{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row  mt-5">
              <div className="col-lg-4 d-flex align-items-end">
                <ul className="p-0 ">
                  <li>
                    <h4 className="text-white text-capitalize">участник</h4>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <p className="text-white">
                  Хочу получать интересные материалы по программированию пару
                  раз в месяц
                </p>
                <form className="d-flex flex-column flex-lg-row gap-4 align-items-start align-items-lg-center">
                  <div className="form-floating  ">
                    <input
                      type="email"
                      className="form-control "
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email </label>
                  </div>
                  <button className="btn">Подписаться</button>
                </form>

                <span className="mt-2 d-block">
                  Продолжая, вы принимаете условия{" "}
                  <a href="#">
                    Соглашения <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </span>
              </div>
              <div className="col-lg-4 d-flex pt-5  gap-3 align-items-end">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vk.com/"
                  className="social-box"
                >
                  <SlSocialVkontakte className="icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@prounity40"
                  className="social-box"
                >
                  <FiYoutube className="icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/ProUnityuz"
                  className="social-box"
                >
                  <LiaTelegramPlane className="icon" />
                </a>
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

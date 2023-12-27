import { Navigation } from "swiper/modules";
import Layout2 from "../../../Layout/Layout2";
import "./ServicesDetail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Jscourse from "../../../assets/teamwork.jpg";
import ExpessJs from "../../../assets/expressJs.webp";
import Nodejs from "../../../assets/nodejs.webp";
import TS from "../../../assets/ts.webp";
import Postgress from "../../../assets/postgresql.webp";
import Jest from "../../../assets/jest.webp";
import React from "../../../assets/react.webp";
import GitHub from "../../../assets/githubcat.webp";
import Git from "../../../assets/git.webp";
import Redux from "../../../assets/redux.webp";

import TrainingCard1 from "../../../assets/online.webp";
import TrainingCard2 from "../../../assets/spb.webp";
import TrainingCard3 from "../../../assets/msk.webp";

const Tools = [
  ExpessJs,
  Nodejs,
  TS,
  Postgress,
  Jest,
  React,
  GitHub,
  Git,
  Redux,
];
const Services = () => {
  return (
    <Layout2>
      <div className="services-detail">
        <main>
          <div className="container " style={{ zIndex: "999" }}>
            <div className="row ">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="services-title text-white">ВЕБ-РАЗРАБОТЧИК</h1>
                <button className="btn btn-gold ">Записаться</button>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </main>
        <section className="py-5" style={{ background: "rgb(248, 246, 252)" }}>
          <div className="container-lg">
            <div className=" card rounded-5 border-0  p-3">
              <div className="row gap-4 gap-lg-0">
                <div className="col-lg-3 d-flex gap-2 align-items-start justify-content-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-fire"></i>
                  </div>
                  <span className="card-desc">
                    Актуальная программа: HTML, CSS, TypeScript, JavaScript,
                    Node js, Express, React, Redux, PostgreSQL, Git
                  </span>
                </div>
                <div className="col-lg-3 d-flex gap-2 align-items-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span className="card-desc">
                    Живые лекции и разбор кода ментором
                  </span>
                </div>
                <div className="col-lg-3 d-flex gap-2 align-items-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <span className="card-desc">
                    Помощь в трудоустройстве: 40 часов с карьерными коучами
                  </span>
                </div>
                <div className="col-lg-3 d-flex gap-2 align-items-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <span className="card-desc">
                    Диплом о профессиональной переподготовке установленного
                    образца
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="training-program">
          <div className="container py-5">
            <h2 className="title font-primary mt-3">
              Программа обучения <br /> по Веб-разработке
            </h2>
            <div className="row position-relative  my-5">
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
                  nextEl: ".swiper-button-next-services-detail",
                  prevEl: ".swiper-button-prev-services-detail",
                }}
                modules={[Navigation]}
                spaceBetween={25}
              >
                <SwiperSlide>
                  <div className="slider-card p-4 rounded-4">
                    <div className="card-head d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-end gap-2">
                        <div className="icon px-2 py-1 rounded-2">
                          <i className="fa-solid fa-code text-primary "></i>
                        </div>
                        <h4 className="card-title text-primary font-primary">
                          Фаза 0
                        </h4>
                      </div>
                      <span className="">1-3 неделя</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Терминал, Git, основы HTML/ CSS, основы JavaScript.
                      Проходит online, 6-8 часов в день.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-card p-4 rounded-4">
                    <div className="card-head d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-end gap-2">
                        <div className="icon px-2 py-1 rounded-2">
                          <i className="fa-solid fa-code text-primary "></i>
                        </div>
                        <h4 className="card-title text-primary font-primary">
                          Фаза 1
                        </h4>
                      </div>
                      <span className="">4-6 неделя</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Ванильный JavaScript, тестирование, структуры данных,
                      алгоритмы.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-card p-4 rounded-4">
                    <div className="card-head d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-end gap-2">
                        <div className="icon px-2 py-1 rounded-2">
                          <i className="fa-solid fa-code text-primary "></i>
                        </div>
                        <h4 className="card-title text-primary font-primary">
                          Фаза 2
                        </h4>
                      </div>
                      <span className="">7-9 неделя</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Backend (Node.js, Express), базы данных. Два проекта для
                      портфолио. Обучение деплоименту на платформе Selectel.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-card p-4 rounded-4">
                    <div className="card-head d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-end gap-2">
                        <div className="icon px-2 py-1 rounded-2">
                          <i className="fa-solid fa-code text-primary "></i>
                        </div>
                        <h4 className="card-title text-primary font-primary">
                          Фаза 3
                        </h4>
                      </div>
                      <span className="">10-12 неделя</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Frontend библиотеки (React, Redux). Связывание UI с
                      back-end и базы данных PostgreSQL. Финальный проект.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="slider-card p-4 rounded-4"
                    style={{ background: "rgb(233, 233, 255)" }}
                  >
                    <div className="card-head d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-end gap-2">
                        <h4 className="card-title text-primary font-primary">
                          Карьерная неделя
                        </h4>
                      </div>
                      <span className="">5 дней</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Стратегия по поиску работы, составление резюме, подготовка
                      к собеседованиям.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="my-5 d-flex flex-column-reverse align-items-center flex-md-row justify-content-between">
                <button className="btn btn-gold text-dark">
                  Получить подробную программу
                </button>
                <div className="services-detail-slider-navigation">
                  <button className=" swiper-button-prev-services-detail me-3">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="swiper-button-next-services-detail">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tools py-4 mb-5">
          <div className="container">
            <h2 className="font-primary title text-lg-left pb-lg-3 m-0">
              Инструменты
            </h2>
            <div className="row  ">
              {Tools.map((item, i) => (
                <div className="col-4 col-lg" key={i}>
                  <img src={item} alt="img" className="mt-5" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bootcamp-content py-4">
          <div className="container">
            <h2 className="font-primary title text-lg-left pb-lg-3 m-0">
              Как устроен буткемп
            </h2>
            <div className="row mt-4">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="font-primary text-primary">
                      Из чего состоит обучение
                    </h4>
                    <ul className="p-0 mt-4">
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Живые лекции и обратная связь от преподавателя
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Код-ревью: проверка кода преподавателем
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Работа над проектами от заказчика
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  ">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Подготовка к собеседованиям вместе с карьерным коучем
                        </span>
                      </li>
                    </ul>
                    <img
                      src="https://elbrusboot.camp/static/4e2a75a068cbe58215af79f0feec2274/08c91/500codingHours.webp"
                      alt=""
                      className=" mt-5 w-100"
                    />
                  </div>
                  <div className="col-lg-6">
                    <h4 className="font-primary text-primary">
                      Из чего состоит обучение
                    </h4>
                    <ul className="p-0 mt-4">
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Профессия: разработчик JavaScript, TypeScript
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Портфолио на GitHub: 2 групповых, 1 индивидуальный и
                          10 учебных проектов
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Диплом о профессиональной переподготовке
                          установленного образца
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  ">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Доступ к закрытому комьюнити разработчиков
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <img
                  src="https://elbrusboot.camp/static/7538ade71dcd7ddb88a25144a08039b2/dc153/howbootcampworks.webp"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 mb-5 training-format">
          <div className="container">
            <h2 className="font-primary title text-lg-left pb-lg-3 m-0">
              Формат обучения
            </h2>
            <p className="text-secondary">
              Программа обучения во всех форматах одинаковая.
            </p>
            <div className="row gap-4 gap-lg-0">
              <div className="col-lg-4">
                <div className="card p-3 border-0 position-relative">
                  <img
                    src={TrainingCard1}
                    alt=""
                    className="position-absolute rounded-3 w-100 h-100 top-0 start-0"
                  />
                  <div className="card-content h-100  d-flex flex-column justify-content-between">
                    <div className="card-top d-flex justify-content-between">
                      <span className="">Веб разработчик</span>
                      <div className="d-flex gap-2 text-light align-items-center">
                        {" "}
                        <i className="fa-regular fa-calendar-days"></i> 12
                        недель
                      </div>
                    </div>
                    <div className="card-body p-0 text-white mt-5">
                      <h5>Онлайн</h5>
                      <h6>
                        {" "}
                        <i className="fa-solid fa-clock"></i> старт: 29 января
                      </h6>
                    </div>
                    <div className="card-bottom d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="text-white fw-normal m-0">
                          {" "}
                          От 9 500 ₽/месяц
                        </h5>
                        <h6 className="text-secondary fw-semibold m-0">
                          или сразу 275 000₽
                        </h6>
                      </div>
                      <button className="btn btn-gold">подробнее</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card p-3 border-0 position-relative">
                  <img
                    src={TrainingCard2}
                    alt=""
                    className="position-absolute rounded-3 w-100 h-100 top-0 start-0"
                  />
                  <div className="card-content h-100  d-flex flex-column justify-content-between">
                    <div className="card-top d-flex justify-content-between">
                      <span className="">Веб разработчик</span>
                      <div className="d-flex gap-2 text-light align-items-center">
                        {" "}
                        <i className="fa-regular fa-calendar-days"></i> 12
                        недель
                      </div>
                    </div>
                    <div className="card-body p-0 text-white mt-5">
                      <h5>Онлайн</h5>
                      <h6>
                        {" "}
                        <i className="fa-solid fa-clock"></i> старт: 29 января
                      </h6>
                    </div>
                    <div className="card-bottom d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="text-white fw-normal m-0">
                          {" "}
                          От 9 500 ₽/месяц
                        </h5>
                        <h6 className="text-secondary fw-semibold m-0">
                          или сразу 275 000₽
                        </h6>
                      </div>
                      <button className="btn btn-gold">подробнее</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card p-3 border-0 position-relative">
                  <img
                    src={TrainingCard3}
                    alt=""
                    className="position-absolute rounded-3 w-100 h-100 top-0 start-0"
                  />
                  <div className="card-content h-100  d-flex flex-column justify-content-between">
                    <div className="card-top d-flex justify-content-between">
                      <span className="">Веб разработчик</span>
                      <div className="d-flex gap-2 text-light align-items-center">
                        {" "}
                        <i className="fa-regular fa-calendar-days"></i> 12
                        недель
                      </div>
                    </div>
                    <div className="card-body p-0 text-white mt-5">
                      <h5>Онлайн</h5>
                      <h6>
                        {" "}
                        <i className="fa-solid fa-clock"></i> старт: 29 января
                      </h6>
                    </div>
                    <div className="card-bottom d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="text-white fw-normal m-0">
                          {" "}
                          От 9 500 ₽/месяц
                        </h5>
                        <h6 className="text-secondary fw-semibold m-0">
                          или сразу 275 000₽
                        </h6>
                      </div>
                      <button className="btn btn-gold">подробнее</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="js-course">
          <div className="container">
            <div
              className="row rounded-4 py-5 px-3 my-5"
              style={{ background: "rgb(248, 246, 252)" }}
            >
              <div className="col-lg-6">
                <h2 className="text-primary font-primary">
                  Можно попробовать сейчас, а выбрать формат Буткемпа потом
                </h2>
                <img
                  src={Jscourse}
                  alt=""
                  className="w-100 py-4  d-none d-lg-block"
                />
              </div>
              <div className="col-lg-6">
                <div className="card h-100 border-0 rounded-4 p-4">
                  <p>
                    Пройдите короткий курс занятий с ментором, чтобы начать
                    программировать и почувствовать атмосферу Буткемпа
                  </p>
                  <div className="d-flex mt-3 gap-4 align-items-center">
                    <h4 className="font-primary m-0 fw-bold">
                      Основы JavaScript•Онлайн
                    </h4>
                    <span className="card-badge d-none d-md-block px-3 rounded-3 text-secondary py-1">
                      с нуля
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <i className="fa-solid fa-calendar-days fs-5"></i>
                    <p className="m-0 ">2 недели</p>
                  </div>
                  <ul className="p-0 mt-5">
                    <li className="d-flex gap-3 mb-3  align-items-center">
                      <div className="check-icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span>10 живых занятий с ментором</span>
                    </li>
                    <li className="d-flex gap-3 mb-3  align-items-center">
                      <div className="check-icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span>
                        Индивидуальная обратная связь по задачам от ментора
                      </span>
                    </li>
                    <li className="d-flex gap-3 mb-3  align-items-center">
                      <div className="check-icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span>Поддержка в закрытом чате разработчиков</span>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <i className="fa-solid fa-clock fs-5"></i>
                    <p className="m-0 ">старт: 08 января</p>
                  </div>
                  <div className="d-flex align-items-center  mt-4 justify-content-between">
                    <h5 className="m-0">15 000 ₽</h5>
                    <button className="btn btn-gold mt-0 px-4">Купить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </div>
    </Layout2>
  );
};

export default Services;

import { Navigation } from "swiper/modules";
import Layout2 from "../../../Layout/Layout2";
import "./ServicesDetail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Jscourse from "../../../assets/teamwork.jpg";
// import ExpessJs from "../../../assets/expressJs.webp";
// import Nodejs from "../../../assets/nodejs.webp";
// import TS from "../../../assets/ts.webp";
// import Postgress from "../../../assets/postgresql.webp";
// import Jest from "../../../assets/jest.webp";
// import React from "../../../assets/react.webp";
// import GitHub from "../../../assets/githubcat.webp";
// import Git from "../../../assets/git.webp";
// import Redux from "../../../assets/redux.webp";

import TrainingCard1 from "../../../assets/online.webp";
import TrainingCard2 from "../../../assets/spb.webp";
import TrainingCard3 from "../../../assets/msk.webp";
import ApplicationModal from "../../../components/Application-modal/Application-modal";
import { useEffect } from "react";

// const Tools = [
//   ExpessJs,
//   Nodejs,
//   TS,
//   Postgress,
//   Jest,
//   React,
//   GitHub,
//   Git,
//   Redux,
// ];
const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <div className="services-detail">
        <main>
          <div className="container " style={{ zIndex: "999" }}>
            <div className="row ">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="services-title font-primary  text-white text-uppercase">
                  Web-Developement
                </h1>
                <ApplicationModal btn={"Sign up"} />
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
                    Current program: HTML, CSS, TypeScript, JavaScript, Node js,
                    Express, React, Redux, PostgreSQL, Git
                  </span>
                </div>
                <div className="col-lg-3 d-flex gap-2 align-items-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span className="card-desc">
                    Live lectures and code analysis by a mentor
                  </span>
                </div>
                <div className="col-lg-3 d-flex gap-2 align-items-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <span className="card-desc">
                    Job placement assistance: 40 hours with career coaches
                  </span>
                </div>
                <div className="col-lg-3 d-flex gap-2 align-items-start">
                  <div className="icon-box p-3 ">
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <span className="card-desc">
                    Diploma of professional retraining established sample
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="training-program">
          <div className="container py-5">
            <h2 className="title font-primary mt-3">
              Training program <br /> in Web Development
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
                          Phase 0
                        </h4>
                      </div>
                      <span className="">1-3 week</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Terminal, Git, HTML/CSS basics, JavaScript basics. Takes
                      place online, 6-8 hours a day.
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
                          Phase 1
                        </h4>
                      </div>
                      <span className="">4-6 week</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Vanilla JavaScript, testing, data structures, algorithms.
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
                          Phase 2
                        </h4>
                      </div>
                      <span className="">7-9 week</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Backend (Node.js, Express), databases. Two projects for
                      portfolio. Deployment training on the Selectel platform.
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
                          Phase 3
                        </h4>
                      </div>
                      <span className="">10-12 week</span>
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
                          Career week
                        </h4>
                      </div>
                      <span className="">5 day</span>
                    </div>
                    <p className="text-secondary mt-3">
                      Job search strategy, resume writing, preparation for
                      interviews.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="my-5 d-flex flex-column-reverse align-items-center flex-md-row justify-content-between">
                <ApplicationModal btn={"Get detailed program"} />
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
        {/* <section className="tools py-4 mb-5">
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
        </section> */}
        <section className="bootcamp-content py-4">
          <div className="container">
            <h2 className="font-primary title text-lg-left pb-lg-3 m-0">
              How does the bootcamp work?
            </h2>
            <div className="row mt-4">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="font-primary text-primary">
                      What does the training consist of
                    </h4>
                    <ul className="p-0 mt-4">
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Live lectures and feedback from the instructor
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Code reviews: code evaluation by the instructor
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Working on projects from a client
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  ">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Interview preparation with a career coach
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="font-primary text-primary">
                      What does the training consist of
                    </h4>
                    <ul className="p-0 mt-4">
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Profession: JavaScript, TypeScript Developer
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          GitHub Portfolio: 2 group, 1 individual, and 10
                          educational projects
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  align-items-center">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Diploma of professional retraining of the established
                          sample
                        </span>
                      </li>
                      <li className="d-flex gap-3 mb-3  ">
                        <div className="check-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <span className="text-secondary">
                          Access to a private community of developers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block"></div>
            </div>
          </div>
        </section>

        <section className="py-4 mb-5 training-format">
          <div className="container">
            <h2 className="font-primary title text-lg-left pb-lg-3 m-0">
              Training Format
            </h2>
            <p className="text-secondary">
              The training program is the same in all formats.
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
                      <span className="">Web Developer</span>
                      <div className="d-flex gap-2 text-light align-items-center">
                        {" "}
                        <i className="fa-regular fa-calendar-days"></i> 12 weeks
                      </div>
                    </div>
                    <div className="card-body p-0 text-white mt-5">
                      <h5>Online</h5>
                      <h6>
                        {" "}
                        <i className="fa-solid fa-clock"></i> Start: January 29
                      </h6>
                    </div>
                    <div className="card-bottom d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="text-white fw-normal m-0">
                          {" "}
                          From 9,500 ₽/month
                        </h5>
                        <h6 className="text-secondary fw-semibold m-0">
                          or 275,000₽ upfront
                        </h6>
                      </div>
                      <button className="btn btn-gold">Learn More</button>
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
                      <span className="">Web Developer</span>
                      <div className="d-flex gap-2 text-light align-items-center">
                        {" "}
                        <i className="fa-regular fa-calendar-days"></i> 12 weeks
                      </div>
                    </div>
                    <div className="card-body p-0 text-white mt-5">
                      <h5>Online</h5>
                      <h6>
                        {" "}
                        <i className="fa-solid fa-clock"></i> Start: January 29
                      </h6>
                    </div>
                    <div className="card-bottom d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="text-white fw-normal m-0">
                          {" "}
                          From 9,500 ₽/month
                        </h5>
                        <h6 className="text-secondary fw-semibold m-0">
                          or 275,000₽ upfront
                        </h6>
                      </div>
                      <button className="btn btn-gold">Learn More</button>
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
                      <span className="">Web Developer</span>
                      <div className="d-flex gap-2 text-light align-items-center">
                        {" "}
                        <i className="fa-regular fa-calendar-days"></i> 12 weeks
                      </div>
                    </div>
                    <div className="card-body p-0 text-white mt-5">
                      <h5>Online</h5>
                      <h6>
                        {" "}
                        <i className="fa-solid fa-clock"></i> Start: January 29
                      </h6>
                    </div>
                    <div className="card-bottom d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="text-white fw-normal m-0">
                          {" "}
                          From 9,500 ₽/month
                        </h5>
                        <h6 className="text-secondary fw-semibold m-0">
                          or 275,000₽ upfront
                        </h6>
                      </div>
                      <button className="btn btn-gold">Learn More</button>
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
                  You can try now and choose the Bootcamp format later
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
                    Take a short course with a mentor to start programming and
                    feel the Bootcamp atmosphere
                  </p>
                  <div className="d-flex mt-3 gap-4 align-items-center">
                    <h4 className="font-primary m-0 fw-bold">
                      JavaScript Basics•Online
                    </h4>
                    <span className="card-badge d-none d-md-block px-3 rounded-3 text-secondary py-1">
                      from scratch
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <i className="fa-solid fa-calendar-days fs-5"></i>
                    <p className="m-0 ">2 weeks</p>
                  </div>
                  <ul className="p-0 mt-5">
                    <li className="d-flex gap-3 mb-3  align-items-center">
                      <div className="check-icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span>10 live sessions with a mentor</span>
                    </li>
                    <li className="d-flex gap-3 mb-3  align-items-center">
                      <div className="check-icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span>Individual feedback on tasks from a mentor</span>
                    </li>
                    <li className="d-flex gap-3 mb-3  align-items-center">
                      <div className="check-icon">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span>Support in private developer chat</span>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <i className="fa-solid fa-clock fs-5"></i>
                    <p className="m-0 ">start: January 08</p>
                  </div>
                  <div className="d-flex align-items-center  mt-4 justify-content-between">
                    <h5 className="m-0">15 000 $</h5>
                    <button className="btn btn-gold mt-0 px-4">Buy</button>
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
                Ready to answer your questions
              </h2>

              <ApplicationModal btn={"Submit your application"} />
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default Services;

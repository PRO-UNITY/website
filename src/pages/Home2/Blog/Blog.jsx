import { Navigation } from "swiper/modules";
import Layout2 from "../../../Layout/Layout2";
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout2>
      <div className="blog py-4">
        <div className="container">
          <h2 className="blog-title font-primary">Блог Эльбрус Буткемп</h2>
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
                nextEl: ".swiper-button-next-blog",
                prevEl: ".swiper-button-prev-blog",
              }}
              modules={[Navigation]}
              spaceBetween={25}
            >
              <SwiperSlide>
                <div className="slider-card">
                  <div className="card-head position-relative">
                    <Link to={""} className="btn">
                      Подготовка
                    </Link>
                    <img
                      src="https://elbrusboot.camp/blog/content/images/size/w750/2023/12/-------------IT--1-.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Нетворкинг в IT
                    </h5>
                    <span className="text-secondary font-primary">
                      25 дек. 2023 г.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-card">
                  <div className="card-head position-relative">
                    <Link to={""} className="btn">
                      Подготовка
                    </Link>
                    <img
                      src="https://elbrusboot.camp/blog/content/images/size/w750/2023/12/-------------IT--1-.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Нетворкинг в IT
                    </h5>
                    <span className="text-secondary font-primary">
                      25 дек. 2023 г.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-card">
                  <div className="card-head position-relative">
                    <Link to={""} className="btn">
                      Подготовка
                    </Link>
                    <img
                      src="https://elbrusboot.camp/blog/content/images/size/w750/2023/12/-------------IT--1-.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Нетворкинг в IT
                    </h5>
                    <span className="text-secondary font-primary">
                      25 дек. 2023 г.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-card">
                  <div className="card-head position-relative">
                    <Link to={""} className="btn">
                      Подготовка
                    </Link>
                    <img
                      src="https://elbrusboot.camp/blog/content/images/size/w750/2023/12/-------------IT--1-.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Нетворкинг в IT
                    </h5>
                    <span className="text-secondary font-primary">
                      25 дек. 2023 г.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-card">
                  <div className="card-head position-relative">
                    <Link to={""} className="btn">
                      Подготовка
                    </Link>
                    <img
                      src="https://elbrusboot.camp/blog/content/images/size/w750/2023/12/-------------IT--1-.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Нетворкинг в IT
                    </h5>
                    <span className="text-secondary font-primary">
                      25 дек. 2023 г.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-card">
                  <div className="card-head position-relative">
                    <Link to={""} className="btn">
                      Подготовка
                    </Link>
                    <img
                      src="https://elbrusboot.camp/blog/content/images/size/w750/2023/12/-------------IT--1-.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Нетворкинг в IT
                    </h5>
                    <span className="text-secondary font-primary">
                      25 дек. 2023 г.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="mb-5">
              <div className="blog-slider-navigation">
                <button className="  swiper-button-prev-blog">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="  swiper-button-next-blog">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="blog-card">
                <div className="card-head">
                  <img
                    src="https://elbrusboot.camp/blog/content/images/size/w960/2023/12/-------------IT--1-.png"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="card-content px-lg-5 mx-lg-5 py-5">
                  <p>
                    <span className="text-secondary">
                      {" "}
                      25 ДЕК. 2023 Г. / ВРЕМЯ ЧТЕНИЯ: ОКОЛО 4 МИН. /
                    </span>{" "}
                    <button className="btn"> Подготовка</button>
                  </p>
                  <h2 className="font-primary text-primary fw-bold">
                    Нетворкинг в IT
                  </h2>
                  <p>
                    Что такое нетворкинг и как им пользоваться? Делимся
                    инструкциями для приобретения полезных связей и
                    рассказываем, что предлагает Elbrus Bootcamp. Нетворкинг —
                    создание и поддержание отношений с людьми в профессиональной
                    сфере. Широкий круг знакомств даст
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination position-relative d-flex align-items-center justify-content-center">
            <div className="border py-2 px-4 rounded-pill fs-4 d-none d-md-block">
              <span className="font-primary">1 из 27</span>
            </div>
            <i className="fa-solid fa-arrow-right text-primary fs-5 position-absolute end-0 cursor"></i>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Blog;

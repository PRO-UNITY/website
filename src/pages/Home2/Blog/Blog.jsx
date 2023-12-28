import { Navigation } from "swiper/modules";
import Layout2 from "../../../Layout/Layout2";
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import BlogCard from "../../../assets/grouplider2.jpg";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <div className="blog py-4">
        <div className="container">
          <h2 className="blog-title font-primary">ProUnity Bootcamp Blog</h2>
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
                      Preparation
                    </Link>
                    <img src={BlogCard} alt="" className="w-100" />
                  </div>
                  <div className="card-content mt-3">
                    <h5 className="font-primary text-primary fw-semibold">
                      Networking in IT
                    </h5>
                    <span className="text-secondary font-primary">
                      Dec 25, 2023
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* ... Repeat SwiperSlide for other blog posts */}
            </Swiper>
            <div className="mb-5">
              <div className="blog-slider-navigation">
                <button className="swiper-button-prev-blog">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="swiper-button-next-blog">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="blog-card">
                <div className="card-head">
                  <img src={BlogCard} alt="" className="w-100" />
                </div>
                <div className="card-content px-lg-5 mx-lg-5 py-5">
                  <p>
                    <span className="text-secondary">
                      {" "}
                      Dec 25, 2023 / Reading Time: About 4 min. /
                    </span>{" "}
                    <button className="btn">Preparation</button>
                  </p>
                  <h2 className="font-primary text-primary fw-bold">
                    Networking in IT
                  </h2>
                  <p>
                    What is networking and how to use it? We share instructions
                    for building useful connections and talk about what Elbrus
                    Bootcamp offers. Networking is creating and maintaining
                    relationships with people in the professional field. A wide
                    circle of acquaintances will provide
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="pagination position-relative d-flex align-items-center justify-content-center">
            <div className="border py-2 px-4 rounded-pill fs-4 d-none d-md-block">
              <span className="font-primary">1 of 27</span>
            </div>
            <i className="fa-solid fa-arrow-right text-primary fs-5 position-absolute end-0 cursor"></i>
          </div> */}
        </div>
      </div>
    </Layout2>
  );
};

export default Blog;

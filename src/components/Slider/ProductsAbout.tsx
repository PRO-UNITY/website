import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductsAbout = ({ aboutSlider }) => {
  return (
    <Swiper
      className="mySwiper"
      loop
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {aboutSlider.map((item, i) => (
        <SwiperSlide key={i}>
          <img src={item} alt="about-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsAbout;

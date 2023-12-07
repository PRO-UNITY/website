import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { HomeSliderImage } from "../../constants";
import "./HomeSlider.css";

export default function HomeSwipper() {
  return (
    <div className="home-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4500,
        }}
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper"
      >
        {HomeSliderImage.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <img src={item.img} alt="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="navigationBox">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

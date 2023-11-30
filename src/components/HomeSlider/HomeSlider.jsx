import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HomeSliderImage } from "../../constants";
import "./HomeSlider.css";

export default function HomeSwipper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {HomeSliderImage.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <img src={item.img} alt="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

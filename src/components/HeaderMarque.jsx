import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HeaderMarque() {
  return (
    <div className="header-marque">
      <Swiper
        modules={[Autoplay]}        
        centeredSlides={true}
        speed={2500} // smoother marquee feel
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView="auto"
        allowTouchMove={false}
      >
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>                
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>
        <SwiperSlide>Website currently in development</SwiperSlide>
        <SwiperSlide>
          <span className="dot"></span>
        </SwiperSlide>                
      </Swiper>
    </div>
  );
}

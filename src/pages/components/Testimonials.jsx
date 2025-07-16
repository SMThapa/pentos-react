import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const testimonials = [
  {
    name: "Cameron Williamson",
    position: "CEO, ISHKON",
    image: "/14.jpg",
    comment:
      "Working with Pentos is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination.",
    rating: 5,
  },
  {
    name: "Jane Doe",
    position: "Founder, BrightTech",
    image: "/14.jpg",
    comment:
      "Their team was extremely professional and delivered beyond our expectations. Highly recommend them for any creative projects.",
    rating: 5,
  },
  {
    name: "John Smith",
    position: "CTO, FutureSoft",
    image: "/14.jpg",
    comment:
      "Exceptional work ethic and creativity. We loved the process and the results. Definitely partnering again.",
    rating: 5,
  },
  {
    name: "Cameron Williamson",
    position: "CEO, ISHKON",
    image: "/14.jpg",
    comment:
      "Working with Pentos is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination.",
    rating: 5,
  },
  {
    name: "Jane Doe",
    position: "Founder, BrightTech",
    image: "/14.jpg",
    comment:
      "Their team was extremely professional and delivered beyond our expectations. Highly recommend them for any creative projects.",
    rating: 5,
  },
  {
    name: "John Smith",
    position: "CTO, FutureSoft",
    image: "/14.jpg",
    comment:
      "Exceptional work ethic and creativity. We loved the process and the results. Definitely partnering again.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className="title">Testimonials</div>
      <div className="description">What our clients say</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}      
        loop={testimonials.length >= 3}        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >        
        {
          testimonials.map((item, index)=>(
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="profile">
                  <img src={item.image} alt={item.name} />
                  <div className="name">
                    {item.name} <br />
                    <span>{item.position}</span>
                  </div>
                </div>
                <div className="rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <img key={i} src="/star.png" alt="star" />
                  ))}
                </div>
                <div className="comment">
                  <p>{item.comment}</p>
                </div>
              </div>
            </SwiperSlide> 
          ))
        }               
      </Swiper>
    </div>
  );
};

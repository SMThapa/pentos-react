import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const ProductSingle = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    "/products/BMW M3 GTR.785.jpg",
    "/products/BMW M3 GTR.787.jpg",
    "/products/BMW M3 GTRR.jpg",
    "/products/bmw-1.jpg"
  ];

  return (
    <section>
      <div className="page-products page-width">
        <div className="single-product-contents">
          <div className="section-left">
            <Swiper
              spaceBetween={10}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`BMW ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-action-buttons">
              <div
                className="left swiper-button-prev"
                ref={prevRef}
              >
                <img src="/left.png" alt="left-icon" />
              </div>
              <div
                className="right swiper-button-next"
                ref={nextRef}
              >
                <img src="/right.png" alt="right-icon" />
              </div>
            </div>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`BMW ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="section-right">
            <h2 className="proudct-title">Product Title</h2>
            <div className="model-no">
              <span>Model No:</span> KB2911002-MBK
            </div>
            <div className="product-price">
              <span>Price:</span> Rs. 12,000/-
            </div>
            <div className="btn-2">
              Enquire Now
              <span>
                <img
                  src="/up-right-arrow2.png"
                  alt="icon"
                  className="first"
                />
                <img
                  src="/up-right-arrow2.png"
                  alt="icon"
                  className="second"
                />
              </span>
            </div>
            <div className="product-description">
              <p>
                <span>Product Details:</span>
              </p>
              <p>
                Hay muchas variaciones de los pasajes de Lorem Ipsum
                disponibles, pero la mayoría sufrió alteraciones en
                alguna manera, ya sea porque se le agregó humor, o
                palabras aleatorias.
              </p>
              <p>
                Todos los generadores de Lorem Ipsum que se encuentran
                en Internet tienden a repetir trozos predefinidos
                cuando sea necesario.
              </p>
              <p>
                Este Lorem Ipsum generado siempre estará libre de
                repeticiones, humor agregado o palabras no
                características del lenguaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

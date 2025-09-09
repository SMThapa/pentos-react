import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import axios from 'axios';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link, useParams } from 'react-router-dom';

export const ProductSingle = () => {
  const url = import.meta.env.VITE_API_BASEURL; 
  const [theProdct, setProduct] = useState({})

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const {prod}= useParams()
  useEffect(()=>{
    async function getProducts(){
      try{
        const res = await axios.get(`${url}/products/api.php`)                                
        console.log(res.data.filter(obj=>obj.model_number== prod)[0])
        setProduct(res.data.filter(obj=>obj.model_number== prod)[0])
      }catch(err){
        console.log(err)
      }
    }

    getProducts()
  },[prod])

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
              {theProdct?.images?.map((src, index) => (
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
              {theProdct?.images?.map((src, index) => (
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
            <h2 className="proudct-title">{theProdct.name}</h2>
            <div className="model-no">
              <span>Model No:</span> {theProdct.model_number}
            </div>
            {/* <div className="product-price">
              <span>Price:</span> Rs. 12,000/-
            </div> */}
            <Link to='/services' state={{prod}}>
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
            </Link>
            <div className="product-description">
              <p>
                <span>Product Details:</span>
              </p>
              <div className="card-description" dangerouslySetInnerHTML={{__html: theProdct.description}} />                                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

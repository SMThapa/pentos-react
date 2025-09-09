import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormattedDate } from "../../hooks/useFormattedDate";


const BlogCard = ({ item }) => {
  const formattedDate = useFormattedDate(item.created_at);

  return (
    <div className="blog-card">
      <Link to={`/blogs/${item.id}`} className="center-btn">
        View <img src='/top-right.png' alt="icon" />
      </Link>
      <div className="tags">
        <span>
          <img src="/supermarket.png" alt="icon" />
          Business
        </span>
        <span>
          <img src="/calendar.png" alt="calendar" />
          {formattedDate}
        </span>
      </div>
      <div
        className="card-title"
        dangerouslySetInnerHTML={{ __html: item.short_description }}
      />
      <img src={item.banner_image} alt={item.title || "blog image"} />
    </div>
  );
};

export const Blogs = ({title, description}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const url = import.meta.env.VITE_API_BASEURL;
  const [blogPosts, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url + "/blogs/api.php");        
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="blogs-section">
      <div className="title">{title}</div>
      <div className="description">{description}</div>

      {/* Custom Navigation Buttons */}
      <div className="swiper-action-buttons">
        <div ref={prevRef} className="left swiper-button-prev">
          <img src="/left.png" alt="left-icon" />
        </div>
        <div ref={nextRef} className="right swiper-button-next">
          <img src="/right.png" alt="right-icon" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}        
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Connect custom buttons after initialization
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 4000 }}
        loop={blogPosts?.length > 4}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="blog-slider"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <BlogCard key={index} item={post} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to="/blog/1">
        <button className="btn-1">
          View All <img src="/top-right.png" alt="icon" />
        </button>
      </Link>
    </div>
  );
};

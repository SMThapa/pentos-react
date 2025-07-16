import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const blogPosts = [
  {
    title: "Top 5 Tips for First-Time RC Pilots.",
    date: "Oct 25, 2024",
    category: "Business",
    image: "/blog/rc-plane.jpg",
    link: "./pages/blog-single.html",
  },
  {
    title: "RC Cars vs. RC Trucks: Which One's Right for You?",
    date: "Oct 25, 2024",
    category: "Business",
    image: "/assets/blog/truck.jpg",
    link: "./pages/blog-single.html",
  },
  {
    title: "How to Maximize Battery Life in Your RC Toys.",
    date: "Oct 25, 2024",
    category: "Business",
    image: "/blog/battery.jpg",
    link: "./pages/blog-single.html",
  },
  {
    title: "Top 5 Tips for First-Time RC Pilots.",
    date: "Oct 25, 2024",
    category: "Business",
    image: "/blog/rc-plane.jpg",
    link: "./pages/blog-single.html",
  },
  {
    title: "RC Cars vs. RC Trucks: Which One's Right for You?",
    date: "Oct 25, 2024",
    category: "Business",
    image: "/assets/blog/truck.jpg",
    link: "./pages/blog-single.html",
  },
  {
    title: "How to Maximize Battery Life in Your RC Toys.",
    date: "Oct 25, 2024",
    category: "Business",
    image: "/blog/battery.jpg",
    link: "./pages/blog-single.html",
  },
];

export const Blogs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="blogs-section">
      <div className="title">Blog & Articles</div>
      <div className="description">Latest Articles</div>

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
        slidesPerView={1}        
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
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="blog-slider"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">
              <a href={post.link} className="center-btn">
                View <img src="/top-right.png" alt="icon" />
              </a>
              <div className="tags">
                <span>
                  <img src="/supermarket.png" alt="icon" />
                  {post.category}
                </span>
                <span>
                  <img src="/calendar.png" alt="icon" />
                  {post.date}
                </span>
              </div>
              <div className="card-title">{post.title}</div>
              <img src={post.image} alt="blog" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a href="./pages/blog.html">
        <button className="btn-1">
          View All <img src="/top-right.png" alt="icon" />
        </button>
      </a>
    </div>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormattedDate } from "../hooks/useFormattedDate";

// Blog Card Component
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

// Main Blog Section
export const Blog = () => {
  const url = import.meta.env.VITE_API_BASEURL;
  const [blogs, setBlogs] = useState([]);

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
    <section>
      <div className="page-blog page-width">
        <div className="blogs-section">
          <div className="title">Blog & Articles</div>
          <div className="description">Latest Articles</div>

          <div className="blog-slider">
            {blogs.length > 0 &&
              blogs.map((item, index) => <BlogCard key={index} item={item} />)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

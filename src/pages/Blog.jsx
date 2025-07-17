import { Link } from "react-router-dom"
export const Blog = () => {
  return (
      <section>
        <div className="page-blog page-width">
            <div className="blogs-section">
                <div className="title">Blog & Articles</div>
                <div className="description">Latest Articles</div>

                <div className="blog-slider">                
                    <div className="blog-card">
                        <Link to="/blogs/1" className="center-btn">
                            View <img src="/top-right.png" alt="icon" />
                        </Link>
                        <div className="tags">
                            <span>``
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <div className="card-title">Top 5 Tips for First-Time RC Pilots.</div>
                        <img src="/blog/rc-plane.jpg" alt="" />
                    </div>
                    <div className="blog-card">
                        <Link to="/blogs/1" className="center-btn">
                            View <img src="/top-right.png" alt="icon" />
                        </Link>
                        <div className="tags">
                            <span>
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <div className="card-title">RC Cars vs. RC Trucks: Which One's Right for You?</div>
                        <img src="/assets/blog/truck.jpg" alt="" />
                    </div>
                    <div className="blog-card">
                        <Link to="/blogs/1" className="center-btn">
                            View <img src="/top-right.png" alt="icon" />
                        </Link>
                        <div className="tags">
                            <span>
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <div className="card-title">How to Maximize Battery Life in Your RC Toys.</div>
                        <img src="/blog/battery.jpg" alt="" />
                    </div>
                    <div className="blog-card">
                        <Link to="/blogs/1" className="center-btn">
                            View <img src="/top-right.png" alt="icon" />
                        </Link>
                        <div className="tags">
                            <span>
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <div className="card-title">How to Maximize Battery Life in Your RC Toys.</div>
                        <img src="/blog/battery.jpg" alt="" />
                    </div> 
                    <div className="blog-card">
                        <Link to="/blogs/1" className="center-btn">
                            View <img src="/top-right.png" alt="icon" />
                        </Link>
                        <div className="tags">
                            <span>
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <div className="card-title">Top 5 Tips for First-Time RC Pilots.</div>
                        <img src="/blog/rc-plane.jpg" alt="" />
                    </div>    
                    <div className="blog-card">
                        <Link to="/blogs/1" className="center-btn">
                            View <img src="/top-right.png" alt="icon" />
                        </Link>
                        <div className="tags">
                            <span>
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <div className="card-title">RC Cars vs. RC Trucks: Which One's Right for You?</div>
                        <img src="/assets/blog/truck.jpg" alt="" />
                    </div>                             
                </div>                        
            </div>
        </div>
    </section>
  )
}

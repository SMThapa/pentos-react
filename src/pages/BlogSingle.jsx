import React, { useEffect, useState } from 'react'
import { Blogs } from './components/Blogs'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import { useFormattedDate } from '../hooks/useFormattedDate'

export const BlogSingle = () => {

    const [theBlog, setBlog] = useState({})
    const url = import.meta.env.VITE_API_BASEURL;    
    const {blog} = useParams()
    const {pathname} = useLocation()
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url + "/blogs/api.php");        
                setBlog(res.data.find(obj => obj.id == Number(blog)));                
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [url, pathname]);

    const date = useFormattedDate(theBlog?.created_at)

  return (
        <section>
        <div className="page-blog page-width blog-single">
            <div className="single-blog">
                <div className="blog-banner">
                    {/* <img src="/blog/rc-plane.jpg" alt="banner" /> */}
                    <img src={theBlog?.banner_image} alt="" />
                </div>
                <div className="blog-divide">
                    <div className="blog-contents">
                        <div className="tags">
                            {/* <span>
                                <img src="/supermarket.png" alt="icon" />
                                Business
                            </span> */}
                            <span>
                                <img src="/calendar.png" alt="" />
                                {date}
                            </span>
                        </div>
                        <div
                            className="blog-title"
                            dangerouslySetInnerHTML={{ __html: theBlog.short_description }}
                        />
                        <hr/>
                        <div className="blog-text-content">
                            <div                                
                                dangerouslySetInnerHTML={{ __html: theBlog.short_description }}
                            />
                            {/* <p>From there, we work closely with you to define your brand’s mission, vision, and values—the core principles that guide your business and inspire everything you do. With this strong foundation, we create a brand strategy that not only sets you apart from the competition but also creates a meaningful connection with your audience. At Pentos, we help you bring your brand’s story to life, shaping an identity that not only captures attention but also resonates with people on a deeper level.</p>
                            <p>Through thorough user research, wireframing, prototyping, and visual design, we develop personalized strategies that align with your business goals. Our designs are focused on improving user experience while delivering measurable outcomes to boost your conversion rates.</p>
                            <p>We believe in the power of clear, strategic thinking. By collaborating closely with you, we define your brand’s mission, vision, and values—providing a strong foundation for all your future branding efforts.</p>

                            <h2>Our Success Journey We can Provide</h2>
                            <h3>1. Increased Online Visibility</h3>
                            <ul>
                                <li><div className="dot"></div> Enhance your presence on search engines and social media platforms, making it easier for potential customers to find you.</li>
                                <li><div className="dot"></div> We focus on creating intuitive and engaging digital experiences that drive user satisfaction and business growth.</li>
                            </ul>                         

                            <h3>2. Increased Online Visibility</h3>
                            <ul>
                                <li><div className="dot"></div> Enhance your presence on search engines and social media platforms, making it easier for potential customers to find you.</li>
                                <li><div className="dot"></div> We focus on creating intuitive and engaging digital experiences that drive user satisfaction and business growth.</li>
                            </ul>          

                            <h3>3. Increased Online Visibility</h3>
                            <ul>
                                <li><div className="dot"></div> Enhance your presence on search engines and social media platforms, making it easier for potential customers to find you.</li>
                                <li><div className="dot"></div> We focus on creating intuitive and engaging digital experiences that drive user satisfaction and business growth.</li>
                            </ul>

                            <p>A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.</p> */}
                        </div>
                    </div>                    
                </div>
            </div>

            <div className="related-blog">
                     
            </div>
            <Blogs title={'related blogs'} description={'Latest Articles'}/>  
        </div>
    </section>
  )
}

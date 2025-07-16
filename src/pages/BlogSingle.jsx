import React from 'react'
import { Blogs } from './components/Blogs'

export const BlogSingle = () => {
  return (
        <section>
        <div class="page-blog page-width blog-single">
            <div class="single-blog">
                <div class="blog-banner">
                    <img src="../assets/blog/rc-plane.jpg" alt="banner" />
                </div>
                <div class="blog-divide">
                    <div class="blog-contents">
                        <div class="tags">
                            <span>
                                <img src="../assets/supermarket.png" alt="icon" />
                                Business
                            </span>
                            <span>
                                <img src="../assets/calendar.png" alt="" />
                                Oct 25, 2024
                            </span>
                        </div>
                        <h1 class="blog-title">Top 5 Tips for First-Time RC Pilots.</h1>
                        <hr/>
                        <div class="blog-text-content">
                            <p>From there, we work closely with you to define your brand’s mission, vision, and values—the core principles that guide your business and inspire everything you do. With this strong foundation, we create a brand strategy that not only sets you apart from the competition but also creates a meaningful connection with your audience. At Pentos, we help you bring your brand’s story to life, shaping an identity that not only captures attention but also resonates with people on a deeper level.</p>
                            <p>Through thorough user research, wireframing, prototyping, and visual design, we develop personalized strategies that align with your business goals. Our designs are focused on improving user experience while delivering measurable outcomes to boost your conversion rates.</p>
                            <p>We believe in the power of clear, strategic thinking. By collaborating closely with you, we define your brand’s mission, vision, and values—providing a strong foundation for all your future branding efforts.</p>

                            <h2>Our Success Journey We can Provide</h2>
                            <h3>1. Increased Online Visibility</h3>
                            <ul>
                                <li><div class="dot"></div> Enhance your presence on search engines and social media platforms, making it easier for potential customers to find you.</li>
                                <li><div class="dot"></div> We focus on creating intuitive and engaging digital experiences that drive user satisfaction and business growth.</li>
                            </ul>                         

                            <h3>2. Increased Online Visibility</h3>
                            <ul>
                                <li><div class="dot"></div> Enhance your presence on search engines and social media platforms, making it easier for potential customers to find you.</li>
                                <li><div class="dot"></div> We focus on creating intuitive and engaging digital experiences that drive user satisfaction and business growth.</li>
                            </ul>          

                            <h3>3. Increased Online Visibility</h3>
                            <ul>
                                <li><div class="dot"></div> Enhance your presence on search engines and social media platforms, making it easier for potential customers to find you.</li>
                                <li><div class="dot"></div> We focus on creating intuitive and engaging digital experiences that drive user satisfaction and business growth.</li>
                            </ul>

                            <p>A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.</p>
                        </div>
                    </div>                    
                </div>
            </div>

            <div class="related-blog">
                     
            </div>
            <Blogs title={'related blogs'} description={'Latest Articles'}/>  
        </div>
    </section>
  )
}

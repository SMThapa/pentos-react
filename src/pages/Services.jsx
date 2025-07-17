import React from 'react'

export const Services = () => {
  return (
    <section>        
        <div className="page-services page-width">
            <div className="service-banner">
                <h1 className="banner-title">Advanced Prototyping & <br/>Product Design</h1>
                <div className="banner-description">From concept to production - we provide industrial-grade manufacturing solutions and engineering expertise to bring your ideas to life.</div>
                <div className="btn-2">Get Your Free Quote Today
                    <span>
                        <img src="/up-right-arrow2.png" alt="icon" className="first" />
                        <img src="/up-right-arrow2.png" alt="icon" className="second" />
                    </span>
                </div>
            </div>
            <div className="title">What we can do for you</div>

            <div className="services-contents">
                <div className="left-content">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="file">Upload File</label>
                            <input type="file" id="file" name="file" placeholder="Enter your name."  autoComplete="off" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email."  autoComplete="off" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" id="phone" name="phone" placeholder="Enter you phone."  autoComplete="off" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="phone">Message</label>
                            <textarea name="message" id="message" placeholder="Say what's in your mind."></textarea>
                        </div> 
                        <button className="btn-2" type="submit">Submit 
                            <span>
                                <img src="/up-right-arrow2.png" alt="icon" className="first" />
                                <img src="/up-right-arrow2.png" alt="icon" className="second" />
                            </span>
                        </button>
                    </form>
                </div>
                <div className="right-content">
                    <div className="right-content-group">
                        <div className="title2">Precision 3D Printing & Manufacturing</div>
                        <div className="description2">From rapid prototypes to production-grade parts, we bridge the gap between concept and reality with advanced additive manufacturing technologies.</div>
                        <div className="content-card">
                            <div className="service-image">    
                                <img src="/public/icons/sugar-cubes.png" alt="" />                                                         
                            </div>
                            <div className="service-content">
                                <h4 className="card-title">DLP 3D Printing</h4>
                                <p>Our industrial-grade DLP printers create exceptionally smooth surfaces with layer resolutions of 10–50 microns - finer than a human hair. Perfect for:</p>
                                <ul>
                                    <li>Investment casting patterns with zero post-processing</li>
                                    <li>Medical and dental models requiring extreme precision</li>
                                    <li>Detailed architectural models with intricate features</li>
                                </ul>
                                <p className="tech-specs">Materials: Engineering resins (heat-resistant, flexible, biocompatible options available)</p>
                            </div>
                        </div>
                        <div className="content-card">
                            <div className="service-image"> 
                                <img src="/public/icons/settings (1).png" alt="" />                                                                                                                     
                            </div>
                            <div className="service-content">
                                <h4 className="card-title">FDM 3D Printing</h4>
                                <p>The workhorse of functional prototyping, offering unbeatable value for mechanical testing and design validation:</p>
                                <ul>
                                    <li>Investment casting patterns with zero post-processing</li>
                                    <li>Medical and dental models requiring extreme precision</li>
                                    <li>Detailed architectural models with intricate features</li>
                                </ul>
                                <p className="tech-specs">Materials: Engineering resins (heat-resistant, flexible, biocompatible options available)</p>
                            </div>
                        </div>
                        <div className="content-card">
                            <div className="service-image">                                                             
                                <img src="/public/icons/industry.png" alt="" />                                                         
                            </div>
                            <div className="service-content">
                                <h4 className="card-title">Silicone Molding & Vacuum Casting</h4>
                                <p>Bridge the gap between prototyping and mass production with our advanced molding solutions:</p>
                                <ul>
                                    <li>Production-grade urethane parts that mimic final materials</li>
                                    <li>50+ parts from a single mold for small batch production</li>
                                    <li>Clear, flexible, or rigid material options</li>
                                </ul>
                                <p className="tech-specs"><strong>Perfect for:</strong> Market testing with functional samples, pre-production validation, and short-run manufacturing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content-group">
                        <div className="title2">Engineering & Design Solutions</div>
                        <div className="description2">We transform good ideas into manufacturable products through cutting-edge engineering and user-centered design.</div>
                        <div className="content-card">
                            <div className="service-image"> 
                                <img src="/public/icons/processor.png" alt="" />                                                                                                                     
                            </div>
                            <div className="service-content">
                                <h4 className="card-title">IoT Enclosure Design</h4>
                                <p>Smart devices demand smarter enclosures. Our solutions combine form and function:</p>
                                <ul>
                                    <li>Precision fits for PCBs, batteries, and antennae</li>
                                    <li>Thermal management for high-power components</li>
                                    <li>IP-rated designs for waterproof/dustproof requirements</li>
                                </ul>
                                <p className="tech-specs">Example: Reduced a client's IoT enclosure size by 40% while improving thermal performance.</p>
                            </div>
                        </div>
                        <div className="content-card">
                            <div className="service-image"> 
                                <img src="/public/icons/analyse.png" alt="" />                                                                                                                     
                            </div>
                            <div className="service-content">
                                <h4 className="card-title">Simulation & Analysis</h4>
                                <p>Virtual testing saves thousands in prototyping costs. Our capabilities include:</p>
                                <ul>
                                    <li>Structural analysis for weight reduction and strength optimization</li>
                                    <li>Thermal simulations for electronics cooling solutions</li>
                                    <li>Fluid dynamics for airflow and liquid systems</li>
                                </ul>
                                <p className="tech-specs"><strong>Key Benefit:</strong> Identify potential failures before manufacturing begins.</p>
                            </div>
                        </div>
                        <div className="content-card">
                            <div className="service-image">     
                                <img src="/public/icons/prototyping.png" alt="" />                                                                                                                 
                            </div>
                            <div className="service-content">
                                <h4 className="card-title">Industrial Design Consultancy</h4>
                                <p>Products that look as good as they function:</p>
                                <ul>
                                    <li>Human factors and ergonomic optimization</li>
                                    <li>Material selection for aesthetics and durability</li>
                                    <li>Manufacturing-friendly design for cost reduction</li>
                                </ul>
                                <p className="tech-specs">See how we transformed a medical device's usability scores by 75% through ergonomic redesign.</p>
                            </div>
                        </div>
                    </div>

                    <div className="workflow">
                        <h3>Our Simple 5-Step Process</h3>
                        <div className="workflow-steps">
                            <div className="step">
                                <div className="step-number">1</div>                                
                                <div className="step-content">
                                    <h4>Share</h4>
                                    <p>Upload your files or share your concept</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>                                
                                <div className="step-content">
                                    <h4>Discuss</h4>
                                    <p>We review requirements and scope</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>                                
                                <div className="step-content">
                                    <h4>Quote</h4>
                                    <p>Receive a detailed proposal</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>                                
                                <div className="step-content">
                                    <h4>Produce</h4>
                                    <p>We manufacture your parts</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">5</div>                                
                                <div className="step-content">
                                    <h4>Deliver</h4>
                                    <p>Parts shipped to your location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

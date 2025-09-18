import {Fragment } from "react";

import { Testimonials } from "./components/Testimonials";
import { Blogs } from "./components/Blogs";
import Faq from "./components/Faq";
import { Link } from "react-router-dom";
import { Canvas } from "../components/Canvas";

export const Home = () => {
  return (
    <Fragment>
        {/* <canvas id="myCanvas" ref={canvasRef}></canvas> */}
        <Canvas/>
        <main id="hero">
            <div className="glowing-object"></div>
            <div className="hero-contents">
            <div className="hero-title">
                <span>"EPIC</span>
                <span>FLIGHT"</span>
            </div>
            <div className="hero-description">The drone that fights back!</div>
            </div>
        </main>

        <div className="theSticky">
            <section id="about">
                <div className="about-contents contents">
                    <div className="title">Fly High</div>
                    <div className="description">Built for Flight. Driven by Passion.</div>

                    <p>
                      At <strong>Xyonica</strong>, we know the real thrill of RC isn't perfection - 
                      it's that heart-pounding moment when you <strong>push limits</strong> 
                      and learn something new (usually after a crash).
                    </p>
                    <ul className="hobby-features">
                      <li>Forgiving controls that help you recover from "creative" flying</li>
                      <li>Easy-to-repair designs because we know crashes happen</li>
                      <li>Affordable replacement parts so the fun never stops</li>
                    </ul>

                    <p>
                      Because the best pilots aren't those who never crash - 
                      they're the ones having the most fun getting back in the air.
                    </p>

                    <button className="btn-1">Start Your Adventure<img src="/top-right.png" alt="icon"/></button>

                    <div className="glowing-object"></div>
                </div>
                <div className="here"></div>                       
            </section>
            <section id="whyUs">
                <div className="here"></div>
                <div className="why-us contents">
                    <div className="title">Why choose our multiplayer drone?</div>
                    <div className="description">Fly. Battle. Win Together</div>
                    <p>
                      Our drones are designed not just for flight—but for thrilling multiplayer battles. 
                      With a <strong>winged tricopter layout</strong>, you get longer, more stable flights 
                      and smoother control every time you take off.
                    </p>
                    <div className="drone-feature-highlight">
                      <h3>IR COMBAT MODE</h3>
                      <p>
                        Built-in infrared combat lets up to <strong>6 players battle in realtime</strong>, 
                        complete with LED "health" indicators and live hit feedback. 
                        Whether you're racing, freestyling, or dogfighting, every feature is made 
                        to elevate your experience and keep the adrenaline high.
                      </p>
                    </div>
                    <ul className="drone-features">
                      <li>Quick-swap batteries for continuous play</li>
                      <li>Custom flight control tuning</li>
                      <li>Future-ready upgrade system</li>
                      <li>Impact-resistant polycarbonate frame</li>
                      <li>Low-latency HD FPV transmission</li>
                    </ul>
                    <p className="drone-tagline">
                      The Xyonica Multiplayer Drone is built to <strong>fly harder</strong>, 
                      <strong>play smarter</strong>, and keep you in the game longer.
                    </p>
                    <div className="drone-cta">
                      <Link to="/contact" className="drone-button">Join the Battle</Link>
                      <Link to="/contact" className="drone-button secondary">Tech Specs</Link>
                    </div>
                    <div className="glowing-object"></div>
                </div>      
            </section>  
        
            <section id="blankSpace">    
                <div className="glowing-object"></div>
                <div className="marquee">
                    <span>RC Planes ✈️ RC Cars 🚗 RC Boats 🚤 Drones 🚁 Accessories 🧰 </span>
                    <span>RC Planes ✈️ RC Cars 🚗 RC Boats 🚤 Drones 🚁 Accessories 🧰 </span>
                    <span>RC Planes ✈️ RC Cars 🚗 RC Boats 🚤 Drones 🚁 Accessories 🧰 </span>
                    <span>RC Planes ✈️ RC Cars 🚗 RC Boats 🚤 Drones 🚁 Accessories 🧰 </span>
                    <span>RC Planes ✈️ RC Cars 🚗 RC Boats 🚤 Drones 🚁 Accessories 🧰 </span>
                    <span>RC Planes ✈️ RC Cars 🚗 RC Boats 🚤 Drones 🚁 Accessories 🧰 </span>
                </div>
            </section>
        </div>

        <section id="products">
        <div className="products-section">
            <div className="title">Explore Our Range</div>
            <div className="description">Beyond the Skies — Fun on Land, Water, and Air</div>            
            <div className="product-types">
              <Link to="/product" state={{ type: "plane" }}>
                <div className="product-card">
                  <img src="/blog/rc-plane.jpg" alt="icon"/>
                  <div className="text-contents">
                      <div className="heading">Plane</div>
                  </div>
                </div>
              </Link>
              <Link to="/product" state={{ type: "car" }}>
                <div className="product-card">
                  <img src="/blog/truck.jpg" alt="icon"/>
                  <div className="text-contents">
                      <div className="heading">Cars</div>
                  </div>
                </div>
              </Link>
              <Link to="/product" state={{ type: "boat" }}>
                <div className="product-card">
                  <img src="/blog/boat.jpg" alt="icon"/>
                  <div className="text-contents">
                      <div className="heading">Boats</div>
                  </div>
                </div>
              </Link>
              <Link to="/product" state={{ type: "accessories" }}>
                <div className="product-card">
                  <img src="/blog/battery.jpg" alt="icon"/>
                  <div className="text-contents">
                      <div className="heading">Accessories</div>
                  </div>
                </div>
              </Link>       
            </div>            
        </div>
    </section>

    <section id="testimonial">
        <Testimonials/>
    </section>

    <section id="faq">
        <div className="faq-section">
            <div className="title">Frequently Asked Questions</div>
            <div className="description">Got Questions? We've Got Answers.</div>
            <Faq/>
        </div>
    </section>

    <section id="blogs">
      <Blogs title={'Explore'} description={'Blog & Articles'}/>
    </section>

    </Fragment>
  );
};

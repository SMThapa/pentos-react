import React, { useEffect, useRef, Fragment } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Testimonials } from "./components/Testimonials";
import { Blogs } from "./components/Blogs";
import Faq from "./components/Faq";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );

  useEffect(() => {

    // Set up scene and camera only once
    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
    }
    if (!cameraRef.current) {
      cameraRef.current = new THREE.PerspectiveCamera(
        15,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      cameraRef.current.position.set(0, 0, 0);
    }

    const canvas = canvasRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 0);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.4.1/"
    );
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "/model/drone.glb",
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        model.scale.set(1, 1, 1);
        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        model.rotation.y = 0
        model.rotation.x = .25
        
        model.position.x = 0
        model.position.y = -.3
        model.position.z = -4.5

        scene.add(model);

        setupScrollAnimations(model);
        resizeModelToWidth();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      resizeModelToWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      renderer.dispose();
    };
  }, []);

  const resizeModelToWidth = () => {
    const model = modelRef.current;
    if (!model) return;
    const width = window.innerWidth;
    const scaleFactor = width / 1000;
    if (width < 1000) {
      model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    } else {
      model.scale.set(1, 1, 1);
    }
  };

  const setupScrollAnimations = (model) => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "80% 70%",
        endTrigger: "#about",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });
    tl1.to(model.position, { x: 0.7, y: -0.2, z: -6 }, 0);
    tl1.to(model.rotation, { y: -Math.PI / 7, x: 0.55 }, 0);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "80% 70%",
        endTrigger: "#whyUs",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });
    tl2.to(model.position, { x: -0.7 }, 0);
    tl2.to(model.rotation, { y: Math.PI / 7 }, 0);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#whyUs",
        start: "80% 70%",
        endTrigger: "#blankSpace",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });
    tl3.to(model.position, { x: 0, y: -0.5 }, 0);
    tl3.to(model.rotation, { y: 0, x: 0.15 }, 0);

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#blankSpace",
        start: "10% 40%",
        end: "90% 40%",
        scrub: 1,
        // markers: true,
      },
    });
    tl4.to(model.position, { x: 0, z: 1, y: 0.6 }, 0);
    tl4.to(model.rotation, { x: -0.15 }, 0);
  };

  return (
    <Fragment>
        <canvas id="myCanvas" ref={canvasRef}></canvas>
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
                    <ul class="drone-features">
                      <li>Quick-swap batteries for continuous play</li>
                      <li>Custom flight control tuning</li>
                      <li>Future-ready upgrade system</li>
                      <li>Impact-resistant polycarbonate frame</li>
                      <li>Low-latency HD FPV transmission</li>
                    </ul>
                    <p class="drone-tagline">
                      The Xyonica Multiplayer Drone is built to <strong>fly harder</strong>, 
                      <strong>play smarter</strong>, and keep you in the game longer.
                    </p>
                    <div class="drone-cta">
                      <a href="#" class="drone-button">Join the Battle</a>
                      <a href="#" class="drone-button secondary">Tech Specs</a>
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
                <div className="product-card">
                    <img src="/blog/rc-plane.jpg" alt="icon"/>
                    <div className="text-contents">
                        <div className="heading">Plane</div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/blog/truck.jpg" alt="icon"/>
                    <div className="text-contents">
                        <div className="heading">Cars</div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/blog/boat.jpg" alt="icon"/>
                    <div className="text-contents">
                        <div className="heading">Boats</div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/blog/battery.jpg" alt="icon"/>
                    <div className="text-contents">
                        <div className="heading">Accessories</div>
                    </div>
                </div>
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
      <Blogs title={''} description={'Blog & Articles'}/>
    </section>

    </Fragment>
  );
};

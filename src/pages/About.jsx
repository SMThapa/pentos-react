import React from 'react'

export const About = () => {
  return (
  <section>
    <div className="page-services page-width page-about">
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
    </div>
  </section>
  )
}

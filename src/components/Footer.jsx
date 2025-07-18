import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
          <div className="footer-row">
              <div className="footer-title"><img src="/logo/logo_big.png" alt=""/></div>
              <p>At Xyonica Hobby Store, we
                  don’t just build drones — we
                  engineer dreams, shaping
                  the future of flight with
                  creativity, precision, and
                  unstoppable passion.
              </p>
              <div className="social-media">                  
                  <Link to="https://www.instagram.com/xyonica_hobby?igsh=MTk4anpiYXEzdWZvYg==" target="__blank"><img src="/instagram.png" alt="icon"/></Link>                  
              </div>
          </div>            
          <div className="footer-row">
              <div className="footer-title">Navigation</div>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">About Us</a></li>                                        
              </ul>
          </div>
          <div className="footer-row">
              <div className="footer-title">Products</div>
              <ul>
                  <li><a href="#">Plane</a></li>
                  <li><a href="#">Car</a></li>
                  <li><a href="#">Boats</a></li>
                  <li><a href="#">Others</a></li>
              </ul>
          </div>
          <div className="footer-row">
              <div className="footer-title">Contact Us</div>
              <ul>
                  <li><a href="" target="_blank">Address: Tollygunge, Kolkata - 700093 </a></li>
                  <li><Link to="mailto:support@xyonica.com" target="_blank">Email: support@xyonica.com</Link></li>
                  <li><Link to="https://wa.me/9163110743" target="_blank">Whatsapp: 9163110743</Link></li>
              </ul>
          </div>
      </div>
      <div className="footer-bottom">
        <p className="terms-and-condition">Terms and condition <a href="">Short Write Up</a></p>
        <p>© 2025 All rights for WeForge</p>
      </div>
    </footer>
  )
}

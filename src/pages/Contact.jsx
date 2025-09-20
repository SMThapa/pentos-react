import axios from "axios";
import { useState } from "react";

export const Contact = () => {
  const [btnLoad, setBtnLoad] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const url = import.meta.env.VITE_API_BASEURL;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnLoad(true);

    async function submitData() {
      try {
        const res = await axios.post(
          url + "/contacts/post.php",
          formData,
          {
            headers: { "Content-Type": "application/json" }, // ✅ JSON request
          }
        );
        console.log(res.data); // success response
        alert("Message submitted successfully!");
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Error submitting form!");
      } finally {
        setBtnLoad(false);
      }
    }

    submitData();
  };

  return (
    <section>
      <div className="page-contact page-width">
        <div className="title">Get in touch</div>
        <div className="description">Estimate Your Project</div>

        <div className="form-contents">
          <div className="contact-info">
            <h2>Company Info.</h2>

            <div className="info-group">
              <img src="/phone-receiver-silhouette.png" alt="icon" />
              <a href="tel:9163110743">+91 9163110743</a>
            </div>
            <div className="info-group">
              <img src="/email.png" alt="icon" />
              <a href="mailto:connect@xyonica.com" target="__blank">
                connect@xyonica.com
              </a>
            </div>
            <div className="info-group">
              <img src="/pin.png" alt="icon" />
              <a
                href="https://www.google.com/maps/place/Kolkata,+West+Bengal+700093/"
                target="_blank"
                rel="noreferrer"
              >
                Tollygunge, Kolkata - 700093
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name."
                autoComplete="off"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email."
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone."
                autoComplete="off"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Say what's in your mind."
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>
            <button className="btn-2" type="submit" disabled={btnLoad}>
              {btnLoad ? (
                <span className="btn-loader"></span>
              ) : (
                <>
                  Submit
                  <span>
                    <img
                      src="/up-right-arrow2.png"
                      alt="icon"
                      className="first"
                    />
                    <img
                      src="/up-right-arrow2.png"
                      alt="icon"
                      className="second"
                    />
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

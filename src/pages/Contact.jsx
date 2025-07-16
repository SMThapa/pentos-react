import React from 'react'

export const Contact = () => {
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
                        <a href="tel:1234567890">1234567890</a>
                    </div>
                    <div className="info-group">
                        <img src="/email.png" alt="icon" />
                        <a href="mailto:support@xyonica.com" target="__blank">support@xyonica.com</a>
                    </div>
                    <div className="info-group">
                        <img src="/pin.png" alt="icon" />
                        <a href="https://www.google.com/maps/place/Kolkata,+West+Bengal+700093/@22.4716491,88.3332698,14.8z/data=!4m6!3m5!1s0x3a0270f40d95ef7b:0x3cf9c8e74af290b8!8m2!3d22.4728741!4d88.3470047!16s%2Fg%2F1hhh5czlp?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D">Tollygunge, Kolkata - 700093</a>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16940.38996932931!2d88.33326975151073!3d22.471649088174956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270f40d95ef7b%3A0x3cf9c8e74af290b8!2sKolkata%2C%20West%20Bengal%20700093!5e0!3m2!1sen!2sin!4v1752075803709!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <form action="">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name."  autocomplete="off" />
                    </div> 
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email."  autocomplete="off" />
                    </div> 
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="number" id="phone" name="phone" placeholder="Enter you phone."  autocomplete="off" />
                    </div> 
                    <div className="form-group">
                        <label for="phone">Message</label>
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

        </div>
    </section>
  )
}

import axios from "axios";
import { useState } from "react"

export const Contact = () => {

    const [btnLoad, setBtnLoad] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',        
        message: '',  
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const url = import.meta.env.VITE_API_BASEURL;
    const handleSubmit = (e)=>{
        setBtnLoad(true)
        e.preventDefault();        
        console.log(formData);

        async function submitData(){
            try{
                const res = await axios.post(url + '/contacts/post.php', 
                    formData, 
                    {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true
                    })
                console.log(res)
            }catch(err){
                console.log(err)
            }finally{
                setBtnLoad(false)
            }
        }

        submitData()
    }

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
                        <a href="mailto:connect@xyonica.com" target="__blank">connect@xyonica.com</a>
                    </div>
                    <div className="info-group">
                        <img src="/pin.png" alt="icon" />
                        <a href="https://www.google.com/maps/place/Kolkata,+West+Bengal+700093/@22.4716491,88.3332698,14.8z/data=!4m6!3m5!1s0x3a0270f40d95ef7b:0x3cf9c8e74af290b8!8m2!3d22.4728741!4d88.3470047!16s%2Fg%2F1hhh5czlp?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D">Tollygunge, Kolkata - 700093</a>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16940.38996932931!2d88.33326975151073!3d22.471649088174956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270f40d95ef7b%3A0x3cf9c8e74af290b8!2sKolkata%2C%20West%20Bengal%20700093!5e0!3m2!1sen!2sin!4v1752075803709!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" id="name" name="name" placeholder="Enter your name."  autoComplete="off" 
                            onChange={e=>handleChange(e)} value={formData.name} required
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" id="email" name="email" placeholder="Enter your email."  autoComplete="off" 
                            onChange={e=>handleChange(e)} value={formData.email} required
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="number" id="phone" name="phone" placeholder="Enter you phone."  autoComplete="off" 
                            onChange={e=>handleChange(e)} value={formData.phone} required
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="phone">Message</label>
                        <textarea 
                            name="message" id="message" placeholder="Say what's in your mind."
                            onChange={e=>handleChange(e)} value={formData.message} required
                        ></textarea>
                    </div> 
                    <button className="btn-2" type="submit" disabled={btnLoad}>                                                
                        {
                            btnLoad ? <span className='btn-loader'></span>:
                            <>
                                Submit 
                                <span>
                                    <img src="/up-right-arrow2.png" alt="icon" className="first" />
                                    <img src="/up-right-arrow2.png" alt="icon" className="second" />
                                </span>
                            </>
                        }
                    </button>                    
                </form>
            </div>

        </div>
    </section>
  )
}

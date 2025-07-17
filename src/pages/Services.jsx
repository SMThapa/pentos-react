import React from 'react'

export const Services = () => {
  return (
    <section>        
        <div class="page-services page-width">
            <div class="service-banner">
                <h1 class="banner-title">Advanced Prototyping & <br/>Product Design</h1>
                <div class="banner-description">From concept to production - we provide industrial-grade manufacturing solutions and engineering expertise to bring your ideas to life.</div>
                <div class="btn-2">Get Your Free Quote Today
                    <span>
                        <img src="/up-right-arrow2.png" alt="icon" class="first" />
                        <img src="/up-right-arrow2.png" alt="icon" class="second" />
                    </span>
                </div>
            </div>
            <div class="title">What we can do for you</div>

            <div class="services-contents">
                <div class="left-content">
                    <form action="">
                        <div class="form-group">
                            <label for="file">Upload File</label>
                            <input type="file" id="file" name="file" placeholder="Enter your name."  autocomplete="off" />
                        </div> 
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email."  autocomplete="off" />
                        </div> 
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="number" id="phone" name="phone" placeholder="Enter you phone."  autocomplete="off" />
                        </div> 
                        <div class="form-group">
                            <label for="phone">Message</label>
                            <textarea name="message" id="message" placeholder="Say what's in your mind."></textarea>
                        </div> 
                        <button class="btn-2" type="submit">Submit 
                            <span>
                                <img src="/up-right-arrow2.png" alt="icon" class="first" />
                                <img src="/up-right-arrow2.png" alt="icon" class="second" />
                            </span>
                        </button>
                    </form>
                </div>
                <div class="right-content">
                    <div class="right-content-group">
                        <div class="title2">Precision 3D Printing & Manufacturing</div>
                        <div class="description2">From rapid prototypes to production-grade parts, we bridge the gap between concept and reality with advanced additive manufacturing technologies.</div>
                        <div class="content-card">
                            <div class="card-title">Write Up Title 1</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, ex eget elementum sagittis, sem mauris dictum tortor, eu lacinia est enim nec enim. Donec iaculis condimentum magna eget facilisis. Nulla suscipit diam vel condimentum sagittis. Maecenas finibus venenatis fermentum. Donec sollicitudin, elit quis consectetur imperdiet, nisl libero euismod dui, quis varius augue massa a nisi. Donec at mi sed arcu ornare iaculis vitae vitae turpis. Integer ac mattis nisl. Nullam maximus cursus consequat. Praesent blandit justo justo, vitae consequat sapien malesuada id. Proin rutrum nunc at eros pretium, in vestibulum massa aliquam. Donec ac nibh semper, cursus leo id, pretium diam. Pellentesque volutpat finibus faucibus.</p>
                        </div>
                        <div class="content-card">
                            <div class="card-title">Write Up Title 2</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, ex eget elementum sagittis, sem mauris dictum tortor, eu lacinia est enim nec enim. Donec iaculis condimentum magna eget facilisis. Nulla suscipit diam vel condimentum sagittis. Maecenas finibus venenatis fermentum. Donec sollicitudin, elit quis consectetur imperdiet, nisl libero euismod dui, quis varius augue massa a nisi. Donec at mi sed arcu ornare iaculis vitae vitae turpis. Integer ac mattis nisl. Nullam maximus cursus consequat. Praesent blandit justo justo, vitae consequat sapien malesuada id. Proin rutrum nunc at eros pretium, in vestibulum massa aliquam. Donec ac nibh semper, cursus leo id, pretium diam. Pellentesque volutpat finibus faucibus.</p>
                        </div>
                        <div class="content-card">
                            <div class="card-title">Write Up Title 3</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, ex eget elementum sagittis, sem mauris dictum tortor, eu lacinia est enim nec enim. Donec iaculis condimentum magna eget facilisis. Nulla suscipit diam vel condimentum sagittis. Maecenas finibus venenatis fermentum. Donec sollicitudin, elit quis consectetur imperdiet, nisl libero euismod dui, quis varius augue massa a nisi. Donec at mi sed arcu ornare iaculis vitae vitae turpis. Integer ac mattis nisl. Nullam maximus cursus consequat. Praesent blandit justo justo, vitae consequat sapien malesuada id. Proin rutrum nunc at eros pretium, in vestibulum massa aliquam. Donec ac nibh semper, cursus leo id, pretium diam. Pellentesque volutpat finibus faucibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

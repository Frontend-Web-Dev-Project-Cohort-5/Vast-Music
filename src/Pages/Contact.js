import React from "react";

function Contact() {
  return (
    <div>
      <section className="about bg-light mt-5 border-bottom py-1">
        <div className="container bg-light mt-5">
          <div className="row gy-5 py-5">
            {/* <div className="col-lg-4">
              <div className="p-2 shadow">
                <img className="img-fluid" src="images.jfif" alt="" />
              </div>
            </div> */}
            <div className="col-lg-8">
              <h2 className="text-uppercase text-black fw-bold py-3">
                Contact <span className="text-success fw-bold">Us</span>
              </h2>
              <p className="my-3  text-black">
                The Vast music app was developed to help movie soundtrack lovers
                find their favorite movie soundtracks using just the movie
                title. We know movie titles stick with you for longer,so we
                built this app to help source that amazing tune you just cant
                forget and remember at the same time. Cheers!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section bg-light">
        <div className="container bg-light">
          {/* <ToastContainer position="top-center" /> */}
          <div className="row justify-content-center bg-light">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6 bg-black">
                    <div className="contact-wrap w-100 p-lg-5 p-4 bg-black">
                      <h3 className="mb-4 rounded fw-bold">
                        Send us a message
                      </h3>
                      <form id="contactForm" className="contactForm">
                        <div className="row bg-black">
                          <div className="col-md-12 mb-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-1">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                type="text"
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                cols="30"
                                rows="6"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-success"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>Get in touch</h3>
                      <p className="mb-4">
                        We're open to any suggestion and feedback.
                      </p>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fw-bold"> Address:</span> Lagos,
                            Nigeria.
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fw-bold"> Phone: </span>
                            <a href="tel://123456789">+1235 2355 98</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fw-bold"> Email: </span>
                            <a href="mailto:info@oursite.com">
                              {" "}
                              info@oursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fw-bold"> Website: </span>
                            <a href=" ">Vastmusic.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

import React from 'react'

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        ></div>
        <div className="carousel-inner">
          <div
            className="carousel-item active HeroImage"
            data-bs-interval="10000"
          >
            <img
              src="contactus.png"
              className="d-block w-100"
              alt="roku width:1512px; height:1300px;"
            />
            <div className="carousel-caption carousel-text d-none d-md-block">
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Body section */}
      <section className="contact-section">
        <div className="container">
          {/* <ToastContainer position="top-center" /> */}
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send us a message</h3>
                      <form id="contactForm" className="contactForm">
                        <div className="row">
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
                                className="btn btn-outline-success"
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
                            <span> Address:</span> Lagos, Nigeria.
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span> Phone: </span>
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
                            <span> Email: </span>
                            <a href="mailto:info@oursite.com">
                              {' '}
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
                            <span> Website: </span>
                            <a href=" ">yoursite.com</a>
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
    </>
  )
}

export default Contact

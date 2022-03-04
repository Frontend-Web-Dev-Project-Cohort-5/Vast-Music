import React from "react";
// import './sass/main'

const AboutUs = () => {
  return (
    <div className="bg-light py-5">
      <section className="about bg-light mt-5 border-bottom">
        <div className="container bg-light mt-5">
          <div className="row gy-5 py-5">
            <div className="col-lg-4">
              <div className="p-2 shadow">
                <img className="img-fluid" src="bff.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="text-uppercase text-black fw-bold py-3">
                About <span className="text-success fw-bold">Us</span>
              </h2>
              <p className="my-3  text-black">
                The Vast music app was developed to help movie soundtrack lovers
                find their favorite movie soundtracks using just the movie
                title. We know movie titles stick with you for longer,so we
                built this app to help source that amazing tune you just cant
                forget and remember at the same time. Cheers!
              </p>
            </div>
            {/* <h3 className="my-3 bg-light text-black">
              The Vast music app was developed to help movie soundtrack lovers
              find their favorite movie soundtracks using just the movie title.
              We know movie titles stick with you for longer,so we built this
              app to help source that amazing tune you just cant forget and
              remember at the same time. Cheers!
            </h3> */}
          </div>
        </div>
      </section>

      {/* Doctors Section*/}
      <section className="doctors bg-light mt-5">
        <div className="container text-center">
          <h2 className="text-uppercase text-black fw-bold py-2">
            The <span className="text-success fw-bold">Team</span>
          </h2>
          <p className="text-muted mb-3">The Vast Music Developers</p>
          <div className="row gy-10 justify-content-center">
            <div className="col-xl-3 col-md-6">
              {/* Dev*/}
              <div className="card doctor border-0">
                <div className="card-body p-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      className="img-fluid border-top border-2 border-success"
                      src="https://vast-music-vast-music.vercel.app/Devteam3.jpg"
                      alt="..."
                    />
                    <div className="doctor-overlay">
                      <ul className="list-inline mb-0 doctor-social">
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4">
                    <h6 className="mb-0">Pius Ashogbon</h6>
                    <p className="text-muted text-sm mb-0">Software Engineer</p>
                  </div>
                  <a className="btn btn-success w-100  fw-bold" href=" ">
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Dev*/}
              <div className="card doctor border-0">
                <div className="card-body p-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      className="img-fluid border-top border-2 border-success"
                      src="https://vast-music-vast-music.vercel.app/Devteam2.jpg"
                      alt="..."
                    />
                    <div className="doctor-overlay">
                      <ul className="list-inline mb-0 doctor-social">
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4">
                    <h6 className="mb-0">Jennifer Mbonu</h6>
                    <p className="text-muted text-sm mb-0">Software Engineer</p>
                  </div>
                  <a className="btn btn-success w-100 fw-bold" href="#!">
                    Github Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              {/* Dev*/}
              <div className="card doctor border-0">
                <div className="card-body p-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      className="img-fluid border-top border-2 border-success"
                      src="https://vast-music-vast-music.vercel.app/Devteam5.jpeg"
                      alt="..."
                    />
                    <div className="doctor-overlay">
                      <ul className="list-inline mb-0 doctor-social">
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4">
                    <h6 className="mb-0">Victor Ekundayo</h6>
                    <p className="text-muted text-sm mb-0">Software Engineer</p>
                  </div>
                  <a className="btn btn-success w-100 fw-bold" href="#!">
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-10 justify-content-center mt-3 mb-3">
            <div className="col-xl-3 col-md-6">
              {/* Dev*/}
              <div className="card doctor border-0">
                <div className="card-body p-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      className="img-fluid border-top border-2 border-success"
                      src="https://vast-music-vast-music.vercel.app/Devteam1.jpg"
                      alt="..."
                    />
                    <div className="doctor-overlay">
                      <ul className="list-inline mb-0 doctor-social">
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4">
                    <h6 className="mb-0">Fahm Abdullahi</h6>
                    <p className="text-muted text-sm mb-0">Software Engineer</p>
                  </div>
                  <a className="btn btn-success w-100 fw-bold" href="#!">
                    Github Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              {/* Dev*/}
              <div className="card doctor border-0">
                <div className="card-body p-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      className="img-fluid border-top border-2 border-success"
                      src="sam.jfif"
                      alt="..."
                    />
                    <div className="doctor-overlay">
                      <ul className="list-inline mb-0 doctor-social">
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="text-success doctor-social-link"
                            href="#!"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4">
                    <h6 className="mb-0">Samuel Ekejuba</h6>
                    <p className="text-muted text-sm mb-0">Software Engineer</p>
                  </div>
                  <a className="btn btn-success w-100 fw-bold" href="#!">
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

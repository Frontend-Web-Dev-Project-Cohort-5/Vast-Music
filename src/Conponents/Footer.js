import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black pt-5">
      <div className="container pt-5">
        <div className="row gy-4">
          <div className="col-lg-3 py-4">
            <h2 className="h5 lined text-white mb-4">About</h2>
            <p className="text-muted text-sm">
              The Vast music app was developed to help movie soundtrack lovers
              find their favorite movie soundtracks using just the movie title.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="text-white social-link" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-white social-link" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-white social-link" href="#!">
                  <i className="fab fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-white social-link" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled d-inline-block me-4 mb-0">
                <h2 className="h5 text-white lined mb-4 fw-bold">
                  Quick Links
                </h2>
                <li className="mb-1">
                  <a
                    className="footer-link text-decoration-none text-white"
                    href="#!"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="footer-link text-decoration-none text-white"
                    href="#!"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="footer-link text-decoration-none text-white"
                    href="#!"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="footer-link text-decoration-none text-white"
                    href="#!"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <h2 className="h5 text-white lined mb-4">Newsletter</h2>
            <p className="text-muted text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
            <div className="input-group mb-1">
              <input
                className="form-control text-muted bg-none border-success"
                type="text"
                placeholder="Email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-succes"
                id="button-addon2"
                type="button"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="copyrights bg-dark">
        <div className="container text-center py-2">
          <p className="mb-0 text-white text-sm">© 2022 | Vast Music</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

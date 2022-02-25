import React from "react";

const Footer = () => {
  return (
    <footer className="map-bg bg-black">
      <div className="container py-5 border-bottom z-index-20 position-relative">
        <div className="row pt-5 gy-4">
          <div className="col-lg-3 col-md-6">
            <img className="mb-3" src="vast.png" alt="" width={80} />
            <ul className="list-unstyled text-white mb-0">
              <li className="mb-1">
                <a className="flinks" href=" ">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a className="flinks" href=" ">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a className="flinks" href=" ">
                  Blog
                </a>
              </li>
              <li className="mb-1">
                <a className="flinks " href=" ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container py-4 z-index-20 position-relative">
        <div className="row text-center">
          <div className="col-lg-6 p-lg-0 text-lg-start">
            <p className="text-muted text-sm mb-0 text-white">
              Copyright © 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

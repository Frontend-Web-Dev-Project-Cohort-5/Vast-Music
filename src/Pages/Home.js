import React from "react";
// import './sass/main'

const Homepage = () => {
  return (
    <div className="skills justify-content-center row pb-5">
      <p className="fmovie text-white">
        Featured <span className="mgreen">Movies</span>
      </p>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card*/}
        <div className="card">
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://ashconcept.com.ng/wp-content/uploads/2022/02/card.png" alt="encanto"
              className="img-fluid"
            />
            <a href=" ">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
          </div>
          <div className="moviecard card-body">
            <h6 className="movietext">
              Movie:<span className="mgreen"> Encanto</span>
            </h6>
            <h6 className="movietext">
              <span className="mgreen">Artiste:</span> Stephanie Beatriz, Olga
              ...
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card */}
        <div className="card">
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://ashconcept.com.ng/wp-content/uploads/2022/02/card1.png" alt="panther"
              className="img-fluid"
            />
            <a href=" ">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
          </div>
          <div className="card-body">
            <h6 className="movietext">
              Movie:<span className="mgreen"> Encanto</span>
            </h6>
            <h6 className="movietext">
              <span className="mgreen">Artiste:</span> Stephanie Beatriz, Olga
              ...
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        {/* Card */}
        <div className="card">
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://ashconcept.com.ng/wp-content/uploads/2022/02/card1.png" alt="panther"
              className="img-fluid"
            />
            <a href=" ">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
          </div>
          <div className="card-body">
            <h6 className="movietext">
              Movie:<span className="mgreen"> Encanto</span>
            </h6>
            <h6 className="movietext">
              <span className="mgreen">Artiste:</span> Stephanie Beatriz, Olga
              ...
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
// import './sass/main'

const Homepage = () => {
  return (
    <section>
      {/* SEARCH BOX */}

      <div className="row pt-5">
        <div className="col-lg-7 mx-auto text-center">
          <p className="h3 text-white mb-3">Search</p>
          <form className="p-1 rounded shadow-sm bg-Success" action=" ">
            <div className="input-group">
              <input
                className="form-control border-0 me-2 shadow-0"
                type="search"
                placeholder="Search Movies"
              />
              <button className="btn btn-success rounded" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
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
                src="https://ashconcept.com.ng/wp-content/uploads/2022/02/card.png"
                alt="encanto"
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
                src="https://ashconcept.com.ng/wp-content/uploads/2022/02/card1.png"
                alt="panther"
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
                src="https://ashconcept.com.ng/wp-content/uploads/2022/02/card1.png"
                alt="panther"
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
    </section>
  );
};

export default Homepage;

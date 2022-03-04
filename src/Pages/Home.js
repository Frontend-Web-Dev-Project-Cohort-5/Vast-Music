import React from 'react'
// import './sass/main'

const Homepage = () => {
  return (
    <section>
      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="caraousel1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="caraousel2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="carosel2.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
 {/* SEARCH BOX */}

      <div className="row pt-5 py-5">
        <div className="col-lg-7 mx-auto text-center py-3">
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
      <div className="skills justify-content-center row pb-5 py-3">
        <h3 className="text-uppercase text-black fw-bold py-3 text-center">
          Featured <span className="text-success fw-bold">Movies</span>
        </h3>
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
}

export default Homepage

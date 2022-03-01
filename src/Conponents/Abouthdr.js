import React from 'react'

const Abouthdr = () => {
  return (
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
            src="Aboutus.png"
            className="d-block w-100"
            alt="roku width:1512px; height:1300px;"
          />
          <div className="carousel-caption carousel-text d-none d-md-block">
            <h3>About Us</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abouthdr

import React from 'react'
import Abouthdr from '../Conponents/Abouthdr'

const AboutUs = () => {
  return (
    <>
      <Abouthdr />
      <p className="paraIntro mt-5 mx-5 px-5 d-flex justify-content-center align-items-center">
        The Vast music app was developed to help movie soundtrack lovers find
        their favorite movie soundtracks using just the movie title. We know
        movie titles stick with you for longer,so we built this app to help
        source that amazing tune you just cant forget and remember at the same
        time.
      </p>
      <p className="Cheer mb-5 mx-5 px-5 d-flex justify-content-center align-items-center">
        Cheers!
      </p>
      <p className="Teamtext fs-3 fw-bold mx-5 d-flex justify-content-center align-items-center">
        Development Team
      </p>
      <h3>Development Team</h3>
      {/* Dev team section */}
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 px-5 style={{ width: '18rem' }}">
        <div className="col">
          <div className="card h-100">
            <img src="Devteam3.jpg" className="card-img-top" alt="developer" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Name: PIUS ASHOGBON</p>
              <p>Frontend Developer</p>
              <p>Email: Pius1ash@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="Devteam2.jpg"
              className="card-img-top"
              alt="Developer img"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"> Name: JENNIFER MBONU</p>
              <p>Frontend Developer</p>
              <p>Email: Mbonujennifer@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              className="img-fluid card-img-top"
              src="Devteam5.jpeg"
              alt="Developer img"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Name: EKUNDAYO VICTOR</p>
              <p>Frontend Developer</p>
              <p>Email: Rocmancave@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5 px-5 style={{ width: '18rem' }}">
        <div className="col">
          <div className="card h-100">
            <img src="Devteam1.jpg" className="card-img-top" alt="developer" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Name: FAHM ABDULLAHI</p>
              <p>Frontend Developer</p>
              <p>Email: Holardhayo28@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="Devteam2.jpg"
              className="card-img-top"
              alt="Developer img"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"> Name: SAMUEL EKEJUBA</p>
              <p>Frontend Developer</p>
              <p>Email: Ekejubasamuel2@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="col">
    <div className="card h-100">
      <img src="Devteam4.jpg" className="card-img-top" alt="Developer img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Name: EKUNDAYO VICTOR</p>
        <p>Frontend Developer</p>
        <p>Email: Rocmancave@gmail.com</p>
      </div>
    </div>
  </div> */}
      </div>
      {/* <div clasName="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card ">
      <img src="Devteam1.jpg" className="card-img-top" alt="Developer img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Name: FAHM ABDULLAHI</p>
        <p>Frontend Developer</p>
        <p>Email: Holardhayo28@gmail.com</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="" class="card-img-top" alt="Developer img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Name: SANUEL EKEJUBA</p>
        <p>Frontend Developer</p>
        <p>Email: Ekejubasamuel2@gmail.com</p>
      </div>
    </div>
  </div>
</div>
<div className="col">
    <div className="card h-100">
      <img src="" class="card-img-top" alt="Developer img"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Name: SANUEL EKEJUBA</p>
        <p>Frontend Developer</p>
        <p>Email: Ekejubasamuel2@gmail.com</p>
      </div>
    </div>
  </div> */}
    </>
  )
}

export default AboutUs

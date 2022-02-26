import React from 'react'
import Abouthdr from '../Conponents/Abouthdr'

const AboutUs = () => {
  return (
    <>
    <Abouthdr /> 
    <br />
    <br />
    <h3>Development Team</h3>
    <div>
        <div className="row">
          <div className="col-4">
            <img src="./Hero.jpg" className="card-img-top" alt="..." width="200px; 200px;" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="col-4">
            <img src="./Hero.jpg" className="card-img-top" alt="..." width="200px; 200px;" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="col-4">
            <img src="./Hero.jpg" className="card-img-top" alt="..." width="200px; 200px;" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="./Hero.jpg" className="card-img-top" alt="..." width="200px; 200px;" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="col-4">
            <img src="./Hero.jpg" className="card-img-top" alt="..." width="200px; 200px;" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div></div>
    );
);


    </>
  )
}

export default AboutUs

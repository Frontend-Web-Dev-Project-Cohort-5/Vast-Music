import React from 'react'

const Blog = () => {
  return (
    <div className="container">
        <div className="row align-items-start">
          {/* //////////////////////////  1  ////// */}
          <div className="col">
            <div className="card text-center" style={{width: '18rem'}}>
              <img src="https://ashconcept.com.ng/wp-content/uploads/2022/02/1.jpeg" className="card-img-top" alt="..." />
              <div className="class-body">
                <h5 className="card-title">Rema Ft Chris Brown Vs Omah</h5>
                <hr />
                <p className="card-text">Rema linked up with Chris Brown some weeks ago which he confirmed with a picture with Brizzy himself. Later a video was released showing the duo in the studio.</p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* //////////////////////   2 ////////// */}
          <div className="col">
            <div className="card text-center" style={{width: '18rem'}}>
              <img src="https://ashconcept.com.ng/wp-content/uploads/2022/02/2.jpeg" className="card-img-top" alt="..." />
              <div className="class-body">
                <h5 className="card-title">BE SINCERE!! As An</h5>
                <hr />
                <p className="card-text">et’s say you an up and coming artiste who had suffered alot.
                  You have spent your time and money, yet you couldn’t blow beyond your village.
                </p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
          {/* //////////////////////////////// */}
          {/* ////////////////////   3 //////////// */}
          <div className="col">
            <div className="card text-center" style={{width: '18rem'}}>
              <img src="https://ashconcept.com.ng/wp-content/uploads/2022/02/3.jpeg" className="card-img-top" alt="..." />
              <div className="class-body">
                <h5 className="card-title">NL FACT-CHECK!!</h5>
                <hr />
                <p className="card-text">The music star claimed Naira Marley is after his life and should be blamed for his death. Mohbad begged his fans for help and said he doesn’t want to die.
                </p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
          {/* //////////////////////////////// */}
        </div>
      </div>
  )
}

export default Blog
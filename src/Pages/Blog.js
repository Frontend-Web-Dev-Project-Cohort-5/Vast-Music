import React from "react";

const Blog = () => {
  return (
    <div>
      
      <header className="text-center mb-5">
        <h2 className="mb-1 text-success">Explore our blog posts</h2>
        <p className="text-black text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
      </header>
      <header className="text-center mb-5">
        <h2 className="mb-1 text-success">Explore our blog posts</h2>
        <p className="text-black text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
      </header>
      {/* Blog Section*/}
      <section className="pb-1 pt-5">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow hover-transition">
                <a href="#!">
                  <img
                    className="card-img-top img-fluid"
                    src="https://ashconcept.com.ng/wp-content/uploads/2022/02/project_management.png"
                    alt="..."
                  />
                </a>
                <div className="card-body p-5">
                  <p className="text-sm text-muted mb-2">11 February, 2022</p>
                  <h3 className="h5">
                    <a className="text-decoration-none text-success" href=" ">
                      How To Get More Reviews For Your Startup Product
                    </a>
                  </h3>
                  <p className="text-sm text-muted">
                    The quality of customer service can make or break a buyer’s
                    relationship with the seller...
                  </p>
                  <span className="btn btn-success text-white">Read more</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow hover-transition">
                <a href="#!">
                  <img
                    className="card-img-top img-fluid"
                    src="https://ashconcept.com.ng/wp-content/uploads/2022/02/technology-transger.jpg"
                    alt="..."
                  />
                </a>
                <div className="card-body p-5">
                  <p className="text-sm text-muted mb-2">23 February, 2022</p>
                  <h3 className="h5">
                    <a className="text-decoration-none text-success" href=" ">
                      Increasing Engagement Among Email Subscribers
                    </a>
                  </h3>
                  <p className="text-sm text-muted">
                    The quality of customer service can make or break a buyer’s
                    relationship with the seller...
                  </p>
                  <span className="btn btn-success text-white">Read more</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow hover-transition">
                <a href="#!">
                  <img
                    className="card-img-top img-fluid"
                    src="https://ashconcept.com.ng/wp-content/uploads/2022/02/online-project-management-software-which-is-best.jpg"
                    alt="..."
                  />
                </a>
                <div className="card-body p-5">
                  <p className="text-sm text-muted mb-2">15 February, 2022</p>
                  <h3 className="h5">
                    <a className="text-decoration-none text-success" href=" ">
                      Lessons in Leadership: Q&amp;A with William Erbey
                    </a>
                  </h3>
                  <p className="text-sm text-muted">
                    The quality of customer service can make or break a buyer’s
                    relationship with the seller...
                  </p>
                  <span className="btn btn-success text-white">Read more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <a className="btn btn-outline-success rounded fw-bold" href=" ">
            Load More ...
          </a>
        </div>
      </section>
      {/* Newsletter section*/}
      <section className="pb-5">
        <div className="container pb-5">
          <header className="text-center mb-5 pt-5">
            <h2 className="text-black">Free tools to grow your startup</h2>
          </header>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <form className="p-2 rounded shadow-sm bg-white" action=" ">
                <div className="input-group">
                  <input
                    className="form-control border-0 me-2 shadow-0"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <button className="btn btn-success rounded" type="submit">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

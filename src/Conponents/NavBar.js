import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className=" bg-dark header fixed-top header-animated">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src="https://ashconcept.com.ng/wp-content/uploads/2022/02/20220226_123716.png"
              alt="logo"
              width={30}
            />
          </a>
          <h3>Music</h3>
          <button
            className="bg-success navbar-toggler navbar-toggler-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="blog"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <Link
                to="contact"
                className="nav-link text-white"
                aria-current="page"
              >
                <button className="btn btn-outline-success" type="submit">
                  Contact
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-black">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          <img
            src=""
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top ml-5"
          />
          Music
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link text-white ml-5">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="blog" className="nav-link text-white ml-5">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link text-white" aria-current>
              <button className="btn btn-outline-success" type="submit">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

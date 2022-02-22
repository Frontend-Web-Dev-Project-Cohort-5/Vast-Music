import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <img
            src=""
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top ml-5"
          />
          Music
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white btn btn-outline-success ml-5">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

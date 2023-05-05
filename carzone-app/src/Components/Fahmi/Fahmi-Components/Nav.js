import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-white fixed-top" id="nav-color">
      <div class="container-fluid">
        {/* <Link to="/" class="navbar-brand">
          <img src={logo} alt="logo" width={150} />
        </Link> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to="/"
                class="nav-link fw-bold text-dark"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Products" class="nav-link fw-bold text-dark">
                GALARY
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link fw-bold text-dark">
                ABOUT
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link fw-bold text-dark">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div class="d-flex">
            <p className="d-flex align-items-end fw-bold fs-5 text-dark">
              $0.00
            </p>
            {/* <Link
              to="/cart"
              className="btn text-dark me-1 fw-bold text-primary"
            >
              <LocalMallIcon color="primary" fontSize="large" />0
            </Link>
            <Link to="registration" class="btn btn-white fw-bold" type="submit">
              <PersonIcon fontSize="large" VerticalAlignCenter />{" "}
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
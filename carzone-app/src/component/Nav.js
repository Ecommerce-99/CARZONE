import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import { HashLink } from 'react-router-hash-link';



function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-white" id="nav-color">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img src={logo} alt="logo" width={150} />
        </Link>
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
              <HashLink smooth to="/#Gallery" class="nav-link fw-bold text-dark">
              GALLERY
              </HashLink>
            </li>
            <li class="nav-item">
              <Link to="About" class="nav-link fw-bold text-dark">
                ABOUT
              </Link>
            </li>
            <li class="nav-item">
              <Link to="Contact" class="nav-link fw-bold text-dark">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div class="d-flex">
           
            <Link
              to="Cart"
              className="btn text-dark me-1 fw-bold text-primary"
            >
              <LocalMallIcon color="primary" fontSize="large" />0
            </Link>
            <Link to="Registration" class="btn btn-white fw-bold" type="submit">
              <PersonIcon fontSize="large" VerticalAlignCenter />{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

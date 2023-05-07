import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import { HashLink } from "react-router-hash-link";
import "./home.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white p-0" id="nav-color">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link  text-dark" aria-current="page">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#Gallery" className="nav-link  text-dark">
                GALLERY
              </HashLink>
            </li>
            <li className="nav-item">
              <Link to="About" className="nav-link  text-dark">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" className="nav-link  text-dark">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              to="Cart"
              className="btn text-dark me-1 btn-white  text-primary bg-transparent"
            >
              <LocalMallIcon color="black" fontSize="large" />
            </Link>
            <Link to="Registration" class="btn btn-white " type="submit">
              <PersonIcon fontSize="large" VerticalAlignCenter />{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./home.css";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white p-0 sticky-top"
      id="nav-color"
    >
      <div className="container-fluid">
        <HashLink to="/#" className="navbar-brand">
          <img src={logo} alt="logo" width={100} />
        </HashLink>
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
              <HashLink
                to="/#"
                className="nav-link  text-dark"
                aria-current="page"
              >
                HOME
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/Pagination/#"
                className="nav-link  text-dark"
              >
                GALLERY
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/About/#" className="nav-link  text-dark">
                ABOUT
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/Contact/#" className="nav-link  text-dark">
                CONTACT US
              </HashLink>
            </li>
          </ul>
          <div className="d-flex">
            <HashLink
              to="/Cart/"
              className="btn text-dark me-1 btn-white  text-primary bg-transparent"
            >
              <LocalMallIcon color="black" fontSize="large" />
            </HashLink>
            {auth ? (
              <>
                <HashLink
                  to="/#"
                  onClick={() => {
                    setAuth(false);
                    Swal.fire({
                      title:
                        "<strong>You have successfully been logged out</strong>",
                      text: "Thank You!",
                    });
                  }}
                  class="btn btn-white "
                  type="submit"
                >
                  <ExitToAppIcon fontSize="large" VerticalAlignCenter />
                </HashLink>
              </>
            ) : (
              <HashLink
                to="/Registration/#"
                class="btn btn-white "
                type="submit"
              >
                <PersonIcon fontSize="large" VerticalAlignCenter />
              </HashLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

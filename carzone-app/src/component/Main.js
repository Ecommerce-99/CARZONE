import React, { useState } from "react";
import video from "../Images/car.mp4";
import car1 from "../Images/shopp.jpg";
import car2 from "../Images/toyo.jpg";
import mercedes from "../Images/Mercedes-Logo 1.png";
import toyota from "../Images/toyota.webp";
import bmw from "../Images/bmw.png";
import ford from "../Images/ford.jpg.png";
import ford2 from "../Images/ford2.jpg";
import nissan from "../Images/nissan.png";
import honda from "../Images/honda.jpg";

import icon_1 from "../Images/price.png";
import icon_2 from "../Images/min.png";
import icon_3 from "../Images/shopcar.png";

import { Link } from "react-router-dom";

const Main = ({ setBrand }) => {
  return (
    <>
      {/* Carousel wrapper */}
      <div
        id="introCarousel"
        className="carousel slide carousel-fade shadow-2-strong mt-0"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-mdb-target="#introCarousel"
            data-mdb-slide-to={0}
            className="active"
          />
          <li data-mdb-target="#introCarousel" data-mdb-slide-to={1} />
          <li data-mdb-target="#introCarousel" data-mdb-slide-to={2} />
        </ol>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            <video
              style={{ minWidth: "100%", minHeight: "100%" }}
              playsInline
              autoPlay
              muted
              loop
            >
              <source className="h-100" src={video} type="video/mp4" />
            </video>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                  <h1 className="mb-3 fw-bold display-1" id="hero-1">
                    WELCOME TO{" "}
                    <span className="text-primary" id="carzone">
                      CAR-ZONE
                    </span>
                  </h1>
                  <h5 className="mb-4 display-6 fw-bold">
                    Best &amp; Easy-To-Use Cars Sales Website
                  </h5>
                  <Link
                    to="registration"
                    className="btn btn-light btn-lg m-2 fw-bold"
                    role="button"
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item" id="car1">
            <img
              className="img-fluid h-100"
              src={car1}
              width="100%"
              alt="car-img"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.43)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-start">
                  <h1 className="fw-bold display-1 " id="hero-2">
                    START SHOPPING TODAY
                  </h1>
                  <h2 className="fw-normal" style={{ color: "#6AB7FE" }}>
                    SHOP YOUR FAVORITE BRAND
                  </h2>
                  <Link
                    to="gallery"
                    className="btn  btn-lg m-2 fw-bold"
                    role="button"
                    id="g-btn"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              className="img-fluid h-100"
              src={car2}
              width="100%"
              alt="car-img"
              id="car2"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.43)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white text-center">
                  <h2 className="display-1 fw-bold" id="hero-3">
                    The World’s Leading Brands Trust <br />{" "}
                    <span className="text-primary" id="carzone">
                      CAR-ZONE
                    </span>{" "}
                    Every Day
                  </h2>
                  <Link
                    to="About"
                    className="btn btn-light btn-lg m-2 fw-bold"
                    href="#"
                    role="button"
                  >
                    ABOUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Carousel wrapper */}

      <div class="container-fulid rounded-5 shadow position-relative overflow-hidden my-5 mx-5 text-center">
        <div class="col-md-5  mx-auto my-5">
          <h1 class="display-4 fw-bold" id="top">
            Why CAR-ZONE?
          </h1>

          <div class="row mt-5">
            <div class="col-lg-4">
              <img
                class="bd-placeholder-img rounded-circle"
                src={icon_1}
                alt="icon"
              />
              <h2 class="fw-bold text-dark">Transparent pricing</h2>
              <p className="text-dark">
                No surprises here. See how much you'll pay on cars you like.
              </p>
            </div>
            <div class="col-lg-4">
              <img
                class="bd-placeholder-img rounded-circle"
                src={icon_2}
                alt="icon"
              />
              <h2 class="fw-bold text-dark">Minutes, not hours</h2>
              <p className="text-dark">
                Time saving tools to help you find the right car in a snap.
              </p>
            </div>
            <div class="col-lg-4">
              <img
                class="bd-placeholder-img rounded-circle"
                src={icon_3}
                alt="icon"
              />
              <h2 class="fw-bold text-dark">Shop your way</h2>
              <p className="text-dark">
                Your own pace, your own space. Shop online where and when it's
                convenient for you.
              </p>
            </div>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="container">
        <span id="cars"></span>
        <div className="d-md-flex flex-md-equal w-100 mt-md-3 ">
          <div
            className="col-12 col-lg-6   text-center overflow-hidden"
            style={{ backgroundColor: "black" }}
          >
            <div className="my-3 py-3" id="div-sq">
              <img
                className="img-fulid"
                width={180}
                src={mercedes}
                alt="mercedesLogo"
              />
            </div>
          </div>
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            id="grad"
          >
            <div className="my-3 p-3 mx-5">
              <h2 className="display-5 text-start fw-bold">HYUNDAI</h2>
              <p className="lead text-start">
                Mercedes-Benz, commonly referred to as Mercedes and sometimes as
                Benz, is a German luxury and commercial vehicle automotive brand
                established in 1926.{" "}
              </p>
              <Link to="Products">
                <button
                  className="btn btn-lg btn-primary"
                  onClick={() => setBrand("hyundai")}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100">
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            id="grad"
          >
            <div className="my-3 p-3 mx-5">
              <h2 className="display-5 text-start fw-bold">TOYOTA</h2>
              <p className="lead text-start">
                Toyota Motor Corporation is a Japanese multinational automotive
                manufacturer headquartered in Toyota City, Aichi, Japan. It was
                founded by Kiichiro Toyoda and incorporated on August 28, 1937.
              </p>
              <Link to="Products">
                <button
                  className="btn btn-lg btn-primary"
                  onClick={() => setBrand("toyota")}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-lg-6  text-center overflow-hidden"
            style={{ backgroundColor: "black" }}
          >
            <div className="my-3 py-3" id="div-sq">
              <img
                className="img-fulid"
                width={220}
                src={toyota}
                alt="ToyotaLogo"
              />
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 mb-5">
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            style={{ backgroundColor: "black" }}
          >
            <div className="my-3 py-3" id="div-sq">
              <img className="img-fulid" src={bmw} width={180} alt="BMWLogo" />
            </div>
          </div>
          <div
            className="col-12 col-lg-6 text-center overflow-hidden"
            id="grad"
          >
            <div className="my-3 p-3 mx-5">
              <h2 className="display-5 text-start fw-bold">BMW</h2>
              <p className="lead text-start">
                Bayerische Motoren Werke AG, abbreviated as BMW is a German
                multinational manufacturer of luxury vehicles and motorcycles
                headquartered in Munich, Bavaria, Germany.
              </p>
              <Link to="Products">
                <button
                  className="btn btn-lg btn-primary"
                  onClick={() => setBrand("bmw")}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container shadow-lg rounded-5 mb-5" id="cont-cards">
        <div class="row mb-3 text-center my-5">
          <h1 className="text-center my-5 fw-bold text-body display-4" id="top">
            TOP RATED
          </h1>

          <div class="col-lg-3 col-12 themed-grid-col">
            <div
              class="card shadow-sm mb-5 mx-3"
              style={{ backgroundColor: "#f0f1f3" }}
            >
              <div class="card-body">
                <p class="card-text text-start fs-3 fw-bold">Ford</p>
                <p class="card-text text-start fs-5">3038 matches</p>
              </div>
              <img
                src={ford}
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>

          <div class="col-lg-3 col-12 themed-grid-col">
            <div
              class="card shadow-sm mb-5 mx-3"
              style={{ backgroundColor: "#f0f1f3" }}
            >
              <div class="card-body">
                <p class="card-text text-start fs-3 fw-bold">Honda</p>
                <p class="card-text text-start fs-5">2940 matches</p>
              </div>
              <img
                src={honda}
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>

          <div class="col-lg-3 col-12 themed-grid-col">
            <div
              class="card shadow-sm mb-5 mx-3"
              style={{ backgroundColor: "#f0f1f3" }}
            >
              <div class="card-body">
                <p class="card-text text-start fs-3 fw-bold">Nissan</p>
                <p class="card-text text-start fs-5">3132 matches</p>
              </div>
              <img
                src={nissan}
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>

          <div class="col-lg-3 col-12 themed-grid-col ">
            <div
              class="card shadow-sm mb-5 mx-3"
              style={{ backgroundColor: "#f0f1f3" }}
            >
              <div class="card-body ">
                <p class="card-text text-start fs-3 fw-bold">Ford</p>
                <p class="card-text text-start fs-5">3038 matches</p>
              </div>
              <img
                src={ford2}
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5 rounded-5 shadow-lg">
        <div
          class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow"
          id="discount"
        >
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 " id="dis-text">
              Best Deal <span style={{ color: "#a51718" }}>Discount</span> Offer
              on Cars : May 2023
            </h1>
            <p class="lead text-dark fw-bold">
              Check Latest Discount Offers with Best Deals on New Cars
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 my-5">
              <Link to="discount">
                <button
                  type="button"
                  class="btn btn-light btn-lg px-4 me-md-2 fw-bold mb-5"
                >
                  View Deal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

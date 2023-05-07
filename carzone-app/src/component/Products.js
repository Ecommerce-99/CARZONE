import React, { useEffect, useState } from "react";
import cars from "../Recordes.json";
import { json } from "react-router-dom";
import "./style.css";

function Products({ brand }) {
  const toyota = cars.toyota;
  const hyundai = cars.hyundai;
  const BMW = cars.bmw;

  let cart = [];

  const addCart = (car) => {
    cart.push(car);
    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  return (
    <>
      {brand === "toyota" ? (
        <>
          {/* <div>
            <div
              className="p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage: `url(https://wallpaper.dog/large/20526644.jpg)`,
                backgroundSize: "cover",
                height: "50vh ",
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">TOYOTA</h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div
              className="bigCon p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage: `url(https://wallpaper.dog/large/20526644.jpg)`,
              }}
            >
              <div className="mask">
                <div className="position-relative d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">Toyota</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {toyota.map((car) => {
            return (
              // <div class="container col-xxl-8 px-4 py-5">
              //   <div class="row flex-lg-row align-items-center g-5 py-5">
              //     <div class="col-10 col-sm-8 col-lg-6">
              //       <img
              //         src={car.image1}
              //         class="d-block mx-lg-auto img-fluid"
              //         alt="Bootstrap Themes"
              //         width="700"
              //         height="500"
              //         loading="lazy"
              //       />
              //     </div>
              //     <div class="col-lg-6">
              //       <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              //         {car.type}
              //       </h1>
              //       <h4>{car.price}JD</h4>
              //       <p class="lead">{car.description}</p>
              //       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              //         <button
              //           type="button"
              //           class="btn btn-primary btn-lg px-4 me-md-2"
              //           onClick={addCart(car)}
              //         >
              //           Add To Cart
              //         </button>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <section className="py-2">
                <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                      <div className="row-3">
                        <img
                          className="card-img-top mb-md-0"
                          src={car.image1}
                          alt="..."
                        />
                      </div>
                      <div className="container d-flex">
                        <div className="col-sm-4 mt-5 ">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image2}
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-4 mt-5">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image3}
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-4 mt-5">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image4}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="small mb-1">SKU: BST-498</div>
                      <h1 className="display-5 fw-bolder">{car.type} </h1>
                      <div className="fs-5 mb-5">
                        <span className="text-decoration-line-through">
                          $45.00
                        </span>
                        <span>$40.00</span>
                      </div>
                      <p>
                        With a low center of gravity, it's designed to perform.
                        Feel its nimble handling in every turn and stability
                        during acceleration and braking—for a drive that’s
                        all-around confident.
                      </p>
                      <div className="d-flex">
                        <button
                          className="btn btn-outline-dark flex-shrink-0"
                          type="button"
                          fdprocessedid="qzga4"
                        >
                          <i className="bi-cart-fill me-1" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <></>
      )}

      {brand === "hyundai" ? (
        <>
          {/* <div style={{ minHeight: "100vh" }}>
            <div
              className="p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage: `url(https://cdn.wallpapersafari.com/43/1/kq0WwF.jpg)`,
                backgroundSize: "cover",
                height: "50vh ",
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">HYUNDAI</h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div>
            <div
              className="bigCon p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage: `url(https://www.hdcarwallpapers.com/walls/hyundai_vision_t_concept_2019_4k_6-HD.jpg)`,
              }}
            >
              <div className="mask">
                <div className="position-relative d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">Hyundai</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {hyundai.map((car) => {
            return (
              // <div class="container col-xxl-8 px-4 py-5">
              //   <div class="row flex-lg-row align-items-center g-5 py-5">
              //     <div class="col-10 col-sm-8 col-lg-6">
              //       <img
              //         src={car.image1}
              //         class="d-block mx-lg-auto img-fluid"
              //         alt="Bootstrap Themes"
              //         width="700"
              //         height="500"
              //         loading="lazy"
              //       />
              //     </div>
              //     <div class="col-lg-6">
              //       <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              //         {car.type}
              //       </h1>
              //       <h4>{car.price}JD</h4>
              //       <p class="lead">{car.description}</p>
              //       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              //         <button
              //           type="button"
              //           class="btn btn-primary btn-lg px-4 me-md-2"
              //         >
              //           Add To Cart
              //         </button>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <section className="py-2">
                <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                      <div className="row-3">
                        <img
                          className="card-img-top mb-md-0"
                          src={car.image1}
                          alt="..."
                        />
                      </div>
                      <div className="container d-flex">
                        <div className="col-sm-4 mt-5 ">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image2}
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-4 mt-5">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image3}
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-4 mt-5">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image4}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="small mb-1">SKU: BST-498</div>
                      <h1 className="display-5 fw-bolder">{car.type} </h1>
                      <div className="fs-5 mb-5">
                        <span className="text-decoration-line-through">
                          $45.00
                        </span>
                        <span>$40.00</span>
                      </div>
                      <p>
                        With a low center of gravity, it's designed to perform.
                        Feel its nimble handling in every turn and stability
                        during acceleration and braking—for a drive that’s
                        all-around confident.
                      </p>
                      <div className="d-flex">
                        <button
                          className="btn btn-outline-dark flex-shrink-0"
                          type="button"
                          fdprocessedid="qzga4"
                        >
                          <i className="bi-cart-fill me-1" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <></>
      )}

      {brand === "bmw" ? (
        <>
          {/* <div style={{ minHeight: "100vh" }}>
            <div
              className="p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/images6/BMW-Wallpaper-4K-Desktop.jpg)`,
                backgroundSize: "cover",
                height: "50vh ",
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">BMW</h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div
              className="bigCon p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/images6/BMW-Desktop-Wallpaper-4K.jpg)`,
              }}
            >
              <div className="mask">
                <div className="position-relative d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">BMW</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {BMW.map((car) => {
            return (
              // <div class="container col-xxl-8 px-4 py-5">
              //   <div class="row flex-lg-row align-items-center g-5 py-5">
              //     <div class="col-10 col-sm-8 col-lg-6">
              //       <img
              //         src={car.image1}
              //         class="d-block mx-lg-auto img-fluid"
              //         alt="Bootstrap Themes"
              //         width="700"
              //         height="500"
              //         loading="lazy"
              //       />
              //     </div>
              //     <div class="col-lg-6">
              //       <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              //         {car.type}
              //       </h1>
              //       <h4>{car.price}JD</h4>
              //       <p class="lead">{car.description}</p>
              //       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              //         <button
              //           type="button"
              //           class="btn btn-primary btn-lg px-4 me-md-2"
              //         >
              //           Add To Cart
              //         </button>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <section className="py-2">
                <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                      <div className="row-3">
                        <img
                          className="card-img-top mb-md-0"
                          src={car.image1}
                          alt="..."
                        />
                      </div>
                      <div className="container d-flex">
                        <div className="col-sm-4 mt-5 ">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image2}
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-4 mt-5">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image3}
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-4 mt-5">
                          <img
                            className="card-img-top mb-5 mb-md-0"
                            src={car.image4}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="small mb-1">SKU: BST-498</div>
                      <h1 className="display-5 fw-bolder">{car.type} </h1>
                      <div className="fs-5 mb-5">
                        <span className="text-decoration-line-through">
                          $45.00
                        </span>
                        <span>$40.00</span>
                      </div>
                      <p>
                        With a low center of gravity, it's designed to perform.
                        Feel its nimble handling in every turn and stability
                        during acceleration and braking—for a drive that’s
                        all-around confident.
                      </p>
                      <div className="d-flex">
                        <button
                          className="btn btn-outline-dark flex-shrink-0"
                          type="button"
                          fdprocessedid="qzga4"
                        >
                          <i className="bi-cart-fill me-1" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Products;

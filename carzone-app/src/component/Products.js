import React, {useEffect, useState} from "react";
import cars from '../Recordes.json'
import { json } from "react-router-dom";


function Products({brand}) {
 
  const toyota = cars.toyota;
  const hyundai = cars.hyundai;
  const BMW = cars.bmw;
 
let cart = [];
 

const addCart = (car) => {
       cart.push(car);
       localStorage.setItem("Cart", JSON.stringify(cart));
}



  return (
<>

{(brand === "toyota") ? <>
<div >
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: `url(https://wallpaper.dog/large/20526644.jpg)`,
          backgroundSize: "cover",
          height: "50vh ",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">TOYOTA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>



    {
          toyota.map((car) => {
            return(
              <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={car.image1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{car.type}</h1>
        <h4>{car.price}JD</h4>
        <p class="lead">{car.description}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={addCart(car)}>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
            )
          })


    }
   
 

</> : <></>
  
}


{(brand === "hyundai") ? <>
<div style={{ minHeight: "100vh" }}>
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: `url(https://cdn.wallpapersafari.com/43/1/kq0WwF.jpg)`,
          backgroundSize: "cover",
          height: "50vh ",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">HYUNDAI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    {
  hyundai.map((car) => {
    return(
      <div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row align-items-center g-5 py-5">
<div class="col-10 col-sm-8 col-lg-6">
<img src={car.image1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
</div>
<div class="col-lg-6">
<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{car.type}</h1>
<h4>{car.price}JD</h4>
<p class="lead">{car.description}</p>
<div class="d-grid gap-2 d-md-flex justify-content-md-start">
  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Add To Cart</button>
</div>
</div>
</div>
</div>
    )
  })


}




</>


: <></>
  
}

{(brand === "BMW") ? <>
<div style={{ minHeight: "100vh" }}>
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/images6/BMW-Wallpaper-4K-Desktop.jpg)`,
          backgroundSize: "cover",
          height: "50vh ",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">BMW</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    {
  BMW.map((car) => {
    return(
      <div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row align-items-center g-5 py-5">
<div class="col-10 col-sm-8 col-lg-6">
<img src={car.image1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
</div>
<div class="col-lg-6">
<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{car.type}</h1>
<h4>{car.price}JD</h4>
<p class="lead">{car.description}</p>
<div class="d-grid gap-2 d-md-flex justify-content-md-start">
  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Add To Cart</button>
</div>
</div>
</div>
</div>
    )
  })


}






</> : <></>
  
}



</>



    );
}

export default Products;

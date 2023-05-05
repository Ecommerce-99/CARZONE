import React from "react";

function Products() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: 'url("https://wallpaper.dog/large/20526644.jpg")',
          backgroundSize: "cover",
          height: "50vh ",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Toyota</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

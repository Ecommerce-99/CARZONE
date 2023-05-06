import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Registration from "./component/Registration";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact"; 

import React, {useState} from "react";

function App() {

  const [brand, setBrand] = useState("toyota");

  return (
    <>
      <BrowserRouter>

      <Nav/>
        <Routes>
          <Route index element={<Main setBrand={setBrand} />} />
          <Route path="Products" index element={<Products brand={brand} />} />
          <Route path="Gallery" index element={<Gallery />} />
          <Route path="Registration" index element={<Registration />} />
          <Route path="Cart" index element={<Cart />} />
          <Route path="Contact" index element={<Contact />} />
          <Route path="About" index element={<About />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Registration from "./component/Registration";
import SignUp from "./component/SignUp";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import React, { useState, createContext, useEffect } from "react";
import Payment from "./component/Payment";
import HeroCart from "./component/heroCart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrandProvider } from "./component/brandContext";
import {AuthContextProvider} from "./component/AuthContext";

export const CartContext = createContext([]);

function App() {
 
  return (
    <>
      <BrowserRouter>
      <AuthContextProvider>
        <CartContext.Provider>
          <BrandProvider>
            <Nav />
            <Routes>
              <Route index element={<Main />} />
              <Route path="Products" index element={<Products />} />
              <Route path="Gallery" index element={<Gallery />} />
              <Route path="Registration" index element={<Registration />} />
              <Route path="SignUp" index element={<SignUp />} />
              <Route path="Cart" index element={<Cart />} />
              <Route path="Contact" index element={<Contact />} />
              <Route path="About" index element={<About />} />
            </Routes>
            <Footer />
          </BrandProvider>
        </CartContext.Provider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

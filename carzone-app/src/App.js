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

export const CartContext = createContext([]);

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      type: "Car Model 1",
      price: 20000,
      img: "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
    },
    {
      id: 2,
      type: "Car Model 2",
      price: 25000,
      img: "https://www.topgear.com/sites/default/files/2022/07/6_0.jpg",
    },
  ]);
  // const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // const [brand, setBrand] = useState();

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={[cartItems, setCartItems]}>
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
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useContext, useEffect } from "react";
import "./checkOutPayment.css";
import { CartContext } from "../App";
import Payment from "./Payment";
import HeroCart from "./heroCart";

function Cart() 
{
  const [cartItems, setCartItems] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function handleRemoveItem(id)
   {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  }



  // Calculate total price of all items in cart
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };



  // Update total price whenever cart items change
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
    // Save cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  
  // Load cart items from local storage when component mounts
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Check if user is logged in
  useEffect(() => {
    // Replace this with your actual login check logic
    const isLoggedIn = true;
    setIsLoggedIn(isLoggedIn);
  }, []);


  return (
    <>
    <HeroCart/>
    <div className="container mt-5">
    <div className="row">
      <div className="col-12">
        <h4 className="text-center mb-5 fw-bold">{cartItems.length === 0 ? "Your cart is empty" : "Your cart"}</h4>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cart-item-container">
            <img src={item.img} alt={item.type} className="card-img-top" />
            <div className="card-bodyCart">
              <h5 className="card-title">{item.type}</h5>
              <p className="card-text">Price: {item.price} JD</p>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
   
   
  </div>
  {cartItems.length > 0 && isLoggedIn && (
      <div>
        <h5 className="mt-4 fw-bold text-center">Payment information goes here</h5>
        <Payment />
      </div>
    )}
  </>
  );
}


export default Cart;

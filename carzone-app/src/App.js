import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Galary from "./component/Galary";
import Registration from "./component/Registration";
import SignUp from "./component/SignUp";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact"; 


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route index element={<Main />} />
          <Route path="Products" index element={<Products />} />
          <Route path="Galary" index element={<Galary />} />
          <Route path="Registration" index element={<Registration />} />
          <Route path="SignUp" index element={<SignUp />} />          
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

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Fahmi/Fahmi-Components/Products";
import Nav from "./Components/Fahmi/Fahmi-Components/Nav";
import Footer from "./Components/Fahmi/Fahmi-Components/Footer";
import Main from "./Components/Fahmi/Fahmi-Components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Main />} />
          <Route path="Products" index element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

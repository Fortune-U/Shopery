import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from "./Pages/About";
import ProductDescription from './Pages/ProductDescripton';
import './App.css';
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import Cart from "./Pages/Cart";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="productdescription" element={<ProductDescription />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="cart" element={<Cart />} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

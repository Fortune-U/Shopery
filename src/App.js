import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDescription from './Pages/ProductDescripton';
import './App.css';
import NavBar from "./Components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="productdescription" element={<ProductDescription />} />
    {/* <div className="App">
      <ProductDescription />
    </div> */}
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

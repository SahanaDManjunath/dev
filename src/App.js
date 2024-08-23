import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductLists from "./Pages/ProductLists";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for Cart page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/list" element={<ProductLists />} />
        <Route path="/product" element={<Product/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Product from "./components/Product/Product";


function App() {

  return (
    <>
	  <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
    </>
  )
}

export default App

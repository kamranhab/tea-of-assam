import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Checkout from "./pages/Checkout.jsx";
import Contact from "./pages/Contact.jsx";
import Policies from "./pages/Policies.jsx";
import Wholesale from "./pages/Wholesale.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors theme="dark"/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;

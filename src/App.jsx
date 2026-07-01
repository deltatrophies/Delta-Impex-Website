import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App min-h-screen bg-white text-[#0B131E]">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: "rounded-sm font-medium",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

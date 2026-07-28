import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
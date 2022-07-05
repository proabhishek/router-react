import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

import Navbar from "./Components/Navbar";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

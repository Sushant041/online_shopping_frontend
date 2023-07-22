import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comonents/navbar";
import Home from "./comonents/home";
import Products from "./comonents/products";
import About from "./comonents/about";
import Login from "./comonents/login";
import Signup from "./comonents/signup";
import Contact from "./comonents/contacts";
import Yourcart from "./comonents/yourcart";
import Services from "./comonents/services";
import Trusted from "./comonents/trusted";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/yourcart" element={<Yourcart />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/trusted" element={<Trusted />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;

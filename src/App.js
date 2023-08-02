import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Products from "./components/products";
import About from "./components/about";
import Login from "./components/login";
import Signup from "./components/signup";
import Contact from "./components/contacts";
import Yourcart from "./components/yourcart";
import Services from "./components/services";
import Trusted from "./components/trusted";
import Footer from "./components/footer";
import Error from "./error";
import { AppProvider } from "./components/context/productcontext";
import SingleProduct from "./components/singleproduct";

function App() {
  return (
    <>
    <AppProvider>
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
          <Route exact path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
      </AppProvider>
    </>
  );
}

export default App;

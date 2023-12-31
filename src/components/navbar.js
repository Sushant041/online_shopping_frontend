import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"
import { useCartContext } from "./context/cartcontext";
import { useNavigate } from 'react-router-dom';



function Navbar() {
  let location = useLocation();


  if(localStorage.getItem("token")){

  }


  let navigate = useNavigate();

  const logout = () => {
     console.log("logout");
    localStorage.removeItem("token")
     navigate('/login');
  }

  const { total_items } = useCartContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top" style={{position: "sticky"}}>
        <div className="container-fluid nav2 fixed-top" style={{position: "sticky"}}>
          <Link className="navbar-brand" to="/">
            Online-Shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/products' ? "active" : ""}`} to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contacts' ? "active" : ""}`} to="/contacts">
                  Contacts
                </Link>
              </li>
              <li>
                  <Link to="/yourcart">
                    <div className="d-flex">
                    <FiShoppingCart className="cart-trolley active" />
                    <span className="cart-total">{total_items}</span>
                    </div>
                  </Link>
              </li>
            </ul>
             {!localStorage.getItem("token") &&
             <div>
              <Link type="button" className="btn btn-success mx-1" to="/login">Login</Link>
              <Link type="button" className="btn btn-success  mx-1" to="/signup" >Signup</Link>
              </div>
               }
              {localStorage.getItem("token") &&
              <div className="logout mx-4 my-2" >
                <span>Hello! <br /> Welcome</span>
                <button className="btn btn-secondary" onClick={() => logout()}>Logout</button>
               </div>
                 }  
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

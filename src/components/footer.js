import React from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaFacebook } from "react-icons/fa"




function Footer() {
  return (
    <div>
        <section className='container secfoot'>

            <div className="footbox">
                <div>
                  <strong>Ready to Get Started?</strong>
                  <p>Talk to us Today</p>
                  </div>
                <Link className="btn btn-success" to="/contacts">Help</Link>
            </div>
        </section>

        <footer>
          <div className="footitem">
           <div className='foot'>
            <strong>online-store</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda</p>
           </div>

           <div className='foot'>
            <strong>Subscribe to get Important Details</strong>
             <form action="">
             <div className="mb-3">
                <input type="email" className="form-control impcont" name="email" required aria-describedby="emailHelp" placeholder='email'/>
                </div>
                <button type="subscribe" className="btn btn-success">Subscribe</button>
                </form>
           </div>
           <div className='foot'>
            <strong>Follow Us</strong>
            <div>
            <FaDiscord className="iconc"/>
            <FaInstagram className="iconc"/>
            <FaFacebook className="iconc"/>
            </div>
            
           </div>
           <div className='foot'>
             <strong>Call Us</strong>
             <div></div>
             <Link to="tel:1234567890">+91 1234567890</Link>
           </div>
           </div>
           <hr className='hrf'/>
           <div className="footend">
            <p style={{textAlign: "center"}}>&copy; {new Date().getFullYear()} || All rights reserved</p>
           </div>
        </footer>
    </div>
  )
}

export default Footer
import React from 'react'

function Contact() {
  return (
	<div>
    <h3>contacts</h3>

    <iframe title="My Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27205.9884434557!2d76.87649832353961!3d31.53106529246957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905199b7ac797a3%3A0x94e8fb0b8f87d989!2sSundar%20Nagar%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1690174165424!5m2!1sen!2sin" 
      width="100%"
      height="400"
      style={{border:0}} 
      allowfuscreen="" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div>
          <form action="https://formspree.io/f/mrgwbrdp" method="POST" className="formcont">
            <div className="mb-3">
            <input type="text" className="form-control impcont" name="name" required aria-describedby="emailHelp" placeholder='username'/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control impcont" name="email" required aria-describedby="emailHelp" placeholder='email'/>
          </div>
          <div className="mb-3">
            <textarea type="text" className="form-control impcont" name="message" required placeholder='enter your message'/>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
         </div>
      </div>
  </div>
  )
}

export default Contact
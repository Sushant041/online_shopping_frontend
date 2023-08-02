import React from 'react'
import { TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"

function Services() {
  return (
  
    <div className='services'>
       <div className="services1">
        <TbTruckDelivery className='icon'/>
        <p>Super fast and free Delivery</p>
       </div>
       
       <div className="services2">
        <div className="services21">
          <MdSecurity className='icon'/>
          <p className='icontext'>Non-contact Shipping</p>
        </div>
        <div className="services22">
          <GiReceiveMoney className='icon'/>
          <p className='icontext'>Money-back Guaranted</p>
        </div>
       </div>

       <div className="services3">
        <RiSecurePaymentLine className='icon'/>
        <p>Super Secure Payment System</p>
       </div>
    </div>
  )
}

export default Services
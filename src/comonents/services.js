import React from 'react'
import { TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"


function Services() {
  return (
    <div className='container services'>
       <div className="services1">
        <TbTruckDelivery/>
        <h3>Super fast and free Delivery</h3>
       </div>
       
       <div className="services2">
        <div>
          <MdSecurity/>
          <h3>Non-contact Shipping</h3>
        </div>
        <div>
          <GiReceiveMoney/>
          <h3>Money-back Guaranted</h3>
        </div>
       </div>

       <div className="services3">third</div>
    </div>
  )
}

export default Services
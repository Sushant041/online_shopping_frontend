import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartTotalAmount = ({ amount, setDecrease, setIncrease}) => {
  return (
    <div>
      <div className="carttotal">
        <button className="carttbtn" onClick={() => setDecrease()}>
            <FaMinus/>
        </button>
        <div className='carttamt'>{amount}</div>
        <button className="carttbtn" onClick={() => setIncrease()}>
            <FaPlus style={{verticalAlign: "text-top"}}/>
        </button>
      </div>
    </div>
  )
}

export default CartTotalAmount

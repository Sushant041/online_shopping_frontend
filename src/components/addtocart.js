import React, { useState } from 'react'
import {FaCheck} from "react-icons/fa"
import CartTotalAmount from './carttotalamount';
import { Link } from 'react-router-dom';

const AddtoCart = ({ product }) => {

    const {id,  colors, stock } = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const setDecrease = () =>{
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () =>{
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
  return (
    <div>
     <strong>Colors:</strong>
      <p className='colcheck'>
        {
            colors.map((curColor, index) =>{
                return(
                    <button style={{backgroundColor: curColor}} className={color === curColor ? "itmcolor active" : "itmcolor"} key={index}
                      onClick={() =>{
                        setColor(curColor)
                      }}>
                      {
                        color === curColor ? <FaCheck className="checkcol" /> : null
                      }
                    </button>
                )
            })
        }
      </p>
      <CartTotalAmount amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
      <div>
        <Link to="/yourcart" className='btn btn-success'>Add To Cart</Link>
      </div>
    </div>
  )
}

export default AddtoCart

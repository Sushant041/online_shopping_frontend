import React, { useState } from 'react'
import {FaCheck} from "react-icons/fa"
import CartTotalAmount from './carttotalamount';
import { Link } from 'react-router-dom';
import { useCartContext } from './context/cartcontext';

const AddtoCart = ({ product }) => {

  const { addToCart } = useCartContext();

  // console.log(cart);

    const {id,  colors } = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)


    // const setDecrease = () =>{
    //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // }

    // const setIncrease = () =>{
    //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // }

    const setAmt = (value) =>{
      setAmount(value);
    }
  return (
    <div className='container'>
      <div className="row">
        
      <div className='colcheck col'>
       <strong>Colors:</strong>
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
      </div>
      <div className="col">
      <CartTotalAmount amount={amount} product={product} setAmt={setAmt} />
      </div>
      <div className="col">
        <Link to="/yourcart">
        <button className='btn btn-success'onClick={() => { addToCart(id, color,amount, product)}} >Add To Cart</button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default AddtoCart

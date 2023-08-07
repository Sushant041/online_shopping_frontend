import React, {useState} from 'react'
import FormatPrice from './helpers/formatprice'
import CartTotalAmount from './carttotalamount'
import {FaTrash} from "react-icons/fa"
import { useCartContext } from './context/cartcontext'

export const CartItem = ({ id, name, image, color, price, amount, max }) => {
   
    const {removeitem} = useCartContext(); 
    // const amt = amount;

    const [amt, setamt] = useState(amount)

    // const setDecrease = () =>{
    // //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // }


    // const setIncrease = () =>{
    // //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // }
    const setAmt = (value) =>{
        amount = value;
        setamt(value);
      }


  return (
     <div className='my-5 card1'>
        <div>
         <h3 className=''>{name}</h3>
           <img className='cartimg' src={image} alt={id} />
   
           
        </div>
           <div className='card2'>
            
            <div className='card21'>
             <span> Color : </span>
            <button className="itmcolor mx-2 my-1" style={{backgroundColor: color }}>
            </button>
            </div>

            <strong className='card21'>Subtotal  <br />
             <FormatPrice price={price * amt}/>
             </strong>

            <div className='card21'>
                <CartTotalAmount amount={amt} setAmt={setAmt}/>
            </div>

            <div className='card21'>
               <button onClick={() => {removeitem(id)}} className="btn btn-success">
                 Remove :
                <FaTrash className='mx-2' />
                 </button>
             </div>

            </div>
     </div>
  )
}

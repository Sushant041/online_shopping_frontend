import React, {useState} from 'react'
import FormatPrice from './helpers/formatprice'
import CartTotalAmount from './carttotalamount'
import {FaTrash} from "react-icons/fa"
import { useCartContext } from './context/cartcontext'

export const CartItem = ({ id, name, image, color, price, amount}) => {
   
    const {removeitem, changeamount } = useCartContext(); 

    const [amt, setamt] = useState(amount)

    const setAmt = (value) =>{
        amount = value;
        changeamount(amount, id);
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

            <strong className='card21'>Price  <br />
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

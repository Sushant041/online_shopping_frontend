import React from 'react'
import { useCartContext } from './context/cartcontext'
import { CartItem } from './cartitem';
import { NavLink } from 'react-router-dom';

function Yourcart() {

  const { cart, clearcart } = useCartContext();


   return (

      <div className="container">
        
        {
           cart.map((curElm) =>{
             return <div> 
              <CartItem key={curElm.id} {...curElm} />
              <hr />
              </div>
           })
        } 
       { !cart.length && <h2 style={{marginTop: "15%"}}>Nothing in cart <hr /></h2>}
       <div className='cendbtn'>
       <NavLink to="/products" >
        <button className=" btn btn-success">Continue Shopping</button>
        </NavLink>
        <button onClick={() =>{clearcart()}} className=" btn btn-success">Clear Cart</button>
      </div>
      </div>
  )
 }


export default Yourcart
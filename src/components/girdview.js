import React from 'react'
import Product from "./product"
import { useProductContext } from './context/productcontext';

export const Gridview = ({products}) => {

  const { isLoading } = useProductContext();

  if(isLoading){
    return  (<div style={{textAlign: "center"}}>
      <h3>Loading......</h3>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>        </div>
    )
   }

  return (
     <div>
        <div className="container fprdct">
          {
            products.map((curElm) =>{
              return <div className=' mx-5 my-3'> <Product key={curElm.id} {...curElm} /> </div>
            })
          }
        </div>
     </div>
  )
}

import React from 'react'
import FormatPrice from './helpers/formatprice';
import { NavLink } from 'react-router-dom';
import { useProductContext } from './context/productcontext';

export const Listview = ({products}) => {

   const { isLoading } = useProductContext();


   if(isLoading){
    return  (<div style={{textAlign: "center"}}>
      <h3>Loading......</h3>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>        </div>
    )
   }


  return (
    <div className='container px-4'>
          {
            products.map((curElm) => {
             const { id, name, image, price, description } = curElm;
             return(
               <div className='productlist my-5'>
                <div className='listimg' style={{width: "330px"}}>
                <NavLink className="flink" to={`/singleproduct/${id}`}>
                <figure>
                  <img style={{width: "300px", margin: "2% 4% 0 4%", borderRadius: "5px"}} src={image} alt={name} />
                </figure>
                </NavLink>
                </div>
                <div style={{margin: "2% 4%", width: "515px"}}>
                    <h3>{name}</h3>
                    <strong> <FormatPrice price={price} /></strong>
                    <NavLink className="flink" to={`/singleproduct/${id}`}>
                    <p style={{color: "black"}}>{description.slice(0,100)}..... <span>(show more)</span></p>
                    </NavLink>
                     <p>{id}</p>
                </div>
              </div>
              
             )
            })
          }
    </div>
  )
}

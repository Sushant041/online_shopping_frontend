import React, { useEffect } from 'react'
import { useProductContext } from './context/productcontext';
import { NavLink, useParams } from 'react-router-dom';
import SpImage from './spimage';
import FormatPrice from './helpers/formatprice';
import { TbReplace, TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import Star from './star';
import AddtoCart from './addtocart';



const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();


    const { id } = useParams();

    const { 
      //  id: alias,
       name,
       company,
       price,
       description,
      //  category,
       stock,
       stars,
       reviews,
       image
     } = singleProduct;

     useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
     }, []);

     if(isSingleLoading){
      return  (<div style={{textAlign: "center"}}>
        <h3>Loading......</h3>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>        </div>
      )
     }
  return (
    <div>

     <NavLink to="/products">
         <button className="btn btn-success mx-5 my-3">See Products</button>
     </NavLink>
     <div className="singlepro">

  {/* product images */}
      <div>
        <SpImage imgs={image}/>

      </div>

  {/* product data */}
      <div className="sprodata">  
      <h2>{name}</h2>
        <Star stars={stars} review={reviews} />
        <div>
        <strong>MRP :
          <del style={{marginLeft: "7px"}}>
            <FormatPrice price={price + 25000} />
          </del>
        </strong> 
        </div>
        <p>
        <strong>Deal of the Day : 
            <span style={{marginLeft: "7px"}}><FormatPrice price={price} /></span>
        </strong>
        </p>
        <p>{description}</p>

          <div className='spicon'>
            <div className='spiconc'>
              <TbTruckDelivery className="iconx" />
              <p>Free Delivery</p>
            </div>

            <div className='spiconc'>
              <TbReplace className="iconx" />
              <p>10 Days Replacement</p>
            </div>

            <div className='spiconc'>
              <MdSecurity className="iconx" />
              <p>1 Year Warranty</p>
            </div>
          </div>
        <div className='my-2'>
          <div>
          <div>
            Available:
           <strong>{stock > 0 ? "In Stock" : "Not Available"}</strong>
           </div>
           <div>
              ID: <span> {id} </span>
           </div>
           <div>
              Brand: <strong> {company} </strong>
           </div>
         </div>
           <hr />
           <div>
           { stock && <AddtoCart product={singleProduct}/>}
           </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default SingleProduct

import React, { useEffect } from 'react'
import { useProductContext } from './context/productcontext';
import { useParams } from 'react-router-dom';
import PageNavigation from './pagenavigation';
import SpImage from './spimage';
import FormatPrice from './helpers/formatprice';
import { TbReplace, TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"



const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();


    const { id } = useParams();

    const { 
       id: alias,
       name,
       company,
       price,
       description,
       category,
       stock,
       stars,
       reviews,
       image
     } = singleProduct;

     useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
     }, []);

     if(isSingleLoading){
      return  <h3>Loading......</h3>
     }
  return (
    <div>
     <PageNavigation title={name} />
     <div className="singlepro">

  {/* product images */}
      <div>
        <SpImage imgs={image}/>
      </div>

  {/* product data */}
      <div className="sprodata">
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>{reviews} reviews</p>
        <p>
        <strong>MRP :
          <del style={{marginLeft: "7px"}}>
            <FormatPrice price={price + 25000} />
          </del>
        </strong> 
        </p>
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
        <div>
          <p>Available: <strong>{stock > 0 ? "In Stock" : "Not Available"}</strong>
           </p>

           <p>
              ID: <span> {id} </span>
           </p>
           <p>
              Brand: <strong> {company} </strong>
           </p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default SingleProduct

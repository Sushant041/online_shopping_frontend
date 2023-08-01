import React, { useEffect } from 'react'
import { useProductContext } from './context/productcontext';
import { useParams } from 'react-router-dom';
import PageNavigation from './pagenavigation';


const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();


    const { id } = useParams();

    const { 
       id: alias,
       name,
       company,
       price,
       discription,
       category,
       stock,
       stars,
       reviews,
     } = singleProduct;

     useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
     })
  return (
    <div>
     <PageNavigation title={name} />
    </div>
  )
}

export default SingleProduct

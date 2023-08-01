import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helpers/formatprice";


const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink className="flink" to={`./singleproduct/${id}`}>
      <div className="fcard">
        <figure>
          <img src={image} alt={name} className="featureimg" />
          <figcaption className="fcap" >{category}</figcaption>
        </figure>
        <div className="fpbody">
          <strong>{name}</strong>
          <strong>{<FormatPrice price={price} />}</strong>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;

import React from "react";
import { useCartContext } from "./context/cartcontext";
import { CartItem } from "./cartitem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helpers/formatprice";

function Yourcart() {
  const { cart, clearcart, total_price, shipping_fee } = useCartContext();

  return (
    <div className="container">
      {cart.map((curElm) => {
        return (
          <div>
            <CartItem key={curElm.id} {...curElm} />
            <hr />
          </div>
        );
      })}
      {!cart.length && (
        <h2 style={{ marginTop: "15%" }}>
          Nothing in cart <hr />
        </h2>
      )}

      <div className="cendbtn">
        <NavLink to="/products">
          <button className=" btn btn-success">Continue Shopping</button>
        </NavLink>
          <button
            onClick={() => {
              clearcart();
            }}
            className=" btn btn-success"
          >
            Clear Cart
          </button>
          </div>
          <div className="card totalsec my-5 px-3 py-3">
            <div className="my-1">
              <strong>
                SubTotal :{" "}
                <span className="mx-2">
                  <FormatPrice price={total_price} />{" "}
                </span>
              </strong>
            </div>
            <div className="my-1">
              <strong>
                Shipping fee :{" "}
                <span className="mx-2">
                  <FormatPrice price={shipping_fee} />
                </span>
              </strong>
            </div>
            <hr className="my-1" />
            <div className="">
              <strong>
                Total price :{" "}
                <span className="mx-2">
                  <FormatPrice price={total_price + shipping_fee} />{" "}
                </span>
              </strong>
            </div>
          </div>
    </div>
  );
}

export default Yourcart;

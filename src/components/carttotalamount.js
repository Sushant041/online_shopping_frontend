import React from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";

const CartTotalAmount = ({ amount, setAmt }) => {
  
  return (
    <div>
      Curr Qty : {amount}
      {/* <span> Qty </span>
      <div className="carttotal">
        <button className="carttbtn" onClick={() => setDecrease()}>
            <FaMinus style={{ fontSize: "12px"}}/>
        </button>
        <div style={{marginLeft: "5px", fontSize: "18px"}} className='carttamt'>{amount}</div>
        <button className="carttbtn" onClick={() => setIncrease()}>
            <FaPlus style={{marginLeft: "6px",marginBottom: "2px", fontSize: "12px"}}/>
        </button>
      </div> */}

      <div className="dropdown">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            className="btn btn-success dropdown-toggle"
            onClick={(e) => {setAmt(e.target.value)}}
          >
            <option value="1" disabled>Qty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default CartTotalAmount;

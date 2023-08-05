import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from './context/filtercontext';


export const SortList = () => {

  const { grid_view, setGridview, setListview, filter_products, sort } = useFilterContext();

  return (
    <div  className='sortlist'>
       <div className='listt'>
        <button className={grid_view ? 'active2 sort-btn' : "sort-btn"} onClick={setGridview}>
          <BsFillGridFill className='listicon'/>
        </button>
        <button className={!grid_view ? 'active2 sort-btn' : "sort-btn"} onClick={setListview}>
          <BsList className='listicon'/>
        </button>
       </div>
       <div>
        <p><strong>{`${filter_products.length}`} Products Available</strong></p>
       </div>
       <div className="dropdown">
        <form action="#">
          <label htmlFor="sort"></label>
            <select className="btn btn-success dropdown-toggle" id="sort" onClick={sort}>         
              <option value="lowest" >Price(lowest)</option>
              <option value="highest" >Price(highest)</option>
              <option value="A - Z" >Price(A - Z)</option>
              <option value="Z - A" >Price(Z - A)</option>
            </select>
            </form>
          </div>
    </div>
  )
}

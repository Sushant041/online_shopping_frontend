import React from 'react'
import FormatPrice from "./helpers/formatprice"
// import {FaCheck} from "react-icons/fa"
import { useFilterContext } from './context/filtercontext';



export const FilterSection = () => {

  const {filters: { text, /*color,*/ price, maxprice, minprice }, all_products, updatefiltervalue, clearfilters } = useFilterContext();
  // const { , updatefiltervalue } = useFilterContext()

  //get unique data of each field
  const getUniquedata = (data, property) =>{

     let uniquedata = data.map((curElem) =>{
      return curElem[property];
    });

      if(property === "colors"){
        return uniquedata = ["All", ...new Set([].concat(...uniquedata))];
     }
     else {
       return uniquedata = ["All", ...new Set(uniquedata)];
     }
  }

  //uniquedata

  const catdata = getUniquedata(all_products, "category");
  const compdata = getUniquedata(all_products, "company");
  // const colordata = getUniquedata(all_products, "colors");

  return (

    <div className='filtersec'>

     <form className="d-flex my-2" role="search" onSubmit={(e) =>{e.preventDefault()}}>
      <input
               className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                name="text" value={text} onChange={updatefiltervalue}
              />
      </form>
    <div className="dropdown" >
          <label htmlFor="sort"></label>
      <select className="btn btn-success dropdown" name="category" id="category" onClick={updatefiltervalue}>
        <option value="All">Category</option>
        {
        catdata.map((curElem, index) =>{
             return <option key={index} value={curElem}>{curElem}</option>
           })
           }
       </select>
    </div>
    <div className="dropdown">
          <label htmlFor="sort"></label>
      <select className="btn btn-success dropdown" name="company" id="company" onClick={updatefiltervalue}>
      <option value="All">Company</option>
        {
        compdata.map((curElem, index) =>{
             return <option key={index} value={curElem}>{curElem}</option>
           })
           }
       </select>
    </div>
        {/* <div>
          <strong style={{color: "white"}}> Colors : </strong>
          <p className='colcheck'  id="color">
          {
            colordata.map((curElm, index) =>{
             return ( 
                <button 
                name="color"
                value={curElm} 
                className='itmcolor' 
                type='button' 
                style={{backgroundColor: curElm}} 
                key={index} 
                onClick={updatefiltervalue}
                >
                  {color === curElm ? <FaCheck className="checkcol" /> : null}
               </button>
             )
            })
          }
          </p>
        </div> */}
        <div style={{color: "white"}}>
          <h5 style={{textAlign: "center"}}>Price</h5>
          <p style={{margin: "0"}}>
            <FormatPrice price={price} />
            </p>
          <input name="price"
           value={price} type="range" min={minprice} max={maxprice}
           onChange={updatefiltervalue}
           />
        </div>
        <div>
          <button type='button' className='btn btn-success'
           onClick={clearfilters} >
            Clear Filters
          </button>
        </div>
    </div>
  )
}

import React from 'react'
import { useFilterContext } from './context/filtercontext'
import { Gridview } from './girdview';
import { Listview } from './listview';


export const ProductList = () => {

  const { filter_products, grid_view} = useFilterContext();
   
  if(grid_view){
    return <div>
      <Gridview id="grid" products={filter_products}/>
      </div>
  }
  
  if(grid_view !== true){
    return <Listview id="list" products={filter_products}/>;
  }

}

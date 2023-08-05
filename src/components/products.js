import React from 'react'
import { FilterSection } from './filtersection'
import { SortList } from './sort'
import { ProductList } from './productlist'


function Products() {

  return (
    <div className='products'>

      <div className='filtersec'>
        <FilterSection/>
      </div>

      <div className='prodsec2'>

        <div>
          <SortList/>
        </div>

        <div>
          <ProductList/>
        </div>

      </div>
    </div>
  )
}

export default Products
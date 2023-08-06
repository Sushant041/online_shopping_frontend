import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterreducer";


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "All",
        company: "All",
        price: 500000,
        maxprice: 0,
        minprice: 0,
    },
}

export const FilterContextProvider = ({ children }) =>{

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)


    // max and min price
    const prc = state.all_products;
   
    let prc2 = prc.map((curElem) =>{
      return [curElem.price];
    })
    let prc3 = Math.max(...prc2);
    state.filters.maxprice = prc3;


    //Set grid view
    const setGridview = () => {
       return dispatch({ type: "SET_GRID_VIEW"});
    };

    //Set list view
    const setListview = () => {
        return dispatch({ type: "SET_LIST_VIEW"});
     };

     //sorting function
     const sort = (e) =>{
        let sortval = e.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: sortval})
     };

     //sorting products
     useEffect(() => {
       dispatch({type: "FILTER_PRODUCTS"})
       dispatch({type: "SORT_PRODUCTS"})
     }, [products, state.sorting_value, state.filters])

     //update filter value
     const updatefiltervalue = (e) =>{
         let name = e.target.name;
         let value = e.target.value;
         return dispatch({type : "UPDATE_FILTER", payload: { name, value }})
     }

      // clear filters
    const clearfilters = () =>{
        dispatch({type: "CLEAR_FILTERS"})
    }
     

    useEffect(() =>{
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);
    return (
        <FilterContext.Provider value={{ ...state, setGridview, setListview, sort, updatefiltervalue, clearfilters }}>
            {children}
        </FilterContext.Provider>
    );
};


export const useFilterContext = () =>{
    return useContext(FilterContext);
}

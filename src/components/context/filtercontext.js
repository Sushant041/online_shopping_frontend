import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterreducer";


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest"
}


export const FilterContextProvider = ({ children }) =>{

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)


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
       dispatch({type: "SORT_PRODUCTS"})
     
     }, [products,state.sorting_value])
     

    useEffect(() =>{
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);
    return (
        <FilterContext.Provider value={{ ...state, setGridview, setListview, sort }}>
            {children}
        </FilterContext.Provider>
    );
};


export const useFilterContext = () =>{
    return useContext(FilterContext);
}

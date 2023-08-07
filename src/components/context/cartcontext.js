import { createContext, useContext, useEffect, useReducer } from "react";
import  reducer  from "../reducer/cartreducer"


const CartContext = createContext();

const getcartdata = () =>{
    let cartdata = localStorage.getItem("cartdata");

    if(cartdata.length === 0){
        return [];
    }
    else{
        return JSON.parse(cartdata);
    }
}

const initialState = {
    cart: getcartdata(),
    total_items: 0,
    shipping_fee: 5000,
}
const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)


    const addToCart = (id, color, amount, product) =>{
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
    }

    //removeitem
    const removeitem = (id)=>{
        dispatch({type: "REMOVE", payload: id});
    }
    
    //clearcart
    const clearcart = ()=>{
        dispatch({type: "CLEAR"});
    }
    //storecartdata
    useEffect(() => {
       dispatch({type: "TOTAL_ITEM"});
        localStorage.setItem("cartdata", JSON.stringify(state.cart))
  
    }, [state.cart])
    

    return <CartContext.Provider value={{...state, addToCart, removeitem, clearcart }}>
        {children}
    </CartContext.Provider>
};


const useCartContext = () =>{
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
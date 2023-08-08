 const CartReducer = (state, action) => {
   
    if (action.type === "ADD_TO_CART") {

            let {id, color, amount, product } = action.payload;
      

            //existingcart
            let existingcart = state.cart.find((curElm) => curElm.id === id + color)

           if(existingcart){
               
                let updatecart = state.cart.map((curElm) =>{
                   
                    if(curElm.id === id + color){
                        let newamt = curElm.amount + amount;

                          if(newamt >= curElm.max){
                            newamt = curElm.max;
                          }
                        return {
                            ...curElm,
                            amount: newamt
                        }
                    }
                    else{
                    return curElm; 
                    }
                })
               return {
                ...state,
                cart: updatecart,
               }
           }
          else{
            let cartProduct;

            cartProduct = {
                id: id + color ,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }

            let updatecart = [...state.cart, cartProduct]
             
            return{
                ...state,
                cart: updatecart,
            }

          }
        }
        if(action.type === "CHANGE"){

            let { amount, id } = action.payload;

            let updatecart = state.cart.map((curElm) =>{
                 
                if(curElm.id === id){

                    return {
                        ...curElm,
                        amount: amount,
                    }
                }
    
                else{
                  return curElm;
                }
            })
            return {
                ...state,
                cart: updatecart,
            }
        }

       if(action.type === "TOTAL_PRICE"){
              
            let total_price = state.cart.reduce((initialval, curElm) =>{
              
                let { price, amount} = curElm;
                initialval = initialval + price * amount ;
                return initialval;
            }, 0)

             return{
                    ...state,
                    total_price,
                }
        }
          
        // if(action.type === "TOTAL_ITEM_PRICE"){

        //     let {total_price, total_items} = state.cart.reduce((initialval, curElm) =>{
                
        //         let { amount, price } = curElm;

        //         initialval.total_items +=  + amount ;
        //         initialval.total_price +=  + price * amount ;

        //         return initialval;
        //     }, {
        //         total_items: 0,
        //         total_price: 0,
        //     }) 
        //     return {
        //         ...state,
        //         total_items,
        //         total_price,
        //     } 
        // }

        if(action.type === "REMOVE"){

            let tempcart = state.cart.filter((curElm) => 
                curElm.id !== action.payload )

            return{
                ...state,
                cart: tempcart,
            }
        }
        
        if(action.type === "TOTAL_ITEM"){
            let items = state.cart.reduce((initialval, curElm) =>{
                
                let { amount } = curElm;
                initialval = 1 * initialval + 1 * amount ;
                return initialval;
            }, 0)

            return{
                ...state,
                total_items: items,
            }
        }

        if(action.type === "CLEAR"){
            return{
                ...state,
                cart: [],
            }
        }
}


export default  CartReducer;

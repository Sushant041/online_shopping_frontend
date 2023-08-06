

export const CartReducer = (state, action) => {
   
    switch (action.type) {
        case "ADD_TO_CART":
            let {id, color, amount, product } = action.payload;
            console.log(product);
            return 0;
    
        default:
            break;
    }
}

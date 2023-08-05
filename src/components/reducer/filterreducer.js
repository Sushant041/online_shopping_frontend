const filterReducer = (state, action) =>{

    switch (action.type){
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }

         case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view: true,
            }
        case "SET_LIST_VIEW":
                return{
                    ...state,
                    grid_view: false,
                }

        case "GET_SORT_VALUE":
            return{
                ...state,
                sorting_value: action.payload,
            }
        case "SORT_PRODUCTS":
            let sortData;
            
           const { filter_products, sorting_value } = state; 

            let tempsort = [...filter_products]


            const sortingproducts = (a, b) =>{

              if(sorting_value === "lowest"){
                    return a.price - b.price;
               }

              if(sorting_value === "highest"){
                    return b.price - a.price;
              }

              if(sorting_value === "A - Z") {
                return a.name.localeCompare(b.name);
             }
              

              if(sorting_value === "Z - A") {
                   return b.name.localeCompare(a.name);
              }
             
            }
             sortData =  tempsort.sort(sortingproducts);

        return{
            ...state,
            filter_products: sortData,
        }
        default:
            return state;
    }
    
};

export default filterReducer;
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
        case "UPDATE_FILTER":
            const { name, value } = action.payload;

            return {
               ...state,
               filters: {
                 ...state.filters,
                 [name]: value, 
               }
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempfilterproduct = [...all_products];

            const { text, category, company, price } = state.filters;

            if(text){
                tempfilterproduct = tempfilterproduct.filter((curElm) =>{
                    return curElm.category.includes(text) || curElm.name.toLowerCase().includes(text)
                     })
            }
            if(category !== "All"){
                tempfilterproduct = tempfilterproduct.filter((curElm) =>{
                    return curElm.category === category;
                })
            }
            if(company !== "All"){
                tempfilterproduct = tempfilterproduct.filter((curElm) =>{
                    return curElm.company.includes(company);
                })
            }
            if(price){
                tempfilterproduct = tempfilterproduct.filter(
                    (curElm) => curElm.price <= price);
            }
            return{
                ...state,
               filter_products: tempfilterproduct,
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    company: "All",
                    price: 0,
                    maxprice: 0,
                    minprice: 0,
                }
            }

        default:
            return state;
    }
    
};

export default filterReducer;
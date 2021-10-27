import { GET_PRODUCTS, GET_CATEGORIES, FILTER_BY_CATEGORY } from "../actions/const";

const initialState={
    products: [],
    cart: [],
    product: {},
    user: {},
    categories: [],
}

function reducer(state= initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
        }         
}


export default reducer;




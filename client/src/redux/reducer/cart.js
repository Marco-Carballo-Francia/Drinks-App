import { ADD_CART, GET_CART, DELETE_CART_ITEM } from "../actions/const";
const initialstate= {
	cart: []
}



export function cartReducer (state=initialstate, action){
	switch(action.type){
		case ADD_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }

        case GET_CART:  
            return {
                ...state,
                cart: state.cart
            }

        case DELETE_CART_ITEM: 
            return {
                ...state,
                cart: state.cart.filter(x => x._id !== action.payload)
            }
        default: 
        return state;    
	}
}
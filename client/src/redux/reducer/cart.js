import { ADD_CART, GET_CART, DELETE_CART_ITEM, SET_TOTAL, DELETE_CART_ONE,  DELETE_CART_ALL } from "../actions/const";
const initialstate = {
  cart: [],
  total: 0,
  ticket: {}
};

export function cartReducer(state = initialstate, action) {
  switch (action.type) {
     case ADD_CART:
    //   let product = action.payload;
    //   let cartProducts = [...state.cart];
    //   let productFiltered = cartProducts.filter((x) => x._id === product._id);
    //   if (productFiltered?.length) {
    //     productFiltered[0].qty
    //     ? (product = {
    //       ...productFiltered[0],
    //       qty: productFiltered[0].qty + 1,
    //     })
    //     : (product = { ...productFiltered[0], qty: 1 });
    //     cartProducts = cartProducts.filter((x) => x._id !== product._id);

    //     let cartLocalS = [...cartProducts, product]
    //     localStorage.setItem("cartLocal", JSON.stringify(cartLocalS));
    //     return {
    //       ...state,
    //       cart: [...cartProducts, product]
    //     };
    //   }
    //   product = { ...product, qty: 1 };
    //   let cartLocalS = [...cartProducts, product]
    //   localStorage.setItem("cartLocal", JSON.stringify(cartLocalS));
       return {
         ...state,
        cart: state.cart.concat(action.payload)
       };

    case GET_CART:
      
      return {
        ...state,
        cart: action.payload
      };

    case DELETE_CART_ITEM:
      let filtered = state.cart.filter((x) => x._id !== action.payload)
      localStorage.setItem("cartLocal", JSON.stringify(filtered));
      return {
        ...state,
        cart: filtered
      };

    case SET_TOTAL:
      return {
        ...state,
        total: action.payload
      }
    
    case "RESET_CART":
      localStorage.clear();
      return {
        ...state,
        cart: [],
        total: 0
      }

    case  DELETE_CART_ONE:

    return {
      ...state,
      cart: action.payload
    } 

    case  DELETE_CART_ALL:

    return {
      ...state,
      cart: action.payload
    }

    default:
      return state;
  }
}

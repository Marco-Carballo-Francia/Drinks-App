import { ADD_CART, GET_CART, DELETE_CART_ITEM } from "../actions/const";
const initialstate = {
  cart: [],
};

export function cartReducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_CART:
      let cartProducts = [...state.cart];
      let product = { ...action.payload };
      let productFiltered = cartProducts.filter((x) => x._id === product._id);
      console.log("FILTERED", productFiltered)
      if (productFiltered?.length) {
        productFiltered[0].qty
          ? product = { ...productFiltered[0], qty: productFiltered[0].qty + 1 }
          : product = { ...productFiltered[0], qty: 1 };
        cartProducts = cartProducts.filter((x) => x._id !== product._id);
        return {
          ...state,
          cart: [...cartProducts, product],
        };
      } 
        product = { ...product, qty: 1 };
        return {
          ...state,
          cart: state.cart.concat(product),
        };

    case GET_CART:
      return {
        ...state,
        cart: state.cart,
      };

    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((x) => x._id !== action.payload),
      };
      
    default:
      return state;
  }
}

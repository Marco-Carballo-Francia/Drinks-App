import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from "../reducer/cart.js";
import {productsReducer} from "../reducer/products.js";
import {userReducer} from "../reducer/user.js";
import {functionalityReducer} from "../reducer/functionality.js";
import thunk from "redux-thunk" ;



const store= createStore(
	combineReducers({
		cart: cartReducer,
		products: productsReducer,
		user: userReducer,
		functionality: functionalityReducer
	}), composeWithDevTools(
		applyMiddleware(thunk) 
	));

export default store;
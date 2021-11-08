import { AUTH, LOGOUT, REGISTER_LOCAL } from "../actions/const.js";


const initialState = {
	user: null	
}



export function userReducer(state=initialState, action){
	switch(action.type){
		case AUTH:
			localStorage.setItem('profile', JSON.stringify({...action?.data})); 
			return {
				...state,
				user: action?.data
			};
		case LOGOUT: 
			localStorage.clear(); //limpia la localstorage, entonces el useEffect del navBar va a comprobar que  user=null
			//me parece redundante hacer el user:null , ya que se maneja todo por localstorage, pero bueno.
			return{
				...state,
				user: null
			}	
			case REGISTER_LOCAL:
			return {
				...state,
				user: action.payload
			};
		default: 
		return state;
	}
}
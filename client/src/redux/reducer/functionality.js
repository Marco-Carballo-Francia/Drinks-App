import { SET_MODAL } from "../actions/const";
const initialState= {
	modal: false
}


export function functionalityReducer(state=initialState, action){
	switch(action.type){
		case SET_MODAL:  
            return {
                ...state,
                modal: action.payload
            } 
        default: 
			return state;           
	}
}
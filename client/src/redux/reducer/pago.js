import { DATOS_COMPRA } from "../actions/const"

const initialState = {
    form: {}
}

export function pagoReducer (state = initialState, action) {
    switch(action.type){
        case DATOS_COMPRA:
            return {
                ...state,
                form: action.payload
            }
            default:
                return state;
    }
}
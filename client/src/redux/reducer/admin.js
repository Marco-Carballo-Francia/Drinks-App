import { GET_ADMIN_ITEMS, GET_TICKETS_ADMIN, DELETE_TICKET, CHANGE_TICKET_STATUS, GET_USERS, SET_ITEM } from "../actions/const.js";

const initialState = {
    items: [],
    item: {},
    ticketsPending: [],
    ticketsProcessing: [],
    ticket: {},
    ticketsReady: [],
    user: {},
    users: [],
} 
 
export function adminReducer (state = initialState, action ) {
    switch(action.type) {
        case GET_ADMIN_ITEMS: 
            return {
                ...state,
                items: action.payload
            }
        case GET_TICKETS_ADMIN:
            return{
                ...state,
                ticketsPending: action.payload.pending,
                ticketsProcessing: action.payload.processing
            }
        case DELETE_TICKET:
            return {
                ...state,
                ticket: null
            }
        case CHANGE_TICKET_STATUS:
            return {
                ...state,
                ticketsPending: action.payload.pending,
                ticketsProcessing: action.payload.processing,
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_ITEM:
            return{
                ...state,
                item: action.payload
            }
        case "SET_TICKET":
            return {
                ...state,
                ticket: action.payload
            }
        case "SET_USER":
            let u = state.users.filter(x => x._id === action.payload)
            return {
                ...state,
                user: u[0]
            }
        case "DELETE_TICKET":
            return {
                ...state,
                ticket: null
            }
        default:
            return state;
    }
}
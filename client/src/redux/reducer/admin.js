import { GET_ADMIN_ITEMS, GET_TICKETS_ADMIN, DELETE_TICKET, CHANGE_TICKET_STATUS } from "../actions/const.js";

const initialState = {
    items: [],
    ticketsPending: [],
    ticket: {},
    ticketsReady: [],
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
                ticketsPending: action.payload,
            }
        case DELETE_TICKET:
            return {
                ...state,
                ticket: null
            }
        case CHANGE_TICKET_STATUS:
            const { tickets } = action.payload;
            return {
                ...state,
                ticketsPending: tickets.pending,
                ticketsReady: tickets.processing
            }
            // return {
            //     ...state,
            //     ticketsPending: state.ticketsPending.filter(x => x.id !== action.payload.id),
            //     ticketsReady: [...state.ticketsReady, action.payload]
            // }
        default:
            return state;
    }
}
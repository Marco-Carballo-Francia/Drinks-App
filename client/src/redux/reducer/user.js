import { AUTH, LOGOUT, REGISTER_LOCAL, GET_TICKETS, LOGIN_GOOGLE, LOGIN_LOCAL, EDIT_DATE_PROFILE,GET_PRODUCTS_FAVORITOS } from "../actions/const.js";

const initialState = {
  user: JSON.parse(localStorage.getItem('profile')),
  tickets: [],
  favoritos: [],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("user", JSON.stringify(action.payload));
/*       localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
 */      return {
        ...state,

        user: localStorage.setItem("profile", JSON.stringify({ ...action?.data }))

      };
    case LOGOUT:
      localStorage.clear(); //limpia la localstorage, entonces el useEffect del navBar va a comprobar que  user=null
      //me parece redundante hacer el user:null , ya que se maneja todo por localstorage, pero bueno.
      return {
        ...state,
        user: null,
      };
    case REGISTER_LOCAL:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_LOCAL:
      let getUser = action.payload;
      localStorage.setItem("user", JSON.stringify(getUser));
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user"))
      };
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case LOGIN_GOOGLE:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        user: action.payload,
      }
    case "CHECK_USER":
      return state;

    case EDIT_DATE_PROFILE:
      return {
        ...state,
        user: action.payload,
      }

    case GET_PRODUCTS_FAVORITOS:
      return{
        ...state,
        favoritos: action.payload
      }
    default:
      return state;
  }
}

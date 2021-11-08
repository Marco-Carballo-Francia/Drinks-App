import { AUTH, LOGOUT, REGISTER_LOCAL, GET_TICKETS, LOGIN_GOOGLE, LOGIN_LOCAL } from "../actions/const.js";

const initialState = {
  user: null,
  tickets: [],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        user: action?.data,
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
    default:
      return state;
  }
}

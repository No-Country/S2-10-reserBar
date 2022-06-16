import { GET_USER } from "../actions/usersActions";
import { GET_BAR} from "../actions/usersActions"
import {TRAER_USUARIO} from "../actions/usersActions"
const initialState = {
  token: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        token: action.payload.token,
        data: action.payload.user
      };
    case GET_BAR:
        return {
          ...state,
          token: action.payload.token,
          data: action.payload.bar
        };
    case TRAER_USUARIO:
      return {
        ...state,
        data:action.payload.user
      }
    default:
      return state;
  }
};

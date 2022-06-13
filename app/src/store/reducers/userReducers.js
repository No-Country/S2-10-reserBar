import { GET_USER } from "../actions/usersActions";

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

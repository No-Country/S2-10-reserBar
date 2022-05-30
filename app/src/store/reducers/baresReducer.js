import { GET_BARES } from "../actions/baresActions";

const initialState = {
  bars: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BARES:
      return {
        ...state,
        bars: action.payload,
      };
    default:
      return state;
  }
};

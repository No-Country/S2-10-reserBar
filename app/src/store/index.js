import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import baresReducer from "./reducers/baresReducer";
import userReducers from "./reducers/userReducers";

const RootReducer = combineReducers({
  bars: baresReducer,
  token: userReducers,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;

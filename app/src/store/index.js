import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import baresReducer from "./reducers/baresReducer";

const RootReducer = combineReducers({
  bars: baresReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;

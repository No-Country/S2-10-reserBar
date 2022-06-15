import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import baresReducer from "./reducers/baresReducer";
import userReducers from "./reducers/userReducers";

import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig={
  key:'main-root',
 storage,
}


const RootReducer = combineReducers({
  bars: baresReducer,
  user: userReducers
});

const persistedReducer = persistReducer(persistConfig,RootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(store)

export {Persistor}
export default store;

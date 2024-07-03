import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { thunk } from "redux-thunk";
import { userReducer } from "./Reducers/UserReducers";

const combinedReducers = combineReducers({
  userReducer: userReducer,
});

const middleware = applyMiddleware(thunk);
const store = createStore(combinedReducers, middleware);
export { store };

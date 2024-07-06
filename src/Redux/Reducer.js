import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { thunk } from "redux-thunk";
import { userReducer } from "./Reducers/UserReducers";
import { TodoReducers } from "./Reducers/TodoReducers";

const combinedReducers = combineReducers({
  userReducer: userReducer,
  TodoReducers: TodoReducers,
});

const middleware = applyMiddleware(thunk);
const store = createStore(combinedReducers, middleware);
export { store };

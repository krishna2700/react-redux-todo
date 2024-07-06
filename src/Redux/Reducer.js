import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { PhotoReducer } from "./Reducers/PhotoReducer";
import { TodoReducers } from "./Reducers/TodoReducers";
import { userReducer } from "./Reducers/UserReducers";

const combinedReducers = combineReducers({
  userReducer: userReducer,
  TodoReducers: TodoReducers,
  PhotoReducer: PhotoReducer,
});

const middleware = applyMiddleware(thunk);
const store = createStore(combinedReducers, middleware);
export { store };

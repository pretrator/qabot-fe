import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "@Reducers/combinedReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware: any = []

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modals";
import { newsApi } from "../api";

const rootReducer = combineReducers({
  modals: modalReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});

export default rootReducer;

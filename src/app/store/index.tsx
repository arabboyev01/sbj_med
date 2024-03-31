import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducer from "./reducer";
import { newsApi } from "./api";

const store = configureStore({
  reducer,
  middleware: (gdm) => gdm().concat(newsApi.middleware),
});

setupListeners(store.dispatch);

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;

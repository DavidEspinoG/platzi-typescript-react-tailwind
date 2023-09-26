import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: productsSlice.reducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
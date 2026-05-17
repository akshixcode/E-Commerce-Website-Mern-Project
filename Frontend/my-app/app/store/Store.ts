import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./Slices/testSlice";
import user from "./Slices/authSlice";
import productReducer from "./Slices/productSlice";
export const store = configureStore({
  reducer: {
     test: testReducer,
     user: user,  
      products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
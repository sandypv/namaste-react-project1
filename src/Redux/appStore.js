import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

//this reducer is the whole app Store reducer.The reducer used in cartSlice is individual slice reducers.
//So all the slices reducers are added to the appStore reducer.
const appStore = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

export default appStore;

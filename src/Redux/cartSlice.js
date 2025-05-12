import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state
      //Redux uses immer library behind the scenes to mutate the state.
      state.items.push(action.payload); //payload is data being sent or received
    },
    removeItem: (state) => {
      state.items.pull();
    },
    clearCart: (state) => {
      state.items.length = 0;
    }, 
  },
  
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

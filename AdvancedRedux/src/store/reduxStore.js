import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isShown: true,
    items: [
      { id: 1, title: "Ljudi", quantity: 3, price: 6 },
      { id: 2, title: "Zviri", quantity: 2, price: 8 },
      { id: 3, title: "Djiboni", quantity: 1, price: 6 },
    ],
  },
  reducers: {
    addItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if(index === -1){
          state.items.push({...action.payload, quantity:1 });
          return;
      }
      state.items[index].quantity++;
    },
    increaseItemNumber(state, action) {
        state.items.find((item) => item.id === action.payload).quantity++;

    //   const index = state.items.findIndex((item) => item.id === action.payload);
    //   state.items[index].quantity++;
    },
    decreaseItemNumber(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
        return;
      }
      state.items[index].quantity--;
    },
    showCart(state) {
      state.isShown = true;
    },
    hideCart(state) {
      state.isShown = false;
    },
    togleCart(state) {
      state.isShown = !state.isShown;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;

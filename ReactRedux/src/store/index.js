import { createSlice, configureStore } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter",
  initialState: { val: 0 },
  reducers: {
    increment(state) {
      state.val++;
    },
    decrement(state) {
      state.val--;
    },
    increase(state, action) {
      state.val += action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

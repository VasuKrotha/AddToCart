import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./listslice";

const store = configureStore({
  reducer: {
    cart: taskReducer,
  },
});

export default store;

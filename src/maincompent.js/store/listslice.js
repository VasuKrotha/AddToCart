import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartlist: [],
  total: 0,
};

const listslice = createSlice({
  name: "listslice",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const updateitem = state.cartlist.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, total: total, cartlist: updateitem };
    },
    removefromcart: (state, action) => {
      const removeitem = state.cartlist.filter(
        (cart) => cart.id !== action.payload.id
      );
      const removeprice = state.cartlist.find(
        (item) => item.id === action.payload.id
      );
      const total = state.total - removeprice.price;
      return { ...state, total: total, cartlist: removeitem };
    },
  },
});

export const taskReducer = listslice.reducer;

export const { addtocart, removefromcart } = listslice.actions;

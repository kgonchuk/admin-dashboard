import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./orderOperation";

const initialState= {
  orders: [],
  isLoading: false,
  error: null,
};

const orderSlice= createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder
    .addCase(fetchOrders.pending, (state)=>{
      state.isLoading= true;
      state.error= null;
    })
    .addCase(fetchOrders.fulfilled, (state, action)=>{
      state.isLoading= false;
      state.orders= action.payload;
    })
    .addCase(fetchOrders.rejected, (state, action)=>{
      state.isLoading= false;
      state.error= action.payload;
    })
  }
});

    
export const orderReducer=orderSlice.reducer;
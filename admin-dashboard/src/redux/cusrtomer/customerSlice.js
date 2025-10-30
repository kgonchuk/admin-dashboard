import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomers } from "./customerOperation";

const initialState= {
  customers: [],
  isLoading: false,
  error: null,
};

const customerSlice= createSlice({
  name: 'customer',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const customerReducer = customerSlice.reducer;   
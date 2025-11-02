import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboard } from "./dashboardOperation";

const initialState = {
  allProducts: null,
  allSuppliers: null,
  allCustomers: null,
  recentCustomers: [],
  incomeExpenses: [],
  isLoading: false,
  isError: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
     // Визначаємо, де знаходяться актуальні дані: 
     const dataRoot = action.payload?.data || action.payload;

     // Якщо dataRoot - це валідний об'єкт, оновлюємо стан
     if (dataRoot && typeof dataRoot === 'object') {
        state.allProducts = dataRoot.allProducts;
        state.allSuppliers = dataRoot.allSuppliers;
        state.allCustomers = dataRoot.allCustomers;
        state.recentCustomers = dataRoot.lastCustomers;
        state.incomeExpenses = dataRoot.incomeExpenses;
     }
     
     // Встановлюємо статус завантаження
     state.isLoading = false;
     state.isError = null;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const dashboardReducer = dashboardSlice.reducer;   

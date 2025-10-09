import { createSlice } from "@reduxjs/toolkit";
import { addSupplier, fetchSuppliers, updateSupplier } from "./supplierOperation";

const initialState = {
    suppliers: [],
    loading: false,
    error: null,

};  

const supplierSlice= createSlice({
    name: "supplier",
    initialState: initialState,
    reducers: {
        resetSupplierState: (state) => {
            state.loading = false;
            state.error = null;

        },
    },
    extraReducers: (builder) => {
        builder
            // === FETCH SUPPLIERS ===
            .addCase(fetchSuppliers.fulfilled, (state, action) => {
                state.loading = false;
                state.suppliers = action.payload;

            })
            .addCase(fetchSuppliers.pending, (state) => {
                state.loading = true;
                state.error = null;
            }   ) 
            .addCase(fetchSuppliers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addSupplier.pending, (state) => {  
                state.loading = true;
                state.error = null;
            })
            .addCase(addSupplier.fulfilled, (state, action) => {
                state.loading = false;
                state.suppliers.push(action.payload);
            })
            .addCase(addSupplier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateSupplier.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSupplier.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.suppliers.findIndex(supplier => supplier.id === action.payload.id);
                if (index !== -1) {
                    state.suppliers[index] = action.payload;
                }
            })
            .addCase(updateSupplier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });    
    }
});

export const { resetSupplierState } = supplierSlice.actions;
export const supplierReducer = supplierSlice.reducer;              
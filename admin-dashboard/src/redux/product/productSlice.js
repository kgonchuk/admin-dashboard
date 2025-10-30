import { createSlice } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "./productOperation"

const initialState={
    products:[],
    loading: false,
    error: null,

}

const productSlice=createSlice({
name:"product", 
initialState: initialState,
reducers:{},
 extraReducers: (builder) => {
        builder
            // === FETCH Products ===
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;

            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            }   ) 
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // ==== ADD Products ====
              .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                 state.products.push(action.payload);
            })
        
        .addCase(addProduct.pending,(state, action)=>{
        state.loading = true;
        state.error = null;
         })
           .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
                // ==== DELETE PRODUCT ====
       .addCase(deleteProduct.fulfilled, (state, action) => {
            const deletedId = action.payload; 
            state.products = state.products.filter(
                product => product._id !== deletedId 
            );
            state.loading = false;
        })
        
.addCase(deleteProduct.rejected, (state, action)=>{
    state.loading = false;
    state.error = action.payload;
}) 
.addCase(deleteProduct.pending,(state)=>{
     state.loading = true;
        state.error = null;
})
// === UPDATE PRODUCT ===
.addCase(updateProduct.fulfilled, (state, action)=>{
      state.loading = false;
      const index = state.products.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
      state.products[index] = action.payload;
                }
})
}
}
   
)

export const productReducer=productSlice.reducer

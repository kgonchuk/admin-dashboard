import { createSlice } from "@reduxjs/toolkit"
import { addProduct, fetchProducts } from "./productOperation"

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

           
    }
}
   
)

export const productReducer=productSlice.reducer

import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";


export const instance = axios.create({
  baseURL: 'https://admin-dashboard-backend-1-76pt.onrender.com/api',
});

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`; // ✅ Це обов'язково
};

// GET ALL PRODUCTS
export const fetchProducts= createAsyncThunk(
"products/fetchProducts", async(_, thunkAPI)=>{

const state= thunkAPI.getState();
const persistedToken = state.auth.accessToken;

if (!persistedToken) { // ✅ Перевірка на null/undefined
            return thunkAPI.rejectWithValue("No authentication token found.");
        }

    try{
instance.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
const res = await instance.get(`/products`);
if (!res.data || res.data.length === 0) {
                 // Тут можна обробити випадок, коли API повертає []
            }
            
            return res.data;
    }catch(err){
      console.error("Fetch Products Error:", err.response?.data || err.message);
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch products');
    }
}
)

// ADD NEW PRODUCT

export const addProduct=createAsyncThunk(
  "products/addProduct",
  async (productData, {rejectWithValue})=>{
try{
const res=await instance.post('/products', productData)
return res.data
}catch(err){
  console.log(err)
  return rejectWithValue(err.response?.data?.message || 'Failed to fetch products')
}
})
// DELETE PRODUCT

export const deleteProduct=createAsyncThunk(
  "products/deleteProducts", async(productId, thunkAPI)=>{
  try{
await instance.delete(`/products/${productId}`); 
      return productId;
  }catch(err){
console.error("Delete Product Error:", err.response?.data || err.message);
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to delete product'); 
  }
})
//  UPDATE PRODUCT

export const updateProduct=createAsyncThunk("products/updateProducts", async({productId, updateData}, thunkAPI)=>{
try{
await instance.put(`/products/${productId}`, updateData); 
}catch(err){
  console.error("Update Product Error:", err.response?.data || err.message);
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to update product'); 
}

})
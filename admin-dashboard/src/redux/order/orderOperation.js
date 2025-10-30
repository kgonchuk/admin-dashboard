import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://admin-dashboard-backend-1-76pt.onrender.com/api',
});

export const fetchOrders= createAsyncThunk(
"orders/fetchOrders", async(_, thunkAPI)=>{

const state= thunkAPI.getState();
const persistedToken = state.auth.accessToken;

if (!persistedToken) { // ✅ Перевірка на null/undefined
            return thunkAPI.rejectWithValue("No authentication token found.");
        }

    try{
instance.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
const res = await instance.get(`/orders`);
if (!res.data || res.data.length === 0) {
                 // Тут можна обробити випадок, коли API повертає []
            }
            
            return res.data;
    }catch(err){
      console.error("Fetch Orders Error:", err.response?.data || err.message);
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch orders');
    }
}
)
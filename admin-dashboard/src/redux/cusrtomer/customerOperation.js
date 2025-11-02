import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";

export const instance = axios.create({
  baseURL: 'https://admin-dashboard-backend-1-76pt.onrender.com/api',
});
export const fetchCustomers= createAsyncThunk(
"customers/fetchCustomers", async(_, thunkAPI)=>{

const state= thunkAPI.getState();
const persistedToken = state.auth.accessToken;

if (!persistedToken) { // ✅ Перевірка на null/undefined
            return thunkAPI.rejectWithValue("No authentication token found.");
        }

    try{
 const res = await instance.get(`/customers`); 
      const formatDatedSuppliers = res.data.map((supplier) => ({
        ...supplier,
        date: format(new Date(supplier.date), "MMMM dd, yyyy"),
      }));
      return formatDatedSuppliers;
    }catch(err){
     toast.error("ERROR, Connection error");
     
     
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch customers');
    }
}
)   
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  format } from "date-fns";


const API_URL = 'https://admin-dashboard-backend-1-76pt.onrender.com/api';

export const instance = axios.create({
  baseURL: 'https://admin-dashboard-backend-1-76pt.onrender.com/api',
});

// Функція для встановлення токена
export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

// Fetch all suppliers

export const fetchSuppliers = createAsyncThunk(
  "suppliers/fetchSuppliers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get(`/suppliers`); 
      const formatDatedSuppliers = res.data.map((supplier) => ({
        ...supplier,
        date: format(new Date(supplier.date), "MMMM dd, yyyy"),
      }));
      return formatDatedSuppliers;

    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch suppliers');
    }    });

// Add a new supplier

export const addSupplier = createAsyncThunk(
  "suppliers/addSupplier",
  async (supplierData, { rejectWithValue }) => {
    try {
      const res = await instance.post(`/suppliers`, supplierData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to add supplier');
    }
  }
);
// Update a supplier

export const updateSupplier = createAsyncThunk(
  "suppliers/updateSupplier",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      // ВИПРАВЛЕНО: Використовуємо конфігурований instance замість axios
      const res = await instance.put(`/suppliers/${id}`, updatedData);
      
      // Додаємо форматування дати перед поверненням для коректного відображення в AllSupliers
      const formattedData = {
          ...res.data,
          date: format(new Date(res.data.date), "MMMM dd, yyyy"),
      };
      
      return formattedData;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update supplier');
    }
  }
);
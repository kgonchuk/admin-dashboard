import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  format } from "date-fns";


const API_URL = 'https://admin-dashboard-backend-1-76pt.onrender.com/api';

// Fetch all suppliers

export const fetchSuppliers = createAsyncThunk(
  "suppliers/fetchSuppliers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/suppliers`);
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
      const res = await axios.post(`${API_URL}/suppliers`, supplierData);
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
      const res = await axios.put(`${API_URL}/suppliers/${id}`, updatedData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update supplier');
    }
  }
);
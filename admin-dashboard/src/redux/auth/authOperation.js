import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`; // ✅ Це обов'язково
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const API_URL = 'https://admin-dashboard-backend-1-76pt.onrender.com/api/user'; 

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("Sending login data:", { email, password }); 
       const res = await axios.post( `${API_URL}/login`, { email, password } );

 toast.success(`Welcome ${res.data.name}`);
      return res.data; 
    } catch (err) {
      toast.error('ERROR, Invalid data');
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

export const logOut = createAsyncThunk(
    "auth/logout", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth?.accessToken; 
    //  Якщо токена немає, ми не можемо надіслати запит на вихід. 
    if (!token) {
        clearAuthHeader();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        toast.error("Logout successful (No token to revoke)");
        return true; 
    }
    // ✅ Запит з токеном, отриманим зі стану
    await axios.post(`${API_URL}/logout`, null, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    });
    clearAuthHeader();
    toast.success("We are waiting for you again!"); 
    return true; 
  } catch (error) {
   const errorMessage = error.response?.data?.message || error.message || "Unknown error";
   toast.error(errorMessage)
   return thunkAPI.rejectWithValue(errorMessage);
}});

// Refresh token
export const refreshAccessToken = createAsyncThunk('auth/refreshAccessToken', async ( { rejectWithValue }) => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token');

    const res = await axios.post(`${API_URL}/refresh`, { refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = res.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    setAuthHeader(accessToken);

    return { accessToken, refreshToken: newRefreshToken };
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Token refresh failed');
  }
});




export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser', 
  async (_, { rejectWithValue }) => {
  try {
   const response = await axios.get(`${API_URL}/user-info`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Fetching user failed');
  }
});
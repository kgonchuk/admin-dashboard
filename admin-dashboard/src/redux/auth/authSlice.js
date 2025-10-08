

import { createSlice } from '@reduxjs/toolkit';
import { 
  logIn, 
  refreshAccessToken, 
  getCurrentUser, 
  logOut, 
  setAuthHeader, 
  clearAuthHeader 
} from '../auth/authOperation';

const initialState = {
  user: null,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // === LOGIN ===
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.success = true;

        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);

        console.log("Setting token to Axios:", action.payload.accessToken);
        setAuthHeader(action.payload.accessToken);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // === REFRESH TOKEN ===
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        setAuthHeader(action.payload.accessToken);
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.error = action.payload;
      })

      // === CURRENT USER ===
      .addCase(getCurrentUser.pending, (state) => { 
        state.loading = true; 
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => { 
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload; 
        state.accessToken = null; 
        state.refreshToken = null;
        clearAuthHeader();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })

      // === LOGOUT ===
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.success = false;

        clearAuthHeader();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .addCase(logOut.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
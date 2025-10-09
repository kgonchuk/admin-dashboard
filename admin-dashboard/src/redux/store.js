import { configureStore } from "@reduxjs/toolkit";
import {
 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";
import { suplierReducer, supplierReducer } from "./supplier/supplierSlice";



export const store = configureStore({

  
  reducer:{
    auth: authReducer,
    suppliers: supplierReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
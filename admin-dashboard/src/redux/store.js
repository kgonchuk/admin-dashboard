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
import { supplierReducer } from "./supplier/supplierSlice";
import { productReducer } from "./product/productSlice";
import { orderReducer } from "./order/orderSlice";
import { customerReducer } from "./cusrtomer/customerSlice";
import { dashboardReducer } from "./dashboard/dashboardSlice";



export const store = configureStore({

  
  reducer:{
    auth: authReducer,
    suppliers: supplierReducer,
    products: productReducer,
    orders: orderReducer,
    customers: customerReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
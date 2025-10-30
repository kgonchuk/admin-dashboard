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
import { productReducer } from "./product/productSlice";
import { orderReducer } from "./order/orderSlice";
import { customerReducer } from "./cusrtomer/customerSlice";



export const store = configureStore({

  
  reducer:{
    auth: authReducer,
    suppliers: supplierReducer,
    products: productReducer,
    orders: orderReducer,
    customers: customerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
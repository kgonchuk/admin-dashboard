import {Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, refreshAccessToken } from "./redux/auth/authOperation";
import { setAuthHeader } from './redux/auth/authOperation';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from "./components/PrivateRoute";



const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DasboardPage/DasboardPage"));
const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage/AllOrdersPage"));
const AllProductsPage = lazy(() => import("./pages/AllProductsPage/AllProductsPage"));
const AllSuppliersPage = lazy(() => import("./pages/AllSuppliersPage/AllSuppliersPage"));
const CustomersDataPage = lazy(() => import("./pages/CustomersDataPage/CustomersDataPage"));
const SharedLayout = lazy(() => import("./components/SharedLayout/SharedLayout"));


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    const initAuth = async () => { 
     const storedToken = localStorage.getItem('accessToken');
     if (storedToken) {
          setAuthHeader(storedToken); 
          try {
              await dispatch(getCurrentUser()).unwrap();
          } catch (error) {
              console.warn("Stored token is invalid or expired. Attempting refresh...");
              try {
                  await dispatch(refreshAccessToken()).unwrap();
              } catch (refreshError) {
                  console.error("Refresh failed. User must log in.", refreshError);
              }
          }
      } else {
          console.log("No token found in storage. Staying logged out.");
      }
    
    }; initAuth();
   
  }, [dispatch]);
  return (

    <div>
     <ToastContainer position="top-right" autoClose={5000} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Login окремо */}
          <Route path="/login" element={<LoginPage />} />

          {/* Усі інші сторінки під SharedLayout */}
          <Route path="/" element={<SharedLayout />}>
          
            <Route path="dashboard" element={
                <PrivateRoute>
                    <DashboardPage />
                </PrivateRoute>
            } />
            <Route path="orders" element={
                <PrivateRoute>
                    <AllOrdersPage />
                </PrivateRoute>
            } />
            <Route path="products" element={
                <PrivateRoute>
                    <AllProductsPage />
                </PrivateRoute>
            } />
            <Route path="suppliers" element={
                <PrivateRoute>
                    <AllSuppliersPage />
                </PrivateRoute>
            } />
            <Route path="customers" element={
                <PrivateRoute>
                    <CustomersDataPage />
                </PrivateRoute>
            } />

            {/* якщо зайшов на / → редірект на /login */}
            <Route index element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
import {Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, refreshAccessToken } from "./redux/auth/authOperation";
import { setAuthHeader } from './redux/auth/authOperation';



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
          
          // 3. Намагаємося отримати дані користувача для перевірки валідності токена
          try {
              // Якщо токен валідний, dispatch(getCurrentUser) успішно оновить Redux
              await dispatch(getCurrentUser()).unwrap();
          } catch (error) {
              // Якщо getCurrentUser (з токеном з localStorage) повертає 401/403:
              console.warn("Stored token is invalid or expired. Attempting refresh...");
              // Якщо getCurrentUser не спрацював, спробуємо оновити токен
              try {
                  await dispatch(refreshAccessToken()).unwrap();
                  // Після успішного refresh, токен вже встановлено, дані користувача оновляться
              } catch (refreshError) {
                  console.error("Refresh failed. User must log in.", refreshError);
                  // Очистити localStorage та заголовки, якщо refresh не вдався
                  // clearAuthHeader(); // Додайте, якщо маєте таку функцію
              }
          }
      } else {
          // console.log("No token found in storage. Staying logged out.");
      }
    
    }; initAuth();
   
  }, [dispatch]);
  return (

    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Login окремо */}
          <Route path="/login" element={<LoginPage />} />

          {/* Усі інші сторінки під SharedLayout */}
          <Route path="/" element={<SharedLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="orders" element={<AllOrdersPage />} />
            <Route path="products" element={<AllProductsPage />} />
            <Route path="suppliers" element={<AllSuppliersPage />} />
            <Route path="customers" element={<CustomersDataPage />} />

            {/* якщо зайшов на / → редірект на /login */}
            <Route index element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
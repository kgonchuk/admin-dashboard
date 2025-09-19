import {Route, Routes } from "react-router-dom";




import { lazy, Suspense } from "react";



const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DasboardPage/DasboardPage"));
const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage/AllOrdersPage"));
const AllProductsPage = lazy(() => import("./pages/AllProductsPage/AllProductsPage"));
const AllSuppliersPage = lazy(() => import("./pages/AllSuppliersPage/AllSuppliersPage"));
const CustomersDataPage = lazy(() => import("./pages/CustomersDataPage/CustomersDataPage"));
const SharedLayout = lazy(() => import("./components/SharedLayout/SharedLayout"));


function App() {
  return (

<div>
  <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
             
             <SharedLayout />
             
            }
          >

            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="orders" element={<AllOrdersPage />} />
            <Route path="products" element={<AllProductsPage />} />
            <Route path="suppliers" element={<AllSuppliersPage />} />
            <Route path="customers" element={<CustomersDataPage />} />

          </Route>
        </Routes>
   </Suspense>       
</div>
  );
}

export default App;
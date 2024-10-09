import React from "react";
import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AdminLayout from "./components/admin/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminDashboard from "./pages/admin/dashboard";
import AdminFeatures from "./pages/admin/features";
import AdminOrders from "./pages/admin/orders";
import AdminProducts from "./pages/admin/products";
import ShoppingLayout from "./components/shopping/layout";
import NotFound from "./pages/notfound";
import ShoppingHome from "./pages/shopping/home";
import ShoppingListing from "./pages/shopping/listing";
import ShoppingCheckout from "./pages/shopping/checkout";
import ShoppingAccount from "./pages/shopping/account";
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/unauth-page";
function App() {
  const isAuthenticated = false;
  const user = {
    name:'Faisal',
    role:'user'
  };
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Authlayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnAuthPage />} />
      </Routes>


    </div>
  );
}

export default App;

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
function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header</h1>
      <Routes>
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
        <Route path="home" element={<ShoppingHome/>} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <h1>Footer</h1>
    </div>
  );
}

export default App;

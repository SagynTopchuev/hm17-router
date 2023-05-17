import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { Istore } from "../istore/Istore";
import { MyCart } from "../mycart/MyCart";
import { MyOrders } from "../myorder/MyOrders";
import { ProductDetails } from "../product/ProductDetails";
import { Products } from "../product/Products";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/iStore" element={<Istore />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id/details" element={<ProductDetails />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/orders" element={<MyOrders />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

// import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import TopComputers from "./pages/TopComputers";
import React from "react";

import TopManufacturers from "./pages/TopManufacturers";
import History from "./pages/History";
import ComputerVersion from "./pages/ComputerVersion";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/top-manufactures' element={<TopManufacturers/>}/>
        <Route path='/computerVersion' element={<ComputerVersion/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

{
  /* <Routes> */
}
{
  /* <Route element={<RoutesWithUserChatComponent />}> */
}
{
  /* publicly available routes: */
}
{
  // <Route path="/" element={<HomePage />} >
  // <Route path="/top-computers" element={<TopComputers />} />
  /* // <Route path="/product-list" element={<ProductListPage />} />
          // <Route path="/product-list/:pageNumParam" element={<ProductListPage />} />
          // <Route path="/product-list/category/:categoryName" element={<ProductListPage />} />
          // <Route path="/product-list/category/:categoryName/:pageNumParam" element={<ProductListPage />} />
          // <Route path="/product-list/search/:searchQuery" element={<ProductListPage />} />
          // <Route path="/product-list/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          // <Route path="/product-list/category/:categoryName/search/:searchQuery" element={<ProductListPage />} />
          // <Route path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          // <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          // <Route path="/cart" element={<CartPage />} />
          // <Route path="/login" element={<LoginPage />} />
          // <Route path="/register" element={<RegisterPage />} />
        // <Route path="*" element="Page not exists 404" /> */
}

{
  /* user protected routes: */
}
{
  /* <Route element={<ProtectedRoutesComponent admin={false} />}> */
}
{
  /* <Route path="/" element={<Header />} /> */
}
{
  /* <Route path="/user" element={<UserProfilePage />} /> */
}
{
  /* <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          /> */
}
{
  /* </Route> */
}

{
  /* admin protected routes: */
}
{
  /* <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route> */
}
{
  /* </Routes> */
}

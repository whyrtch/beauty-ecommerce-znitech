import React, { useState } from 'react';
import SignIn from './page/sign-in/sign-in';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './page/main/main';
import FlashSale from './page/favorite/favorite';
import Brand from './page/brand/brand';
import BrandProfile from './page/brand-profile/brand-profile';
import ProductDetail from './page/product-detail/product-detail';
import CartBag from './page/cart-bag/cart-bag';
import Checkout from './page/checkout/checkout';
import Account from './page/account/account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/favorite" element={<FlashSale />} />
        <Route path="/flash-sale" element={<FlashSale />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/brand-profile" element={<BrandProfile />} />
        <Route path="/product" element={<Main />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart-bag" element={<CartBag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

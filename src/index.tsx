import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./page/sign-in/sign-in";
import Main from "./page/main/main";
import FlashSale from "./page/flash-sale/flash-sale";
import BrandProfile from "./page/brand-profile/brand-profile";
import ProductDetail from "./page/product-detail/product-detail";
import CartBag from "./page/cart-bag/cart-bag";
import Checkout from "./page/checkout/checkout";
import Brand from "./page/brand/brand";
import Account from "./page/account/account";
import AccountSetting from "./page/setting-account/account-setting";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../style/partials/_account.scss";
import wishListSharing from "../MyAccount/wishListSharing";

const ShareWishList = () => (
  <div id="page_wrapper">
    <div className="myaccount">
      <Header />
      <div id="maincontent" className="page-main">
        <wishListSharing/>
      </div>
      <Footer />
    </div>
  </div>
);

export default ShareWishList;

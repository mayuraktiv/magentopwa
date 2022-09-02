import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Wishlist from "../MyAccount/Wishlist";
import "../style/partials/_account.scss";

const MyWishlist = (props) => {
  return (
    <div id="page_wrapper">
      <div className="myaccount mywishlist">
        <Header />
        <div id="maincontent" className="page-main">
          <Wishlist />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyWishlist;

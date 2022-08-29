import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Account from "../MyAccount/Account";
import "../style/partials/_account.scss";

const MyAccount = () => (
  <div id="page_wrapper">
    <div className="myaccount">
      <Header />
      <div id="maincontent" className="page-main">
        <Account />
      </div>
      <Footer />
    </div>
  </div>
);

export default MyAccount;

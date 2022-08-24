import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Account from "../MyAccount/Account";
import "../style/base.scss";
import "../style/partials/_account.scss";

class MyAccount extends Component {
  render() {
    return (
      <div id="page_wrapper">
        <div className="myaccount">
          <Header></Header>
          <div id="maincontent" className="page-main">
            <Account></Account>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default MyAccount;

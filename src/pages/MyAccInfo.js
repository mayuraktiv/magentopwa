import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import AccountInformation from "../MyAccount/AccountInformation";
import "../style/base.scss";
import "../style/partials/_account.scss";

const MyAccInfo = (props) => {
    console.log(props,"props")
  return (
    <div id="page_wrapper">
      <div className="myaccount myaccountinfo">
        <Header/>
        <div id="maincontent" className="page-main">
          <AccountInformation></AccountInformation>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyAccInfo;

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../style/partials/_account.scss";
import ChangePass from "../MyAccount/ChangePass";
import useReplacePath from "../controllers/hooks/useReplacePath";

const ChangePassword = (props) => {
  const { replacePath } = useReplacePath();
  const afterEditPassword = () => {
    let path = "/customer/account/";
    // if (props.location?.state?.redirectPath?.length > 0) {
    //   path = props.location.state.redirectPath;
    // }
    props.history.goBack(path);
  };
  return (
    <div id="page_wrapper">
      <div className="myaccount">
        <Header />
        <div id="maincontent" className="page-main">
          <ChangePass afterEditPassword={afterEditPassword} replacePath={replacePath} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChangePassword;

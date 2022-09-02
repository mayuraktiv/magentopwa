import React, { useContext } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../style/partials/_account.scss";
import EditAccountInformation from "../MyAccount/EditAccountInformation";
import AuthContext from "../controllers/contexts/auth/AuthContext";
import useReplacePath from "../controllers/hooks/useReplacePath";

const EditAccountInfo = (props) => {
  console.log("props", props);

  const { userdata } = useContext(AuthContext);
  const { replacePath } = useReplacePath();
  const afterEditEmail = () => {
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
          <EditAccountInformation
            userdata={userdata}
            replacePath={replacePath}
            afterEditEmail={afterEditEmail}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditAccountInfo;

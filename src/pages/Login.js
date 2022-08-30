import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import UserLogin from "../User/UserLogin";
import "../style/partials/_form.scss";
import useReplacePath from "../controllers/hooks/useReplacePath";

const Login = (props) => {
  const { replacePath } = useReplacePath();
  const afterLogin = () => {
    let path = "/";
    if (props.location?.state?.redirectPath?.length > 0) {
      path = props.location.state.redirectPath;
    }
    props.history.replace(path);
  };
  return (
    <div id="page_wrapper">
      <div className="block-content">
        <div className="login">
          <Header />
          <div id="maincontent" className="page-main">
            <div className="columns frame">
              <div className="column main">
                <div className="block-title">
                  <h5>Sign In</h5>
                </div>
                <UserLogin afterLogin={afterLogin} replacePath={replacePath} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;

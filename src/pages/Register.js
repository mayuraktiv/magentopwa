import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import UserRegister from "../User/UserRegister";
import useReplacePath from "../controllers/hooks/useReplacePath";
import "../style/partials/_form.scss";

const Register = (props) => {
  const { replacePath } = useReplacePath();
  const afterRegister = () => {
    let path = "/";
    if (props.location?.state?.redirectPath?.length > 0) {
      path = props.location.state.redirectPath;
    }
    props.history.replace(path);
  };
  return (
    <div id="page_wrapper">
      <div className="register">
        <Header />
        <div id="maincontent" className="page-main">
          <div className="columns frame">
            <div className="column main">
              <div className="block-title">
                <h5>Sign Up</h5>
              </div>
              <UserRegister afterRegister={afterRegister} replacePath={replacePath}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Register;

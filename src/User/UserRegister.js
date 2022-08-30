import React from "react";
import { connect } from "react-redux";
import userRegisterApp from "../controllers/apps/userRegisterApp";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

class UserRegister extends userRegisterApp {
  render() {
    return (
      <div className="block-content">
        <form className="register-form" onSubmit={this.onFormSubmit}>
          <fieldset className="fieldset register">
            <div className="row customer-name-fields">
              <div className="col-des-6 col-tb-6 col-mb-12 field-name-firstname">
                <label className="label">
                  <span>First Name</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="input-text"
                    value={this.state.form.firstname}
                    onChange={this.valueChangeHandler}
                  />
                </div>
                {!this.state.validation.firstname.valid && (
                  <div className="input-error-message">Required</div>
                )}
              </div>
              <div className="col-des-6 col-tb-6 col-mb-12 field-name-lastname">
                <label className="label">
                  <span>Last Name</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="input-text"
                    value={this.state.form.lastname}
                    onChange={this.valueChangeHandler}
                  />
                  {!this.state.validation.lastname.valid && (
                    <div className="input-error-message">Required</div>
                  )}
                </div>
              </div>
            </div>
            <div className="field email required">
              <label className="label" for="email">
                <span>Email</span>
              </label>
              <div className="control">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input-text"
                  value={this.state.form.email}
                  onChange={this.valueChangeHandler}
                />
              </div>
              {!this.state.validation.email.valid && (
                <div className="input-error-message">
                  Please enter valid email
                </div>
              )}
            </div>
            <div className="field password required">
              <label className="label" for="password">
                <span>Password</span>
              </label>
              <div className="control">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-text"
                  value={this.state.form.password}
                  onChange={this.valueChangeHandler}
                />
              </div>
              {!this.state.validation.password.valid && (
                <div className="input-error-message">Required</div>
              )}
            </div>
          </fieldset>
          <div className="actions-toolbar">
            <div className="primary">
              {this.state.loading ? (
                <button type="button" className="btn btn-default">
                  <CircularProgress size={25} color="#000" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-default"
                  disabled={!this.state.isValidForm}
                >
                  <span>Sign UP</span>
                </button>
              )}
            </div>
            <div className="secondary">
              <span>Alreay have an account?</span>
              <span>
                <a
                  onClick={() =>
                    this.props.replacePath("/customer/account/login/")
                  }
                  className="custom_link"
                >
                  Sign In
                </a>
              </span>
              <span>
                <a
                  onClick={() =>
                    this.props.replacePath("/customer/account/forgotpassword/")
                  }
                  className="custom_link"
                >
                  Forgot Password
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  userRegisterApp.mapStateToProps,
  userRegisterApp.mapDispatchToProps
)(UserRegister);

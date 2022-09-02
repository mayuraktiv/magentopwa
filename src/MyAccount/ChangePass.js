import React  from "react";
import MainSidebar from "../MyAccount/MainSidebar";
import changePasswordApp from "../controllers/apps/changePasswordApp";
import { CircularProgress } from "@material-ui/core";

export default class ChangePass extends changePasswordApp {
  render() {
    return (
      <div className="columns frame">
        <MainSidebar />
        <div className="column main">
          <form className="form-edit-account" onSubmit={this.onFormSubmit}>
            <fieldset className="fieldset info">
              <div className="block-title-account">
                <h5>Change Password</h5>
              </div>
              <div className="col-des-6 col-tb-6 col-mb-14 field-name-currentPass">
                <label className="label" for="current-password">
                  <span>Current Password</span>
                </label>
                <div className="control">
                <input
                  type="password"
                  name="currentPass"
                  id="currentPass"
                  className="input-text"
                  value={this.state.form.currentPass}
                  onChange={this.valueChangeHandler}
                />
              </div>
                {!this.state.validation.currentPass.valid && (
                  <div className="input-error-message">
                    Please enter valid password
                  </div>
                )}
              </div>
              <div className="col-des-6 col-tb-6 col-mb-12">
                <label className="label" for="password">
                  <span>New Password</span>
                </label>
                <div className="control">
                  <input
                    type="password"
                    name="NewPassword"
                    id="NewPassword"
                    className="input-text"
                    value={this.state.form.NewPassword}
                    onChange={this.valueChangeHandler}
                  />
                </div>
                {!this.state.validation.NewPassword.valid && (
                  <div className="input-error-message">
                    Please enter new password
                  </div>
                )}
              </div>
              <div className="col-des-6 col-tb-6 col-mb-12">
                <label className="label" htmlFor="current-password">
                  <span>Confirm New Password</span>
                </label>
                <div className="control">
                  <input
                    type="password"
                    name="confirmPass"
                    id="password-confirmation"
                    className="input-text"
                    value={this.state.form.confirmPass}
                    onChange={this.valueChangeHandler}
                  />
                </div>
                {!this.state.validation.confirmPass.valid && (
                  <div className="input-error-message">
                    Password do not match
                  </div>
                )}
              </div>
            </fieldset>
            <div className="actions-toolbar-form">
            <div className="primary">
                {this.state.loading ? (
                  <button disabled className="btn btn-default">
                    <CircularProgress color="#fff" size={25} />
                  </button>
                ) : (
                  <button
                    onClick={() => this.props.goBack("/customer/account/")}
                    type="submit"
                    className={
                      this.state.isValidForm
                        ? "btn btn-default"
                        : "btn btn-default disabled"
                    }
                    disabled={!this.state.isValidForm}
                  >
                    <span>Save</span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

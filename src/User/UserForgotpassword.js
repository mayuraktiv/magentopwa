import React from "react";
import { connect } from "react-redux";
import "../style/partials/_form.scss";
import forgotPasswordApp from "../controllers/apps/forgotPasswordApp";

class Userforgotpassword extends forgotPasswordApp {
  render() {
    return (
      <div className="block-content">
        <form className="forgotpassword-form" onSubmit={this.onFormSubmit}>
          <fieldset className="fieldset forgotpassword">
            <div className="field email required">
              <label className="label" for="emial">
                <span>
                  Please enter your email address below to receive a password
                  reset link.
                </span>
              </label>
              <div className="control">
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-text"
                  value={this.state.form.email}
                  onChange={this.valueChangeHandler}
                />
              </div>
              {!this.state.validation.email.valid && (
                <div className="input-error-message">Please enter valid email</div>
              )}
            </div>
            <div className="actions-toolbar">
              <div className="primary">
                <button type="submit" class="btn btn-default">
                  <span>Submit</span>
                </button>
              </div>
              <div className="secondary">
                <button class="btn btn-default">
                  <span>Back</span>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default Userforgotpassword;

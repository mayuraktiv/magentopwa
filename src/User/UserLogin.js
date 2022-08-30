import LoginApp from "../controllers/apps/LoginApp";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

class Userlogin extends LoginApp {
  render() {
    return (
      <div className="block-content">
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <fieldset className="fieldset login">
            <div className="field email required">
              <label className="label" for="emial">
                <span>Email Address</span>
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
                <div className="input-error-message">Required</div>
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
            <div className="actions-toolbar">
              <div className="primary">
                {this.state.loading ? (
                  <button type="button" className="btn btn-default">
                    <CircularProgress size={25} color="#000" />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-default">
                    <span>Sign In</span>
                  </button>
                )}
              </div>
              <div className="secondary">
                <span>New User?</span>
                <span>
                  <a
                    onClick={() =>
                      this.props.replacePath("/customer/account/create/")
                    }
                    className="custom_link"
                  >
                    Sign Up
                  </a>
                </span>
                <span>
                  <a
                    onClick={() =>
                      this.props.replacePath(
                        "/customer/account/forgotpassword/"
                      )
                    }
                    className="custom_link"
                  >
                    Forgot Password
                  </a>
                </span>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(
  LoginApp.mapStateToProps,
  LoginApp.mapDispatchToProps
)(Userlogin);

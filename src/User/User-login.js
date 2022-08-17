import LoginApp from "../controllers/apps/LoginApp";

export default class Userlogin extends LoginApp {
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
                ></input>
              </div>
            </div>
            <div className="actions-toolbar">
              <div className="primary">
                <button type="submit" class="btn btn-default">
                  <span>Sign In</span>
                </button>
              </div>
              <div className="secondary">
                <span>New User?</span>
                <span>
                  <a href="/register" className="custom_link">
                    Sign Up
                  </a>
                </span>
                <span>
                  <a href="/forgotpassword" className="custom_link">
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

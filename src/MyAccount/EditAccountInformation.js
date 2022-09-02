import { CircularProgress } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import editEmailApp from "../controllers/apps/editEmailApp";
import MainSidebar from "./MainSidebar";

class EditAccountInformation extends editEmailApp {
  render() {
    return (
      <div className="columns frame">
        <MainSidebar />
        <div className="column main">
          <form className="form-edit-account" onSubmit={this.onFormSubmit}>
            <fieldset className="fieldset info">
              <div className="block-title-account">
                <h5>Edit Email </h5>
              </div>
              <div className="row customer-name-fields">
                <div className="col-des-6 col-tb-6 col-mb-12 field-name-firstname">
                  <div className="control">
                    <input
                      type="text"
                      id="firstname"
                      placeholder="First Name"
                      value={this.props.userdata.firstname}
                      className="input-text"
                    />
                  </div>
                </div>
                <div className="col-des-6 col-tb-6 col-mb-12 field-name-lastname">
                  <div className="control">
                    <input
                      type="text"
                      id="lasttname"
                      placeholder="Last Name"
                      value={this.props.userdata.lastname}
                      className="input-text"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset password">
              <div className="field email required">
                <label className="label" for="email">
                  <span>Email</span>
                </label>
                <div className="control">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="input-text"
                    value={this.state.form.email}
                    onChange={this.valueChangeHandler}
                  />
                </div>
                {!this.state.validation.email.valid && (
                  <div className="input-error-message">
                    Please enter valid Email
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
                    <span>save</span>
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
export default connect(
  editEmailApp.mapStateToProps,
  editEmailApp.mapDispatchToProps
)(EditAccountInformation);

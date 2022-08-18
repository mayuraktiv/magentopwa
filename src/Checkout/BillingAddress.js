import { Fragment } from "react";
import { connect } from "react-redux";
import billingAddressApp from "../controllers/apps/billingAddressApp";

class BillingAddress extends billingAddressApp {
  render() {
    return (
      <form className="address-form" onSubmit={this.onFormSubmit}>
        <fieldset className="fieldset">
          <div className="row">
            <div className="col-des-6 col-tb-6 col-mb-12 field-name-firstname">
              <label className="label">
                <span>First Name</span>
              </label>
              <div className="control">
                <input
                  type="text"
                  id="firstname"
                  className="input-text"
                  name="firstname"
                  value={this.state.form.firstname}
                  onChange={this.onValueChangeHandler}
                />
                {!this.state.validation.firstname.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
            <div className="col-des-6 col-tb-6 col-mb-12 field-name-lastname">
              <label className="label">
                <span>Last Name</span>
              </label>
              <div className="control">
                <input
                  type="text"
                  id="lastname"
                  className="input-text"
                  name="lastname"
                  value={this.state.form.lastname}
                  onChange={this.onValueChangeHandler}
                />
                {!this.state.validation.lastname.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-des-6 col-tb-6 col-mb-12">
              <label className="label">
                <span>Telephone</span>
              </label>
              <div className="control">
                <input
                  type="number"
                  id="telephone"
                  className="input-text"
                  name="telephone"
                  value={this.state.form.telephone}
                  onChange={this.onValueChangeHandler}
                />
                {!this.state.validation.telephone.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
            <div className="col-des-6 col-tb-6 col-mb-12">
              <label className="label">
                <span>Address</span>
              </label>
              <div className="control">
                <input
                  type="text"
                  id="street"
                  className="input-text"
                  name="street"
                  value={this.state.form.street}
                  onChange={this.onValueChangeHandler}
                />
                {!this.state.validation.street.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-des-6 col-tb-6 col-mb-12">
              <label className="label">
                <span>city</span>
              </label>
              <div className="control">
                <input
                  type="text"
                  id="city"
                  className="input-text"
                  name="city"
                  value={this.state.form.city}
                  onChange={this.onValueChangeHandler}
                />
                {!this.state.validation.city.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
            <div className="col-des-6 col-tb-6 col-mb-12">
              <label className="label">
                <span>Country</span>
              </label>
              <div className="control">
                <select
                  id="country_code"
                  name="country_code"
                  onChange={this.onValueChangeHandler}
                  value={this.state.form.country_code}
                >
                  <option value="">Please select country</option>
                  {this.props.countries.map((item) => (
                    <option value={item.id} key={`country-${item.id}`}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {!this.state.validation.country_code.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-des-6 col-tb-6 col-mb-12">
              <label className="label">
                <span>State</span>
              </label>
              <div className="control">
                {this.state.states.length > 0 ? (
                  <Fragment>
                    <select
                      id="region_id"
                      name="region_id"
                      onChange={this.onValueChangeHandler}
                      value={this.state.form.region_id}
                    >
                      <option value="">Please select state</option>
                      {this.state.states?.map((item) => (
                        <option value={item.id} key={`country-${item.id}`}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {!this.state.validation.region_id.valid &&
                      <div className="input-error-message">
                        Required
                      </div>
                    }
                  </Fragment>
                ) : (
                  <Fragment>
                    <input
                      type="text"
                      id="region"
                      className="input-text"
                      name="region"
                      placeholder="state"
                      value={this.state.form.region}
                      onChange={this.onValueChangeHandler}
                    />
                    {!this.state.validation.region.valid &&
                      <div className="input-error-message">
                        Required
                      </div>
                    }
                  </Fragment>
                )}
              </div>
            </div>
            <div className="col-des-6 col-tb-6 col-mb-12">
              <label className="label">
                <span>Pincode</span>
              </label>
              <div className="control">
                <input
                  type="text"
                  id="postcode"
                  className="input-text"
                  name="postcode"
                  value={this.state.form.postcode}
                  onChange={this.onValueChangeHandler}
                />
                {!this.state.validation.postcode.valid &&
                  <div className="input-error-message">
                    Required
                  </div>
                }
              </div>
            </div>
          </div>
        </fieldset>
        <div className="actions-toolbar">
          <div className="primary">
            <button type="submit" className={this.state.isValidForm ? "btn btn-default" : "btn btn-default disabled"} disabled={!this.state.isValidForm}>
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default connect(
  billingAddressApp.mapStateToProps,
  billingAddressApp.mapDispatchToProps
)(BillingAddress);

import { connect } from "react-redux";
import shippingAddressApp from "../controllers/apps/shippingAddressApp";

class UserShippingaddress extends shippingAddressApp {
  render() {
    console.log("UserShippingaddress----->", this.state);
    return (
      <form className="address-form" onSubmit={this.setShippingAdreess}>
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
                ></input>
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
                  value={this.state.form.address}
                  onChange={this.onValueChangeHandler}
                ></input>
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
                ></input>
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
                        {/* {console.log("item",item.name)} */}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    id="region"
                    className="input-text"
                    name="region"
                    placeholder="state"
                    value={this.state.form.region}
                    onChange={this.onValueChangeHandler}
                  />
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
                  id="pincode"
                  className="input-text"
                  name="pincode"
                  value={this.state.form.pincode}
                  onChange={this.onValueChangeHandler}
                ></input>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="actions-toolbar">
          <div className="primary">
            <button type="submit" class="btn btn-default">
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default connect(
  shippingAddressApp.mapStateToProps,
  shippingAddressApp.mapDispatchToProps
)(UserShippingaddress);

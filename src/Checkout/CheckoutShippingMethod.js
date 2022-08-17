import { connect } from "react-redux";
import shippingMethodApp from "../controllers/apps/shippingMethodApp";

 class CheckoutShippingMethod extends shippingMethodApp {
  render() {
    return (
      <div className="shipping_method">
        <div className="custom_radio_box">
          <input
            type="radio"
            id="flatrate"
            name="flatrate"
            value="flatrate"
            checked={this.state.selected === "flatrate"}
            onChange={this.onvalueChangeHandler}
          />
          <label className="custom_radio_label" for="flatrate">
            <span className="checkout_fixed_rate">$ 5</span>
            <span>Fixed Flat Rate</span>
          </label>
        </div>
      </div>
    );
  }
}
export default connect(shippingMethodApp.mapStateToProps,shippingMethodApp.mapDispatchToProps)(CheckoutShippingMethod)
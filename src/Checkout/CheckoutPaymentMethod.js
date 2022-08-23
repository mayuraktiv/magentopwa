import React from "react";
import { connect } from "react-redux";
import paymentMethodApp from "../controllers/apps/paymentMethodApp";

class CheckoutPaymetMethod extends paymentMethodApp {
  render() {
    console.log("paymentMethods---->", this.props);
    return (
      <div className="payment_method">
        {this.props.paymentMethods?.map(item => (
          <div className="custom_radio_box" key={`payment_method-${item.code}`}>
            <input
              type="radio"
              id={`payment_method-${item.code}`}
              name="payment_method"
              value={item.code}
              checked={item.code === this.state.selectedMethod}
              onChange={this.onPaymentMethodChange}
            ></input>
            <label className="custom_radio_label" htmlFor={`payment_method-${item.code}`}>
              <span className="checkout_payment_method">{item.title}</span>
            </label>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(paymentMethodApp.mapStateToProps, paymentMethodApp.mapDispatchToProps)(CheckoutPaymetMethod)
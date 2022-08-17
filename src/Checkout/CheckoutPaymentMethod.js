import React, { Component } from "react";
import { connect } from "react-redux";
import paymentMethodApp from "../controllers/apps/paymentMethodApp";

class CheckoutPaymetMethod extends paymentMethodApp {
  render() {
    return (
      <div className="payment_method">
        <div className="custom_radio_box">
          <input
            type="radio"
            id="payment-method"
            name="payment"
            value="payment"
            checked={this.state.payment === "payment"}
            onChange={this.onValueChangeHandler}
          ></input>
          <label className="custom_radio_label" for="payment-method">
            <span className="checkout_payment_method">Cash On Delivery</span>
          </label>
        </div>
      </div>
    );
  }
}
export default connect(paymentMethodApp.mapStateToProps,paymentMethodApp.mapDispatchToProps)(CheckoutPaymetMethod)
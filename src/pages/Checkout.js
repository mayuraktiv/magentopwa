import React from "react";
import { connect } from 'react-redux';
import checkoutApp from "../controllers/apps/checkoutApp";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CheckoutEmail from "../Checkout/CheckoutEmail";
import ShippingAddress from "../Checkout/ShippingAddress";
import BillingAddress from "../Checkout/BillingAddress";
import CheckoutShippingMethod from "../Checkout/CheckoutShippingMethod";
import CheckoutPaymetMethod from "../Checkout/CheckoutPaymentMethod";
import CheckoutCouponCode from "../Checkout/CouponCode";
import UserShippingaddressdetail from "../User/User-Shppingaddressdetail";
import "../style/partials/_checkout.scss";
import { withRouter } from "react-router-dom";

class Checkout extends checkoutApp {
  render() {
    return (
      <div id="page_wrapper">
        <div className="checkout-page">
          <Header />
          <div id="maincontent" className="page-main">
            <div className="checkout_page_main_container">
              <div className="checkout_content">
                <div className="checkout_title">Checkout</div>
                <span className="checkout_title_desc">
                  Please enter your detail below to complete your purchase.
                </span>
                <div className="checkout_panel">
                  <div className="checkout_panel_main">
                    <CheckoutEmail />
                    <div className="checkout_second_step box1">
                      <h3 className="checkout-title">
                        <span className="mark"></span>
                        <span>Shipping Address</span>
                      </h3>
                      <ShippingAddress />
                    </div>
                    <div className="checkout_third_step box1">
                      <h3 className="checkout-title">
                        <span className="mark"></span>
                        <span>Shipping Method</span>
                      </h3>
                      <CheckoutShippingMethod />
                    </div>
                  </div>
                  <div className="checkout_panel_paymentmethod">
                    <div className="checkout_fourth_step box1">
                      <h3 className="checkout-title">
                        <span className="mark"></span>
                        <span>Payment Method</span>
                      </h3>
                      <CheckoutPaymetMethod />
                      <div className="field choice">
                        <input
                          type="checkbox"
                          name="change_email"
                          id="change-email"
                          className="checkbox"
                        ></input>
                        <label className="label" for="change-email">
                          <span>Change Billing Address</span>
                        </label>
                      </div>
                      <BillingAddress />
                      {/* <div className="new-shipping-address-form">
                        <span className="title">Add New Address</span>
                      </div>
                      <UserShippingaddressdetail /> */}
                    </div>
                    <div className="checkout_coupon_code box1">
                      <CheckoutCouponCode />
                    </div>
                  </div>
                  <div className="checkout_panel_ordersummary box1">
                    {this.state.loading
                      ?
                      <button disabled className="btn btn-default btn-bg place_order">
                        PLEASE WAIT...
                      </button>
                      :
                      <button type="button" onClick={this.placeOrder} disabled={!this.props.isValidCheckout} className="btn btn-default btn-bg place_order">
                        PLACE ORDER
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(checkoutApp.mapStateToProps, checkoutApp.mapDispatchToProps)(withRouter(Checkout));
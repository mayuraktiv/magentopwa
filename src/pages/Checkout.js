import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../style/base.scss';
import '../style/partials/_checkout.scss'
// import CheckoutSummary from '../Checkout/CheckoutSummary';
import CheckoutEmail from '../Checkout/CheckoutEmail';
import UserShippingaddress from '../User/User-Shippingaddress';
import CheckoutShippingMethod from '../Checkout/CheckoutShippingMethod';
import CheckoutPaymetMethod from '../Checkout/CheckoutPaymentMethod';
import CheckoutCouponCode from '../Checkout/CouponCode';
import UserShippingaddressdetail from '../User/User-Shppingaddressdetail';

export default class Checkout extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="checkout-page">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <div className='checkout_page_main_container'>
                                <div className='checkout_content'>
                                    <div className='checkout_title'>Checkout</div>
                                    <span className='checkout_title_desc'>Please enter your detail below to complete your purchase.</span>
                                    <div className='checkout_panel'>
                                        <div className='checkout_panel_main'>
                                            <CheckoutEmail></CheckoutEmail> 
                                            <div className='checkout_second_step box1'>
                                                <h3 className='checkout-title'><span className='mark'></span><span>Shipping Address</span></h3>
                                                <UserShippingaddress></UserShippingaddress> 
                                            </div>
                                            <div className='checkout_third_step box1'>
                                                <h3 className='checkout-title'><span className='mark'></span><span>Shipping Method</span></h3>
                                                <CheckoutShippingMethod></CheckoutShippingMethod>
                                            </div>
                                        </div>
                                        <div className='checkout_panel_paymentmethod'>
                                            <div className='checkout_fourth_step box1'>
                                                <h3 className='checkout-title'><span className='mark'></span><span>Payment Method</span></h3>
                                                <CheckoutPaymetMethod></CheckoutPaymetMethod>
                                                <div className='field choice'>
                                                    <input type='checkbox' name='change_email' id='change-email' className='checkbox'></input>
                                                    <label className='label' for='change-email'><span>Change Billing Address</span></label>
                                                </div>
                                                <UserShippingaddress></UserShippingaddress> 
                                                <div className='new-shipping-address-form'><span className='title'>Add New Address</span></div>
                                                <UserShippingaddressdetail></UserShippingaddressdetail>
                                            </div>
                                            <div className='checkout_coupon_code box1'>
                                                <CheckoutCouponCode></CheckoutCouponCode>
                                            </div>
                                        </div>
                                        <div className='checkout_panel_ordersummary box1'>
                                            {/* <CheckoutSummary></CheckoutSummary> */}
                                            <button  className='btn btn-default btn-bg place_order'>PLACE ORDER</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}


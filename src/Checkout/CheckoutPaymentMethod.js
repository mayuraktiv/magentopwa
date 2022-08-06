import React, { Component } from 'react';

export default class CheckoutPaymetMethod extends Component {
    render() {
        return (
            <div className='payment_method'>
               <div className='custom_radio_box'>
                    <input type='radio' id='payment-method'></input>
                    <label className='custom_radio_label' for='payment-method'>
                        <span className='checkout_payment_method'>Cash On Delivery</span>
                    </label>
                </div>
            </div>
        );
    }
}
